---
title: MDX
disableTableOfContents: true
path: mdx
intro: 'Hello MDX!'
---

## What is MDX?

[MDX](/docs/glossary/#mdx) is an extension to [Markdown](/docs/glossary/markdown/) that lets you include [JSX](/docs/glossary/#jsx) in Markdown documents. MDX makes it possible to include React components in your Gatsby blog posts and pages.

Markdown defines a plain text syntax for HTML elements such as `h1`, `strong`, and `a`, but still supports inline HTML. An example Markdown document follows.

```markdown
# Hello world!

You can use Markdown to create documents for [Gatsby](https://www.gatsbyjs.org/).

<figure class="chart">
  <object data="chart.svg" type="image/svg+xml"></object>
  <figcaption>MDX adoption has increased 120% since last year.</figcaption>
</figure>
```

MDX takes this one step further, and makes it possible to use JSX in your Markdown documents. Try making the `figure` element into a `Figure` component.

It's a really cool system and I am sure you will like it very much.