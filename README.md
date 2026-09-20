# Portfolio Website

A single-page, animated portfolio site — plain HTML/CSS/JS, no build step, ready for GitHub Pages.

## What's inside
- `index.html` — page structure (hero, about, projects, skills, contact)
- `style.css` — all styling + animations (gradient blobs, hover tilt, marquee, scroll reveal)
- `script.js` — interactivity (typewriter effect, cursor glow, scroll-triggered reveals, counters, card tilt)

## Customize it
1. **Your info**: open `index.html` and replace the placeholder text — name, bio, email, social links.
2. **Projects**: each project is a `<article class="project-card">` block in the Projects section. Duplicate/delete blocks, and update the title, description, tags, and links (Live Demo / GitHub).
3. **Colors**: all colors are CSS variables at the top of `style.css` under `:root` — change `--accent`, `--accent-2`, etc. to restyle the whole site instantly.
4. **Skills marquee**: edit the `<span>` list inside `.marquee-track` in `index.html` (keep it duplicated once for a seamless loop).
5. **Photo**: swap the `🧑‍💻` emoji in the About section for an `<img>` tag if you'd like a real photo.

## Deploy on GitHub Pages
1. Create a new GitHub repository (e.g. `your-username.github.io` for a root domain, or any name for a project page).
2. Push these three files (`index.html`, `style.css`, `script.js`) to the repo's default branch:
   ```bash
   git init
   git add index.html style.css script.js README.md
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. On GitHub, go to **Settings → Pages**.
4. Under "Build and deployment", set **Source** to "Deploy from a branch", pick the **main** branch and **/ (root)** folder, then **Save**.
5. Wait a minute or two — your site will be live at:
   - `https://<your-username>.github.io/` (if the repo is named `<your-username>.github.io`), or
   - `https://<your-username>.github.io/<repo-name>/` (for any other repo name).

That's it — no build tools, no dependencies to install.
