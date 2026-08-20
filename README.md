# Portfolio site — how to publish on GitHub Pages

## 1. Create the repo
1. Go to https://github.com/new
2. Name the repository **exactly** `YOUR-USERNAME.github.io` (replace `YOUR-USERNAME` with your actual GitHub username). This special name makes GitHub Pages serve it as your root site, e.g. `https://YOUR-USERNAME.github.io`.
   - If you'd rather publish under a sub-path instead (e.g. `https://YOUR-USERNAME.github.io/my-site`), you can name the repo anything, e.g. `my-site` — see step 4 for the different URL.
3. Set it to **Public**. Don't add a README/gitignore/license (you're uploading files directly).

## 2. Add these files to the repo
Upload `index.html` and `style.css` (from this folder) to the root of the repo. Easiest way:
- On the repo page, click **Add file → Upload files**, drag both files in, and commit.

Or via git from your terminal:
```bash
git clone https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git
cd YOUR-USERNAME.github.io
# copy index.html and style.css into this folder
git add .
git commit -m "Add portfolio site"
git push
```

## 3. Enable GitHub Pages
1. In the repo, go to **Settings → Pages**.
2. Under "Build and deployment" → Source, choose **Deploy from a branch**.
3. Branch: `main`, folder: `/ (root)`. Save.
4. Wait 1–2 minutes.

## 4. Visit your site
- If the repo is named `YOUR-USERNAME.github.io` → your site is at `https://YOUR-USERNAME.github.io`
- If the repo has any other name → your site is at `https://YOUR-USERNAME.github.io/REPO-NAME`

## 5. Customize
Open `index.html` and edit:
- Your name, tagline, and bio
- GitHub/LinkedIn links (replace `YOUR-USERNAME` / `YOUR-PROFILE`)
- The three project cards — swap in your real projects and links
- The avatar image (replace the placeholder URL with a real photo, e.g. upload `photo.jpg` to the repo and set `src="photo.jpg"`)
- Skills list

Colors and layout live in `style.css` if you want to tweak the look (the `:root` block at the top has the main color variables).

## Updating later
Any time you push changes to the `main` branch, GitHub Pages rebuilds automatically within a minute or two — no extra steps needed.
