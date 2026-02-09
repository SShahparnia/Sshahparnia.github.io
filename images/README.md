# Images for your site

Add your assets here. They will be served from `https://<username>.github.io/<repo>/images/`.

## Hero / about section
- **`headshot.jpg`** — Your photo (used on the home section). You can use `.png` or `.webp` instead; if so, update the `src` in `index.html` (search for `images/headshot`).

## Project thumbnails / GIFs
To add a thumbnail or GIF to a project in `index.html`:

1. Put the file in this folder (e.g. `multimodal-rag.png`, `traffic-demo.gif`).
2. In `index.html`, find that project’s `row-publication` block.
3. Add a `pub-img` div before `pub-meta`, for example:

```html
<div class="pub-img">
  <img src="images/your-image.gif" alt="Short description" style="width: 100%; max-width: 180px; height: auto; object-fit: contain;" />
</div>
```

Keep image file sizes reasonable (e.g. under 1–2 MB) so the page stays fast.
