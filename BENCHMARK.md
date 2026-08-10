# Atlas Capability Benchmark

A measurement framework for AI Arsenal Atlas against a hypothetical composite system that
collectively implements: MITRE-grade ontology, IcePanel-grade model/flows, Kiali-grade live
topology, Observable/Distill-grade reactive explanation, semantic-bundling-grade adaptive
complexity, InteractiveKG-grade direct manipulation, and BONSAI-grade AI-native provenance.

**Ground rule: the atlas stays local-only.** Every metric below is measurable from the repo
or the running page with zero network services, zero telemetry, zero accounts. Axes that
inherently require live infrastructure are scored honestly and marked as deliberate
non-goals unless a local adapter is ever built.

Each axis is scored 0–4:
`0` absent · `1` token gesture · `2` functional but shallow · `3` systematic · `4` exemplar parity.

---

## Axis 1 · Ontological rigor (exemplar: MITRE ATT&CK)

*Does the knowledge have a real schema — typed entities, typed relations, stable IDs,
synonyms, versioning — or is it just labeled boxes?*

Measurable locally:
- **Schema completeness**: % of nodes with all six facts, hand-authored rather than `generic()` fallback. **43 of 43 — 100%**, verified programmatically (node id list vs `roles` object keys, zero gap) and enforced as a smoke-suite ratchet (`#c/ide` and `#c/git` — the former-worst offenders — assert real prose, not the `"X is the Y layer"` template string).
- **Relation typing**: % of edges with a semantic type and direction. 100% typed, 50 edges.
- **Stable IDs**: every node/district/mission has a permanent id (yes — camelCase ids, never renamed since; one lesson learned when a district id briefly collided with a node id, see project memory).
- **Synonym layer**: aliases present on the majority of AI/agent-district concepts; the 15 newly-authored entries added targeted aliases (e.g. `ide` → "cursor", "claude code", "copilot"; `weights` → "checkpoint", "safetensors", "gguf file").
- **Versioning**: per-entry verification dates now exist (via the provenance round's `PROVENANCE_DATE` + Compare rendering) rather than one global sentence.

**Current score: 3** — both items named in the prior "path to 3" are done: zero generic
fallbacks, and per-entry dates are real infrastructure. Path to 4: a synonym audit (aliases
still cluster in AI/agent districts — Foundation/Shipyard concepts like `cpu`, `storage`,
`observe` have few or none) and a lightweight "last content-reviewed" marker distinct from
the implementation `VERIFIED` date, since concept text and tool facts age differently.

## Axis 2 · Architecture model & flows (exemplar: IcePanel / C4)

*Multiple abstraction levels with meaningful drill-down, animated flows, perspective filters.*

Measurable locally:
- **Distinct semantic levels**: Z0–Z5 = 6 levels, each gating real content (districts / concepts / implementations / mechanism / engineering). C4 has 4.
- **Flow coverage**: % of nodes reachable by at least one mission path. Currently 13 missions covering ~34 unique nodes ≈ 60%.
- **Perspective filters**: 10 lenses + ALL.
- **Flow fidelity**: flows animate direction and order (packets), and end in an actionable artifact (the "what you need" list).

**Current score: 3** — this is the atlas's strongest axis; semantic zoom + missions +
lenses are systematic. Path to 4: every node reachable by some mission; per-step flow
narration in the inspector (not just toasts).

## Axis 3 · Live topology (exemplar: Kiali)

*Does the map reflect a real running system, with health and traffic, not just theory?*

**Current score: 0 — by deliberate design.** The atlas pivoted to pure reference material
(the My Lab inventory layer was intentionally removed). This axis is a non-goal.
If ever revisited, the local-only-compatible path is an optional adapter that reads local
signals (e.g. `docker ps`, localhost port probes) and overlays presence — but do not build
this without an explicit decision to reverse the pure-reference pivot.

## Axis 4 · Reactive explanation (exemplar: Observable / Distill)

*Explanations that respond to manipulation — watching information move, not reading about it.*

Measurable locally:
- **Animated mechanisms**: # of concepts whose mechanism can be *watched*, and whether the user drives the pace. 11 concepts now have a structured multi-step mechanism (`mechanisms` data object) rendered as a click-through stepper — Prev/Next advances the map's highlighted path and packet animation one stage at a time, in the user's own time, not a timer's.
- **State-reactive prose**: inspector content reacts to zoom/lens/selection AND to stepper position (yes, systematically).
- **Manipulable composition**: the Builder's "Show this composition on the map" button turns a user-assembled system (Model+Tool+Loop+MCP, etc.) into a live highlighted path with packet animation — Builder is no longer a disconnected sandbox.
- **Explorable-to-static ratio**: 11 of 43 concepts (26%) have a full stepper; the rest fall back to one static sentence at Z4.

**Current score: 3** — mechanisms are genuinely steppable (user-paced, not autoplay) and the
Builder writes back to the map, both closing the gaps named in the prior scoring. Path to 4:
extend the stepper to more of the 43 concepts (currently 26% coverage); let a step reveal a
manipulable parameter (e.g. a quantization slider changing the visible weight/speed tradeoff)
rather than only revealing map position.

## Axis 5 · Adaptive complexity (exemplar: semantic edge bundling)

*Detail density adapts to context so the map stays legible at every zoom.*

Measurable locally:
- **Depth-gated rendering**: nodes at Z2+, roles/chips at Z3+, mechanism Z4, engineering Z5 (yes).
- **Lens-based dimming** with view-defaults ALL override (yes).
- **Edge management at density**: 64 individual beziers, no bundling, no label collision management beyond truncation. Legible today; will not survive 3–4× edge growth.
- **Per-tier degradation**: mobile tier reduces texture opacity and disables ambient motion (yes).

**Current score: 2.5** — semantic zoom and lens dimming are systematic; there is no edge
bundling or density-adaptive edge rendering. Path to 3: fade/bundle same-type edge groups
at Z0–Z1, full detail at Z2+.

## Axis 6 · Direct manipulation (exemplar: interactive knowledge graphs)

*Can the user reshape the knowledge in place — add notes, pin, connect, correct?*

Measurable locally (localStorage is local-only by definition):
- **User annotations**: per-concept notes in the inspector ("My layer" section), persisted — present.
- **Pinning/collections**: pin any concept; 📌 marker on the map + a Pinned jump list on the welcome panel — present.
- **User-added edges**: two-click "Link to…" flow draws my-links (distinct acid-dashed class), selectable with their own inspector and removable — present. User-added *nodes*: absent.
- **Persistence across sessions**: single `atlasUser` localStorage document (pins/notes/links), loaded at boot, saved on change — present.

**Current score: 3** — pins, notes, and user-drawn links all persist locally and render as
a first-class "my layer" on the map. Path to 4: user-added nodes/concepts, editing note
text inline on the map itself, and import/export of the personal layer as a local file.

## Axis 7 · AI-native provenance (exemplar: BONSAI)

*Every claim knows where it came from, when it was verified, and how much to trust it.*

Measurable locally:
- **Implementation sourcing**: % of implementation entries with an official source link. 100% (44 of 44) — enforced as a ratchet in the smoke harness (`STABILITY` and the real entry count must match exactly, checked programmatically at commit time).
- **Per-entry verification dates**: present — every Compare card shows a `VERIFIED` date sourced from a single `PROVENANCE_DATE` constant today (all entries genuinely were authored/verified the same day), but the field is per-entry infrastructure, not a hardcoded sentence — the day one entry is revisited, only its date changes.
- **Concept-level provenance**: still absent as *citations* — but now honestly labeled rather than silently implied. The hygiene footer distinguishes "concept layer: general knowledge, not a single citable source" from "implementation layer: time-sensitive, check Compare" instead of claiming a false blanket "stable."
- **Confidence/stability marking**: present — every implementation carries a hand-judged `stable`/`evolving`/`volatile` tag (`STABILITY` map in `app.js`), rendered as a colored row in Compare (with an inline legend) *and* as a colored dot directly on the Z3 map chip, so the signal is visible while browsing, not just one click deeper. Tags are genuinely differentiated, not defaulted: LlamaIndex/LangChain/LangGraph/Unsloth → volatile (matches their own tradeoff text calling out API churn), Postgres/SQLite/Docker/GitHub → stable, most actively-developed ML tooling → evolving.

**Current score: 3** — implementation-level provenance (source + stability + verified date,
visible at both the map and Compare layers) is now systematic. Path to 4: concept-level
provenance — since most ELI5 text is synthesized explanation rather than a citable claim,
the honest version of "path to 4" isn't manufacturing fake citations, it's distinguishing
which concept entries are hand-authored/reviewed (`roles`) from which are unreviewed
`generic()` fallbacks, and surfacing that distinction to the user.

---

## Scorecard

| Axis | Exemplar | Score /4 |
|---|---|---|
| 1. Ontological rigor | MITRE | **3** |
| 2. Model & flows | IcePanel | **3** |
| 3. Live topology | Kiali | **0** (non-goal) |
| 4. Reactive explanation | Observable/Distill | **3** |
| 5. Adaptive complexity | Semantic bundling | **2.5** |
| 6. Direct manipulation | InteractiveKG | **3** |
| 7. AI-native provenance | BONSAI | **3** |
| **Total (excluding non-goal axis 3)** | | **17.5 / 24** |

No single real product scores 4 on more than one or two of these axes; the composite is a
direction, not a competitor. The scorecard's job is to make each enhancement round's target
explicit: name the axis, name the level you're buying.

## How to re-score

1. Run `/smoke.html` — it asserts the ratchet metrics (e.g. implementation source coverage)
   and prints countable inventory (nodes, typed edges, implementations, missions).
2. Count schema completeness: nodes with hand-written entries in `roles` vs `nodeSeeds` total.
3. Walk one mission end-to-end and one Show-Me; judge axis 4 criteria honestly.
4. Update the scorecard table and date this file in the same commit as the change that moved
   a score.

Last scored: 2026-08-09 (post ontological-rigor round: axis 1 moved 2.5 → 3 — all 43 nodes
now hand-authored, zero `generic()` fallbacks, verified programmatically and ratcheted in the
smoke suite. Total 17.5/24. Five of six scored axes are now at 3; only adaptive complexity
(edge bundling at low zoom, 2.5/4) sits below. That's the natural next round — every other
axis's path-to-4 is "extend what already works to more content," not new mechanism design.).
