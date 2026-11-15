# HobbyIoT website

Static site for GitHub Pages (no build step).

## Deploy
1. Create a repo (e.g. `hobbyiot/hobbyiot.github.io` for a user/org site, or any repo with Pages enabled) and push these files to `main`.
2. Settings → Pages → Source: *Deploy from a branch* → `main` / root.
3. Custom domain: `CNAME` already contains `hobbyiot.net`. Set the domain in Pages settings and point DNS:
   - apex `A` records: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   - `www` CNAME → `<your-github-user>.github.io`
4. Tick *Enforce HTTPS* once the certificate is issued.

## To finish
- Replace the two placeholder `.board` blocks in `index.html` with `<img>` photos in `images/`.
- Verify the YouTube (`@hobbyiot`) and Buy Me a Coffee (`hobbyiot`) URLs in `index.html`.
- Confirm the repo links (H3S-Dev-V1, HELIUM-SENSORS, LoRa-Nodes) are public.
