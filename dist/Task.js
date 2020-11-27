import React from 'react';

import './Task.css';

const Task = (props) => {

    const { task: { id, state, value }, events: { onArchiveTask, onPinTask } } = props;

    return (React.createElement("div", Object.assign({ className: "list-item" }, props),

        React.createElement("label", { className: 'checkbox' },

            React.createElement("input", { type: 'checkbox', name: "checked", disabled: true, defaultChecked: state === "TASK_ARCHIVED" }),

            React.createElement("span", { onClick: () => onArchiveTask(id) })),

        React.createElement("div", { className: 'text' },

            React.createElement("input", { type: "text", value: value, readOnly: true, placeholder: "Input Title" })),

        React.createElement("div", { className: 'actions' }, state !== "TASK_ARCHIVED" ?

            state === "TASK_INBOX" ? React.createElement("span", { onClick: () => onPinTask(id), className: "grey-star" }, "\u2606") : React.createElement("span", { className: "blue-star" }, "\u2606")

            : null)));

};

export default Task;

