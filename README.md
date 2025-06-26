# Years With You

A beautiful, interactive photo story website to showcase memories from a couple's journey together. Features scroll-triggered animations, responsive design, and separate pages for each year.

## Features

- **Interactive Story Map**: Photos with journal entries that fade in as you scroll
- **Multi-Year Navigation**: Separate pages for Year 1, Year 2, and Year 3
- **Responsive Design**: Works beautifully on desktop and mobile
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Elegant fade-in effects and transitions
- **GitHub Pages Ready**: Static files, no build process required

## Structure

```
years-with-you/
├── index.html          # Year 1 (home page)
├── pages/
│   ├── year2.html      # Year 2 memories
│   └── year3.html      # Year 3 memories
├── styles/
│   └── style.css       # All styling
├── script/
│   ├── darkMode.js     # Theme toggle
│   └── storyMap.js     # Scroll animations
├── fonts/
│   ├── acorn-medium.ttf
│   └── montserrat.ttf
└── images/             # Your photos go here
```

## Setup

1. **Add Your Photos**: Replace the Picsum placeholder URLs with your actual photos
2. **Update Stories**: Edit the journal entries in each HTML file
3. **Customize**: Modify dates, titles, and content to match your story

## Deployment

This site is designed for GitHub Pages:

1. Push to GitHub
2. Enable Pages in repository settings
3. Your site will be live at `https://username.github.io/years-with-you`

## Customization

- **Colors**: Edit CSS variables in `style.css`
- **Fonts**: Replace font files in `/fonts/` directory
- **Layout**: Modify photo sizes and spacing in CSS
- **Content**: Update HTML files with your stories and photos

## Technologies

- Pure HTML/CSS/JavaScript
- No external dependencies
- Intersection Observer API for scroll animations
- CSS Grid and Flexbox for responsive layout