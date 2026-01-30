# OSExpert

**OSExpert-Eval: Benchmarking General Computer-Use Agents on Professional Expertise**

This repository contains the code and resources for OSExpert, a benchmark for evaluating general computer-use agents on professional expertise tasks.

## Website

The project website is available at: https://oppugno-rushi.github.io/OSExpert/

## Repository Structure

- `docs/` - GitHub Pages website files
- `osexpert_github_pages_site/` - Original website source files

## Setting Up GitHub Pages

The website files are already in the `docs/` folder. To deploy:

1. **Initialize git repository** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Add OSExpert website"
   ```

2. **Connect to GitHub repository**:
   ```bash
   git remote add origin https://github.com/Oppugno-Rushi/OSExpert.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repository on GitHub: https://github.com/Oppugno-Rushi/OSExpert
   - Click **Settings** → **Pages**
   - Under **Build and deployment**:
     - Source: **Deploy from a branch**
     - Branch: `main`
     - Folder: `/docs`
   - Click **Save**

4. **Wait 1-2 minutes** for GitHub to build and deploy your site.

Your website will be available at: `https://oppugno-rushi.github.io/OSExpert/`

## Citation

If you use OSExpert or OSExpert-Eval, please cite:

```bibtex
@inproceedings{osexpert2026,
  title  = {{I'm Professional: Self-Teaching Computer-Use Agents with Professional Skills}},
  author = {{Jiateng Liu, Zhenhailong Wang, Rushi Wang, Bingxuan Li, Jeonghwan Kim, Aditi Tiwari, Pengfei Yu, Denghui Zhang, Heng Ji}},
  year   = {2026},
  note   = {Under review}
}
```

## License

[Add your license information here]

