# react-hoverbox

HoverBox is a React component that allows your own component's render method to behave differently if certain parts of it are being hovered on.
This can be useful when you need your component to respond to hover in ways that can't be done completely by CSS.

HoverBox accepts one prop: a render function, similar to the one you'd give any React component. However, this function has a parameter which is set to true when the component is currently being hovered on.

## Example

__ES6__

    var HoverBox = require("react-hoverbox");

    <HoverBox render = {hover => (
        <div>
            <SomeComponent showEffect = {hover} />
            <div>Look at the shiny hover effect!</div>
        </div>
    )}/>

__ES5__

    var HoverBox = require("react-hoverbox");

    <HoverBox render = {function(hover) {
        return (
            <div>
                <SomeComponent showEffect = {hover} />
                <div>Look at the shiny hover effect!</div>
            </div>
        );
    }}/>

## Installation

    npm install react-hoverbox

