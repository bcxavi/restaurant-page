# El racó de l’Ona

A restaurant page project built with JavaScript, Webpack and dynamic DOM manipulation as part of the Foundations course from The Odin Project.

## Features

- Dynamic tab navigation
- Modular JavaScript architecture
- Webpack bundling
- Responsive layout
- Custom branding inspired by Ona 🐶
- Menu and contact sections generated entirely with JavaScript

## Built With

- HTML5
- CSS3
- JavaScript (ES6 Modules)
- Webpack
- Git & GitHub Pages

## Live Preview

Add your GitHub Pages URL here:

```txt
https://your-username.github.io/restaurant-page/
```

## Getting Started

Clone the repository:

```bash
git clone https://github.com/your-username/restaurant-page.git
```

Move into the project directory:

```bash
cd restaurant-page
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run start
```

## Build

Generate the production build:

```bash
npx webpack
```

## Deployment (GitHub Pages)

Publish updates to GitHub Pages:

```bash
git checkout gh-pages
git merge main --no-edit

npx webpack

git add dist -f
git commit -m "Update deployment"

git subtree push --prefix dist origin gh-pages

git checkout main
```

## What I Learned

This project helped reinforce concepts such as:

- DOM manipulation
- Event listeners
- ES6 modules
- Import / Export
- Webpack configuration
- Dynamic rendering
- Asset handling with Webpack
- Basic deployment workflows

## Project Structure

```txt
restaurant-page/
├── dist/
├── src/
│   ├── images/
│   ├── home.js
│   ├── menu.js
│   ├── contact.js
│   ├── index.js
│   ├── styles.css
│   └── template.html
├── webpack.config.js
├── package.json
└── README.md
```

## Acknowledgements

This project was completed as part of:

- The Odin Project
