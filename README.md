# Portfólio — Alexandre Gabriel

Site pessoal feito com HTML, CSS e JavaScript puros, responsivo (mobile first) e pronto para o GitHub Pages.

## Estrutura

```
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   ├── foto.jpg          ← sua foto
│   ├── avatar.svg        (placeholder, não usado)
│   ├── favicon.svg
│   └── icons/
│       ├── gamepad.svg
│       ├── headphones.svg
│       ├── ball.svg
│       └── people.svg
└── README.md
```

## O que editar antes de publicar

1. **Textos**: ajuste "Sobre mim", "Praticando" e os hobbies como quiser.

## Testar no computador

Basta abrir o `index.html` no navegador. Se tiver o Python instalado:

```bash
python -m http.server 8000
```

e acessar `http://localhost:8000`.

## Publicar no GitHub Pages

### Opção A: pelo site do GitHub (sem terminal)

1. Entre em https://github.com e clique em **New repository**.
2. Nome do repositório: `portfolio` (ou `SEU-USUARIO.github.io` para ter o endereço mais curto).
3. Deixe como **Public** e clique em **Create repository**.
4. Clique em **uploading an existing file** e arraste **o conteúdo** da pasta (o `index.html`, e as pastas `css`, `js` e `images`). O `index.html` precisa ficar na raiz do repositório.
5. Clique em **Commit changes**.
6. Vá em **Settings → Pages**. Em **Build and deployment**, escolha **Deploy from a branch**, branch **main**, pasta **/(root)** e clique em **Save**.
7. Aguarde 1 a 2 minutos. O endereço aparece na mesma tela:
   - `https://SEU-USUARIO.github.io/portfolio/` (repositório `portfolio`)
   - `https://SEU-USUARIO.github.io/` (repositório `SEU-USUARIO.github.io`)

### Opção B: pelo terminal com Git

```bash
cd portfolio
git init
git add .
git commit -m "Primeira versão do portfólio"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/portfolio.git
git push -u origin main
```

Depois siga o passo 6 acima para ativar o Pages.

## Atualizar o site

Edite os arquivos, faça novo commit e push (ou envie os arquivos de novo pelo site). O GitHub Pages atualiza sozinho em instantes.
