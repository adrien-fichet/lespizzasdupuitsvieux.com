# lespizzasdupuitsvieux.com

## Objective

The objective is to rewrite the website [lespizzasdupuitsvieux.com](http://lespizzasdupuitsvieux.com/index.html) with a static site generator, in order to:

- update the content more easily (Markdown)
- modernize it (RWD, HTTPS, a11y, etc.)

## Requirements

- All existing links should keep working

## Implementation

The static site generator used is [Zola](https://www.getzola.org).

Run the Zola development server with: `zola serve --open`

The new website is deployed on GitHub Pages: [adrien-fichet.github.io/lespizzasdupuitsvieux.com/](https://adrien-fichet.github.io/lespizzasdupuitsvieux.com/)

## TODO

- Visual comparisons using Playwright
- A11y checks (accessibilitychecker.org?)
- W3C CSS validity, link checker
- PageSpeed insights

## Original website copy

A copy of the original website is available in `_original`.

- [Make Offline Mirror of a Site using `wget`](https://www.guyrutenberg.com/2014/05/02/make-offline-mirror-of-a-site-using-wget/)

```shell
wget -mkEpnp http://lespizzasdupuitsvieux.com
```

## W3C HTML checker

- https://validator.w3.org/nu/?doc=https%3A%2F%2Fadrien-fichet.github.io%2Flespizzasdupuitsvieux.com%2Findex.html
- https://validator.w3.org/nu/?doc=https%3A%2F%2Fadrien-fichet.github.io%2Flespizzasdupuitsvieux.com%2Fcarte-dessert.html
- https://validator.w3.org/nu/?doc=https%3A%2F%2Fadrien-fichet.github.io%2Flespizzasdupuitsvieux.com%2Fcarte-pizza.html
- https://validator.w3.org/nu/?doc=https%3A%2F%2Fadrien-fichet.github.io%2Flespizzasdupuitsvieux.com%2Fcarte-vin.html
- https://validator.w3.org/nu/?doc=https%3A%2F%2Fadrien-fichet.github.io%2Flespizzasdupuitsvieux.com%2Fnews-burger.html
- https://validator.w3.org/nu/?doc=https%3A%2F%2Fadrien-fichet.github.io%2Flespizzasdupuitsvieux.com%2Fnews-calzone.html
- https://validator.w3.org/nu/?doc=https%3A%2F%2Fadrien-fichet.github.io%2Flespizzasdupuitsvieux.com%2Fnews-lasagnes.html
- https://validator.w3.org/nu/?doc=https%3A%2F%2Fadrien-fichet.github.io%2Flespizzasdupuitsvieux.com%2Fnews-tiramisu.html
