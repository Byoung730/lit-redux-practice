# lit-redux

Hello World for a lit-html app with Redux. Deploying on Firebase.

At the time of writing (August 1 2018) it was scoring 100% on all Lighthouse audits and was working fine on most recent Chrome, Safari and Firefox. Others untested.

See also [lit-element-redux](https://github.com/katejeffreys/lit-element-redux) for a more extensive example using lit-element.

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
<meta name="description" content="Hello World with lit-element and Redux">
<meta name="theme-color" content="#ffffff">
<title>Experiments with lit and redux</title>
```

2. In index.html, uncomment the service worker rego code:

```html
<!-- Register service worker if supported. -->
<!--
<script>
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js');
  }
</script> -->
```

3. In manifest.json, update description, etc:

```json
"description": "Hello World with lit-element and Redux",
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
