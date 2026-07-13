# Strategy Guard Solutions Group - Website

Static multi-page website for [strategy-guard.com](https://strategy-guard.com), built for GitHub + Vercel.

## Structure

```
index.html              -> Home  (/)
about/index.html        -> About (/about/)
services/index.html     -> Services (/services/)
insights/index.html     -> Insights (/insights/)
contact-us/index.html   -> Contact + working form (/contact-us/)
vercel.json             -> Vercel config (trailing slashes)
```

Each page is fully self-contained (HTML + CSS + JS in one file). No build step, no dependencies.

## Deploy in 5 minutes

1. **GitHub** - Create a new repository (e.g. `sgsg-website`). Click **"uploading an existing file"** and drag ALL files/folders from this project in (or use git: `git init && git add . && git commit -m "site" && git push`). Make sure the folder structure is preserved: `about/`, `services/`, `insights/`, `contact-us/` must be folders at the repo root, with `index.html` at the root.
2. **Vercel** - Go to [vercel.com](https://vercel.com), sign in with GitHub, click **Add New > Project**, import the repo. Framework preset: **Other**. No build command, no output directory changes. Click **Deploy**.
3. Done - your site is live at `your-project.vercel.app`.

## Connect the strategy-guard.com domain

In Vercel: Project > Settings > Domains > Add `strategy-guard.com`. Vercel shows you the DNS records (an A record and/or CNAME) to set at your domain registrar. Propagation usually takes minutes.

## Activate the contact form (one-time)

The contact form sends submissions to **info@strategy-guard.com** via FormSubmit (free, no account).
The FIRST submission triggers an activation email to that inbox - open it and click **Activate**.
After that, every message arrives formatted as a table. Send yourself a test message after deploying.

## Swapping images

All photos are hot-linked from Unsplash (free license). To use your own: add an `images/` folder to the repo, upload your photos, and replace the `https://images.unsplash.com/...` URLs in the HTML with `/images/your-photo.jpg`.
