# KANT-2026-TIL

**August 4, 2026 - May 14, 2027**

> AI Engineer Bootcamp Learning and Project Records

## About

With the goal of becoming an **AI Engineer**, I study the full path from Python to production AI services:

```text
Python · Git · SQL · Data Analysis · Machine Learning
→ Frontend (HTML/CSS · JavaScript · TypeScript · React · Next.js)
→ Backend (FastAPI · SQLAlchemy · PostgreSQL)
→ LLM Applications (RAG · Vector Search · Evaluation)
→ AWS / Deployment
```

This repository documents my learning journey, practice notes, troubleshooting records, and project problem-solving process.

## Purpose

The TILs in this repository are not simply daily learning records.

They are intended to serve as a personal **Knowledge Base** that connects:

```text
Learning
→ Practice
→ Problem Solving
→ Project Application
→ Portfolio
→ Resume
```

## Learning Log

| Period | Topics | Notes |
| --- | --- | --- |
| 2026-08 | Git & GitHub workflow, Python basics, NumPy/Pandas/Matplotlib | [01_Git-GitHub](01_Git-GitHub/), [02_python](02_python/), [03_numpy-pandas-matplotlib](03_numpy-pandas-matplotlib/) |
| 2026-08 ~ 09 | Machine Learning: regression, classification, PyTorch RNN, Attention/Transformer, Hugging Face | [04_machine-learning](04_machine-learning/) |
| 2026-09 | SQL & PostgreSQL, transactions, Supabase team study | [05_SQL](05_SQL/), [supabase-team-study](supabase-team-study/) |
| 2026-09 | HTML/CSS layouts, JavaScript fundamentals, prototype, DOM, Streamlit | [2026-09](2026-09/) |
| 2026-10 | JS events & async, TypeScript, React/Next.js, team frontend project (FE-project-teamD), Supabase SSR | [2026-10](2026-10/) |
| 2026-10 ~ 11 | FastAPI: routing, Jinja2, dependencies, middleware, SQLAlchemy, 4-layer architecture, auth, DDD, team backend project (BE-project-teamD) | [2026-10](2026-10/), [2026-11](2026-11/) |
| 2026-11 | RAG: embeddings, chunking, hybrid search (BM25 + vector, RRF), re-ranking, RAG evaluation, PGVector | [2026-11](2026-11/) |

## Structure

```text
00_meta/                         # Learning roadmap, tech stack, achievements
01_Git-GitHub/                   # Git and GitHub notes
02_python/                       # Python notes and practice files
03_numpy-pandas-matplotlib/      # Data analysis basics
04_machine-learning/             # Machine learning notes and experiments
05_SQL/                          # SQL and database notes
2026-09/                         # Monthly TIL notes (from September 2026)
2026-10/
2026-11/
  ├── YYMMDD_TIL.md              # Daily TIL note
  ├── image-N.png                # Screenshots referenced by TILs in the same folder
  ├── images/                    # Diagrams (e.g. SVG) for a TIL
  └── YYMMDD-preview/            # Static demo pages published to the blog
supabase-team-study/             # Supabase team study materials
src/                             # Python package scaffold (uv project)
.github/workflows/               # Blog sync workflow
```

## TIL Format

Each daily TIL generally follows this structure:

```text
Front matter (title, date, tags, description)
목차 (Table of Contents)
1. ~ N.  Topic sections (concept → example/practice → troubleshooting)
오늘의 핵심 정리 (Key Takeaways)
회고 (Reflection)
```

## Blog Sync

This repository is the source repository for my TIL notes.

Daily TIL notes are written here first. When Markdown or image files are pushed to `main`, the GitHub Actions workflow [`sync-to-blog.yml`](.github/workflows/sync-to-blog.yml) syncs them to my GitHub Pages blog:

```text
KANT-2026-TIL
→ mjlee0914.github.io/_til/
→ https://mjlee0914.github.io/til/
```

What gets synced:

- **Synced**: `*.md`, images (`png`, `jpg`, `gif`, `webp`, `svg`, ...), and static web files (`html`, `css`, `js`)
- **Not synced**: `*.ipynb`, `*.py`, `*.csv`, `*.pth`, `src/`, `data/`, `archive/`, `README.md`
- **Preview folders** (e.g. `2026-10/261030-preview/`) are published at their own public URL, such as `https://mjlee0914.github.io/til/2026-10/261030-preview/`. Each new preview folder needs its own step in the workflow.

## Blog Post Format

For TIL notes that should appear on the blog, include front matter at the top of the file.

```markdown
---
title: 261116 TIL - RAG 검색 고도화와 평가
date: 2026-11-16
tags: [TIL, RAG, LLM, Hybrid Search, Evaluation]
style: border
color: primary
description: BM25, 하이브리드 검색, Re-ranking, RAG 평가를 정리했다.
---

## 목차

Write your note here.
```

Location and blog copy:

```text
2026-11/261116_TIL.md
→ mjlee0914.github.io/_til/2026-11/261116_TIL.md
```

## File Naming

```text
YYMMDD_TIL.md          # Daily TIL note (topic goes in the front matter title)
YYMMDD_topic.ipynb     # Notebook practice file
YYMMDD-preview/        # Static demo folder for that day's TIL
```

### Examples

```text
261116_TIL.md
260826_linear-regression1.ipynb
261030-preview/
```

## Daily Workflow

```text
1. Write today's TIL in the current monthly folder (e.g. 2026-11/261116_TIL.md).
2. Put each screenshot in the same monthly folder and reference it normally, for example `![설명](image-40.png)`.
3. Commit on a branch, open a PR, and merge it into main.
4. GitHub Actions copies the TIL and its image files, then adjusts same-folder image links for the blog URL.
5. The note appears on the TIL page of the blog.
```

## Project Records

Project-related learning, decisions, and troubleshooting should be recorded with enough context to explain:

```text
What I tried
What failed
What I changed
What I learned
How it can be reused later
```
