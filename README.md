# Anthony Dolan — Portfolio

A dark, techy personal portfolio and digital resume built with React. Hosted on GitHub Pages.

## Quick Start

```bash
# Install dependencies
npm install

# Run locally
npm start

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## Project Structure

```
src/
├── App.jsx              # Root component — wires all sections together
├── index.jsx            # React entry point
├── index.css            # Global CSS variables, resets, animations
└── components/
    ├── Nav.jsx / .css        # Fixed top navigation bar
    ├── Hero.jsx / .css       # Landing hero section
    ├── About.jsx / .css      # Bio + education card
    ├── Skills.jsx / .css     # Skill category blocks
    ├── Experience.jsx / .css # Work history timeline
    ├── Projects.jsx / .css   # GitHub repos grid
    ├── Connect.jsx / .css    # Contact links
    └── Footer.jsx / .css     # Footer
```

## How to Edit

### Update your bio
Open `src/components/About.jsx` and edit the `<p>` tags directly.

### Add/remove skills
Open `src/components/Skills.jsx` and edit the `SKILLS` array at the top of the file.

### Add a new job
Open `src/components/Experience.jsx` and add an object to the `JOBS` array.

### Add a GitHub repo
Open `src/components/Projects.jsx` and add an object to the `REPOS` array.

### Update contact links
Open `src/components/Connect.jsx` and edit the `LINKS` array.

### Change colors or fonts
Open `src/index.css` and edit the CSS variables under `:root`.

## Deploying to GitHub Pages

1. In `package.json`, confirm `"homepage"` is set to `"https://AnthonyDolan36.github.io"`
2. Run `npm run deploy`
3. Your site will be live at [https://AnthonyDolan36.github.io](https://AnthonyDolan36.github.io)
