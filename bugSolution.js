```javascript
//tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-color': '#f0f0f0',
      },
    },
  },
  plugins: [],
}
```
Ensure that the `content` option in your `tailwind.config.js` correctly points to all files where you are using Tailwind classes.  The example above uses a glob pattern to include all `.js`, `.ts`, `.jsx`, and `.tsx` files within the `src` directory. Adjust this as needed for your project structure. If your custom color is used in an HTML file directly, you'll need to ensure that file is listed explicitly (e.g., `'./index.html'` ). If the issue persists, verify that you have correctly imported Tailwind's CSS file into your project.