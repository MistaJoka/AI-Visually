# AI Arsenal Atlas

A visual-first, interactive reference map for understanding how modern AI, homelab infrastructure, software engineering, agents, networking, data systems, security, and deployment fit together.

## Live site

After GitHub Pages is enabled for this repository, the project site will be:

`https://mistajoka.github.io/AI-Visually/`

## What V1 includes

- Stable top-down homelab world map
- Semantic zoom from world → district → concept → implementation → mechanism → engineering
- Single reference view — the atlas is pure reference material
- Physical, AI, Network, Data, Security, Mission, Software, Performance, Cost, and Learning lenses
- Search-to-concept navigation
- Clickable relationships
- Focus, Trace, Show Me, X-Ray, Compare, Build With, and Learn actions
- 13 guided mission playbacks, each ending in a "what you need" tool list with official sources
- Training territory: fine-tuning/LoRA, quantization, multimodal, prompt engineering, and evals
- Interactive system builder
- Mobile bottom-sheet inspector
- iPhone-safe tutorial controls and safe-area handling
- Keyboard-accessible nodes, relationships, and implementation chips
- Reduced-motion support

## Architecture

```text
index.html   → semantic application shell
styles.css   → responsive visual system
app.js       → ontology, map renderer, state, interactions, missions
.nojekyll    → serve as plain static files
```

The core design rule is **concept-first, product-second**. Permanent ideas such as `Model Server`, `Vector Store`, and `Container Runtime` occupy stable places on the map. Current tools such as Ollama, Qdrant, and Docker appear underneath those concepts as implementations.

## Run locally

Any static HTTP server works. From the repository root:

```bash
python3 -m http.server 8000
```

Then open:

`http://localhost:8000`

To smoke-test the core flows (loads the app in an iframe, drives clicks, asserts no console errors):

`http://localhost:8000/smoke.html`

Do not judge interactivity by opening `index.html` inside an attachment/document preview. The app requires JavaScript execution.

## GitHub Pages

This repository is designed to publish directly from `main` at the repository root with no build step.

One-time GitHub setting:

1. Open **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Choose **main** and **/(root)**.
4. Save.

After Pages finishes deploying, open the live URL above in Safari or Chrome on iPhone.

## V1 reference hygiene

The atlas separates relatively stable **concepts** from time-sensitive **implementations**. Implementation references should carry an official source and verification date when they are maintained or expanded.
