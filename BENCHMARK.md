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
- **Schema completeness**: % of nodes with all six facts (eli5, why, in, out, unlocks, tags). Count in `app.js` roles vs generic() fallbacks.
- **Relation typing**: % of edges with a semantic type (calls/data/depends/executes/reads/security/network/observes) and a direction. Currently 100% typed.
- **Stable IDs**: every node/district/mission has a permanent id (yes — camelCase ids, never renamed).
- **Synonym layer**: # of nodes carrying search aliases.
- **Versioning**: per-entry verification dates vs one global date; changelog via git.

**Current score: 2.5** — all edges typed and directional, stable ids throughout, ~24 of 56
nodes carry full hand-written entries (rest fall back to generated six-facts), aliases on ~24
nodes, but there is no schema validation step and only a single global verification date.
Path to 3: a validation pass in the smoke harness (every node must have non-generic six
facts); per-implementation verification dates.

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
- **Implementation sourcing**: % of implementation entries with an official source link. Currently 100% (~40 entries) — enforce as a ratchet in the smoke harness.
- **Per-entry verification dates**: absent (one global date: 2026-08-09).
- **Concept-level provenance**: eli5/mechanism texts are unsourced — absent.
- **Confidence/stability marking**: concepts are implicitly "stable", implementations implicitly "time-sensitive"; no per-entry marking.

**Current score: 2** — sourcing on implementations is complete and disciplined, which is
rare; but provenance stops there. Path to 3: verification date + stability tag per
implementation entry; a "sources" line on hand-written concept entries.

---

## Scorecard

| Axis | Exemplar | Score /4 |
|---|---|---|
| 1. Ontological rigor | MITRE | **2.5** |
| 2. Model & flows | IcePanel | **3** |
| 3. Live topology | Kiali | **0** (non-goal) |
| 4. Reactive explanation | Observable/Distill | **3** |
| 5. Adaptive complexity | Semantic bundling | **2.5** |
| 6. Direct manipulation | InteractiveKG | **3** |
| 7. AI-native provenance | BONSAI | **2** |
| **Total (excluding non-goal axis 3)** | | **16 / 24** |

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

Last scored: 2026-08-09 (post reactive-explanation round: axis 4 moved 2 → 3 via user-paced
Z4 mechanism steppers on 11 concepts and Builder→map wiring. Total 16/24. Reactive
explanation's own path-to-4 — extending stepper coverage past 26%, and a manipulable
parameter step — is the natural next round, alongside provenance, still at 2/4.).
