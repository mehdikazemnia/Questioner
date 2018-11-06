const React = require('react');
const ReactDOM = require('react-dom');

const Index = require('./components/Index');

const jsx = (<Index />);
ReactDOM.render(jsx, document.querySelector("#app"));