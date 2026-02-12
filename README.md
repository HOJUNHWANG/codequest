# CodeQuest v4.0 - Professional Edition 🚀

CodeQuest is a browser-based coding practice app with step-by-step progression, language switching, and lightweight test-based validation.

## Highlights

- **23-step learning path** from beginner to interview prep.
- **Auto-expanded curriculum** up to each category target (`CATEGORIES[].total`).
- **Sequential locks**:
  - You must complete earlier steps before opening later steps.
  - You must submit the current problem before moving to the next one in the same step.
- **6 languages**: Java, Python, TypeScript, Go, Rust, ABAP.
- **Per-language progress tracking** in LocalStorage.
- **Hint system** (2 levels) and **test case preview**.

## Project Structure

```text
codequest/
├── index.html              # Main UI and app logic
├── problems.js             # Problem database + auto-fill generator
├── PROBLEM_TEMPLATE.js     # Template for handcrafted problems
├── add_problem.py          # Interactive problem creation helper
├── HOW_TO_ADD_PROBLEMS.md  # Guide for adding new problems
└── README.md
```

## Run Locally

No build step is required.

```bash
python3 -m http.server 4173
# Open http://localhost:4173
```

## How Learning Progression Works

1. Pick a language.
2. Start from Step 1.
3. Read the problem statement and optional hints.
4. Run tests.
5. Submit when all tests pass.
6. Move to the next problem.

### Locking Rules

- **Step lock**: Step _N_ unlocks only after all problems in Step _N-1_ (and earlier) are completed.
- **Problem lock**: Inside a step, you must submit the current problem before using **Next**.

## Curriculum Scope

- Foundation: Steps 1-6
- Intermediate: Steps 7-12
- Advanced: Steps 13-17
- Professional: Steps 18-22
- Interview Prep: Step 23

Most steps target **30 problems**. Some steps use custom totals (for example: API 20, Security 15, Performance 15, Interview 50).

## Problem Generation Policy

`problems.js` keeps handcrafted items and auto-fills missing slots to match each category total.

- Priority packs are applied first for:
  - `variables`
  - `operators`
  - `conditions`
- Remaining slots are generated with language/category signals.
- Difficulty grows by position: beginner → easy → medium → hard.

## Language Notes

- **Java**: OOP and enterprise-style patterns
- **Python**: readability and scripting workflows
- **TypeScript**: typed web-development patterns
- **Go**: simple concurrency-oriented style
- **Rust**: safety-focused systems programming
- **ABAP**: SAP business application patterns

## Deployment (GitHub Pages)

Required files:

```bash
git add index.html problems.js
git commit -m "Update CodeQuest"
git push origin main
```

Optional authoring files:

```bash
git add PROBLEM_TEMPLATE.js add_problem.py HOW_TO_ADD_PROBLEMS.md
```

## License

MIT License

---

Happy coding. 🌟
