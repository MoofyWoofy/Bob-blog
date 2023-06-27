# Astro CodeF blog

A responsive, personal blog template, built with Astro and Tailwind CSS.



## Features

- A blog
- Dark mode and light mode with daisyUI
- Site configuration
- Supports draft page
- SEO friendly
- Client-Side search

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
|:----------------  |:-------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:3000`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |

## Getting Started

inside `src/config.js`
- pageSize: pagination size
- metaData: for SEO

  below is an example

```js
  pageSize: 5,
  metaData: {
    authorName: "your name", // required
    summary: "My personal blog", // required
    category: "Blog", // required
    keywords: ["Blog", "Astro"], // required
    icon: "favicon.ico", // required
  },
```
Set your site URL and base site
- inside `astro.config.mjs`
- Change site & base site option, if it the base site is root you can either delete it or set it to base: "`/`"

## Adding new post
A template to follow is in `src/pages/blog/articles/template.md`
```
---
layout: required
title: required
date: required
image?: optional
imageDescription?: optional
description: required;
draft?: optional;
---
```

