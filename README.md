# Reaveal.js SvelteKit Template

This is a template for creating a [Reveal.js](https://revealjs.com/) presentation using [SvelteKit](https://kit.svelte.dev/) and [TailwindCSS](https://tailwindcss.com/).

## Components

You can create your presentation inside the `presentation.svelte` file located in the `src/lib/deck` folder.

Inside your presentation you can use the following components:
- `Slide` - A slide component that will be rendered as a slide in your presentation.
- `Markdown` - A markdown component that will be rendered as a slide in your presentation.
- `Code` - A code component that will be rendered as a slide in your presentation.

Don't hesitate to create your own components and use them in your presentation. For example, if your slides are complexes, you can create a `slides` folder that will contain all your slides components.

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
