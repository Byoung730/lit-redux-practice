import {
  html,
  render
} from 'lit-html';
import {
  createStore
} from 'redux';
import {
  litReduxApp
} from './reducers.js';
import {
  doThing
} from './actions.js';
import style from "./styles.js"
import NiceGreeting from './src/components/NiceGreeting.js'


/**
 * Accept some data and return a lit-html TemplateResult.
 * @function myTemplate
 */
const myTemplate = stuff => {
  return html `
    <p>${stuff}</p>
  `;
}

// Create a redux store
const store = createStore(litReduxApp);

// Get initial state
let state = store.getState();
console.log(state);

// Dispatch an action to the store
store.dispatch(doThing(
  render() {
    html `
      <style>
        ${style}
      </style>

      <nice-greeting />
    `
  }
));

// Retrieve updated state data from the store 
let data = store.getState().data;

// Render the lit-html template, populated with the data
render(myTemplate(data), document.body);