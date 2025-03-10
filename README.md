# lespizzasdupuitsvieux.com

## Objective

The objective is to rewrite the static website [lespizzasdupuitsvieux.com](http://lespizzasdupuitsvieux.com/index.html) with a static website generator, in order to:

- update the content more easily (Markdown)
- modernize it (RWD, HTTPS, a11y, etc.)

## Requirements

- All existing links should keep working

## Implementation

The static website generator used is [Zola](https://www.getzola.org).

Run the Zola development server with: `zola serve --open`

The new website is deployed on GitHub Pages: [adrien-fichet.github.io/lespizzasdupuitsvieux.com/](https://adrien-fichet.github.io/lespizzasdupuitsvieux.com/)

## Original website copy

A copy of the original website is available in `_original`.

- [Make Offline Mirror of a Site using `wget`](https://www.guyrutenberg.com/2014/05/02/make-offline-mirror-of-a-site-using-wget/)

```shell
wget -mkEpnp http://lespizzasdupuitsvieux.com
```
