/* ==========================================================
   Portfólio — Alexandre Gabriel
   Menu mobile, link ativo, acordeão de hobbies, copiar e-mail
   ========================================================== */
(function () {
  "use strict";

  var root = document.documentElement;
  root.classList.add("js");

  // Entrada da página (uma única sequência no hero)
  window.addEventListener("DOMContentLoaded", function () {
    requestAnimationFrame(function () {
      root.classList.add("is-ready");
    });
  });

  // Ano do rodapé
  var year = document.getElementById("ano");
  if (year) year.textContent = new Date().getFullYear();

  /* ---------- Menu mobile ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("menu");

  function setMenu(open) {
    toggle.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("is-open", open);
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      setMenu(toggle.getAttribute("aria-expanded") !== "true");
    });

    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) setMenu(false);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setMenu(false);
        toggle.focus();
      }
    });
  }

  /* ---------- Link ativo conforme a seção na tela ---------- */
  var links = Array.prototype.slice.call(document.querySelectorAll(".nav__list a"));
  var sections = links
    .map(function (a) { return document.querySelector(a.getAttribute("href")); })
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          links.forEach(function (a) {
            var active = a.getAttribute("href") === "#" + entry.target.id;
            if (active) a.setAttribute("aria-current", "true");
            else a.removeAttribute("aria-current");
          });
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach(function (s) { observer.observe(s); });
  }

  /* ---------- Acordeão de hobbies ---------- */
  var buttons = document.querySelectorAll(".hobby__btn");

  function setHobby(btn, open) {
    btn.setAttribute("aria-expanded", String(open));
    btn.closest(".hobby").classList.toggle("is-open", open);
  }

  buttons.forEach(function (btn) {
    // Estado inicial vindo do HTML
    setHobby(btn, btn.getAttribute("aria-expanded") === "true");

    btn.addEventListener("click", function () {
      var willOpen = btn.getAttribute("aria-expanded") !== "true";
      buttons.forEach(function (other) { setHobby(other, false); });
      setHobby(btn, willOpen);
    });
  });

  /* ---------- Copiar e-mail ---------- */
  var copyBtn = document.getElementById("copy-email");
  var emailLink = document.getElementById("email-link");
  var status = document.getElementById("copy-status");

  if (copyBtn && emailLink) {
    copyBtn.addEventListener("click", function () {
      var email = emailLink.textContent.trim();
      var done = function () {
        copyBtn.textContent = "E-mail copiado";
        if (status) status.textContent = "E-mail copiado para a área de transferência.";
        setTimeout(function () { copyBtn.textContent = "Copiar e-mail"; }, 2000);
      };

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(done).catch(function () {
          copyBtn.textContent = "Não foi possível copiar";
        });
      } else {
        copyBtn.textContent = "Selecione e copie";
      }
    });
  }
})();
