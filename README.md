# Astro Bob's blog

A responsive, personal blog template, built with Astro and Tailwind CSS.



## Features

- A full featured blog with tagging
- Dark mode and light mode with daisyUI
- Site configuration
- Supports draft page
- Pagination for blog and tags page
- SEO friendly
- Client-Side search

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
|:----------------  |:-------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:4321`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |

## Getting Started

inside `src/config.js`
- navLinks: all links for navigation
- tagNames: assign tag colors to which tag name
- tagColors: all tag colors
- pageSize: pagination size
- social: to display social icons on home page
- metaData: for SEO

  below is an example

```js
navLinks: [
    {
      link: "link to page and nav name", // required
      icon: "svg icon for link", // optional
    },
  ],
  tagNames: {
    featured: "orange", // optional
  },
  tagColors: {
    orange: "#EA4E28", // optional
    default: "#3CA5EA", // required
  },
  pageSize: 5,
  social: [
    {
      link: "link to social", // required
      svg: "svg for social icon", // required
      sr: "For screen readers", // optional
    },
  ],
  metaData: {
    authorName: "your name", // required
    summary: "My personal blog", // required
    category: "Blog", // required
    keywords: ["Blog", "Astro"], // required
    icon: "favicon.ico", // required
  },
```
Adding name
- create a SVG with your name
- open `src/layouts/BaseLayout.astro`
- inside the header, under the logo comment, replace the SVG with yours

Adding image
- create a SVG with your name
- open `src/pages/index.astro`
- change the image src

For client search it uses fusejs, if you wish to change the options it is in `src/pages/search.astro`

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
tags: required;
description: required;
draft?: optional;
---
```

