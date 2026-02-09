# Shervan Shahparnia — Personal Site

A single-page personal website (inspired by [Ben Agro's site](https://benagro314.github.io/)) with sections for Education, Experience, Projects, and Technical Skills.

---

## Deploy to GitHub Pages (github.io)

### 1. Create a repo and push your site

```bash
cd /path/to/personal-site
git init
git add .
git commit -m "Initial commit: personal site"
git branch -M main
git remote add origin https://github.com/SShahparnia/YOUR-REPO-NAME.git
git push -u origin main
```

Use either:
- **Repo name `SShahparnia.github.io`** → site URL: **https://SShahparnia.github.io**
- **Any other name** (e.g. `personal-site`) → site URL: **https://SShahparnia.github.io/personal-site**

### 2. Turn on GitHub Pages

1. On GitHub: open your repo → **Settings** → **Pages** (left sidebar).
2. Under **Build and deployment** → **Source**: choose **Deploy from a branch**.
3. **Branch**: `main` (or `master`) — **Folder**: `/ (root)`.
4. Click **Save**.

After a minute or two, your site will be live at the URL above.

### Does it update automatically?

**Yes.** Whenever you push changes to the same branch (e.g. `main`), GitHub Pages rebuilds and updates the site. Usually within 1–2 minutes. No extra deploy step.

```bash
git add .
git commit -m "Update bio and add project image"
git push
```

---

## Adding images and a hero photo

- **Hero image:** Put your photo in the **`images/`** folder as **`headshot.jpg`** (or use `headshot.png` / `headshot.webp` and update the `img` `src` in `index.html`).
- **Project thumbnails / GIFs:** Add files to `images/` and reference them in `index.html`. See **`images/README.md`** for exact steps.

---

## Run locally

**Option 1:** Open `index.html` in a browser (some relative paths may behave differently than on GitHub).

**Option 2 (recommended):** Serve the folder so paths match production:

```bash
python3 -m http.server 8000
# or: npx serve .
```

Then open [http://localhost:8000](http://localhost:8000).
