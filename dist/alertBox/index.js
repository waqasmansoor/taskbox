import React from 'react';

import Button from '../button';

import './SingleInputAlertBox.css';

const SingleInput_alertBox = ({ input_title, addTask }) => {

    const [inputText, setInputText] = React.useState('');

    return (React.createElement("div", { className: 'alertbox_container' },

        React.createElement("div", { className: "alertbox" },

            React.createElement("div", { className: 'alertbox-textarea' },

                React.createElement("span", null, input_title),

                React.createElement("label", null,

                    React.createElement("input", { type: "text", placeholder: "Type Something", onChange: (e) => setInputText(e.target.value) }))),

            React.createElement("div", { className: 'alertbox-btn' },

                React.createElement(Button, { btn_text: "Add", onClick: () => addTask(inputText) })))));

};

export default SingleInput_alertBox;

