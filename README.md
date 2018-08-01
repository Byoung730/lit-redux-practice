# lit-redux

Boilerplate for a lit-html/redux app, deploying on Firebase.

At the time of writing (Jul 19 2018) was scoring 100% on all Lighthouse audits and was working fine on most recent Chrome, Safari and Firefox. Others untested.

**New:** See the [lit-element branch](https://github.com/katejeffreys/lit-redux/tree/lit-element) for an equivalent for lit-element. That one is taking a 5% perf hit, it's at 95%. I think I need to change how webcomponents polyfills are loaded.

* [Clone](#clone-this-repo)
* [Serve](#serve-for-development)
* [Setup](#set-up-new-app)
* [Build](#build-for-prod-and-serve-locally)
* [Deploy](#deploy)

## Clone this repo

```
npm install -g polymer-cli
git clone https://github.com/katejeffreys/lit-redux.git
cd lit-redux
```

## Serve for development

```
npm install
polymer serve
```

## Set up new app

1. In index.html, update meta stuff:

```html
<!-- Change stuff here for your app -->
<script type="module" src="src/lit-redux.js" defer></script>
<meta name="description" content="Experiments with lit-html and redux">
<meta name="theme-color" content="#ffffff">
<title>Experiments with lit and redux</title>
```

2. In index.html, uncomment the service worker rego code:

```html
<!-- Register service worker if supported.
<script>
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js');
  }
</script> -->
```

3. In manifest.json, update description, etc:

```json
"description": "Experiments with lit and redux",
"start_url": "index.html",
"name": "lit-redux",
"short_name": "lit-redux",
"background_color": "#ffffff",
"theme_color":"#ffffff",
```

4. Update package.json

5. In polymer.json, update shell & entrypoint:

```
"shell": "src/lit-redux.js",
"entrypoint": "index.html",
```

6. Remember firebase.json and .firebaserc for real deployment.

## Build for prod and serve locally

```
polymer build
polymer serve build/default
```

## Deploy

1. Create a new firebase project at https://firebase.corp.google.com/.
2. Update firebase.json & .firebaserc.
3. Run `firebase deploy`.
