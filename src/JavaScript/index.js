const React = require('react');
const ReactDOM = require('react-dom');

const {Provider} = require('react-redux');

const mainStore = require('./stores/mainStore');

const Index = require('./components/Index');

const jsx = (<Provider store={mainStore}>
    <Index />
</Provider>);
ReactDOM.render(jsx, document.querySelector("#app"));