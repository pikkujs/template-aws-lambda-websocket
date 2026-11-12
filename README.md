# This template repository is deprecated

This repository is no longer updated. It used to be a copy of the `aws-lambda-websocket` template, synced from the [pikku monorepo](https://github.com/pikkujs/pikku) on every release.

**Why:** the templates now live in the monorepo, where they are built and tested on every change, and apps are created straight from the published CLI. A second copy per template added nothing and only drifted behind.

**What to use instead:**

```bash
npm create pikku@latest -- --template aws-lambda-websocket
```

- Source of the template: [`recipes/aws-lambda-websocket`](https://github.com/pikkujs/pikku/tree/main/recipes) in the pikku monorepo.
- Starting a new project: [pikkujs/starter-template](https://github.com/pikkujs/starter-template) and Pikku Studio.

The contents of this repository are frozen at the last release that synced them and may no longer match the current Pikku packages.
