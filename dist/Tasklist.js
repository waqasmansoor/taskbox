import React from 'react';

import './TaskList.css';

import Task from './Task';

const TaskList = (props) => {

    const loadingRow = (i) => {

        return (React.createElement("div", { className: 'loading-row', key: i },

            React.createElement("span", { className: 'glow-checkbox' }),

            React.createElement("span", { className: 'glow-text' },

                React.createElement("span", null, "looding"),

                React.createElement("span", null, "ok"),

                React.createElement("span", null, "state")),

            React.createElement("span", { className: 'glow-star' },

                React.createElement("span", null, "\u2606"))));

    };

    if (props.loading) {

        return (React.createElement("div", null, props.tasks.map((t, i) => (loadingRow(i)))));

    }

    if (props.tasks.length === 0) {

        return (React.createElement("div", { className: 'empty-box-container' },

            React.createElement("div", { className: 'empty-box' },

                React.createElement("div", { className: 'box-checkmark' }, "\u2713"),

                React.createElement("div", { className: 'box-title' }, "You have no tasks"),

                React.createElement("div", { className: 'box-subtitle' }, "Sit back and relax"))));

    }

    const taskInOrder = [

        ...props.tasks.filter(t => t.state === "TASK_PINNED"),

        ...props.tasks.filter(t => t.state !== "TASK_PINNED")

    ];

    return (React.createElement("div", null, taskInOrder.map((task, i) => (React.createElement(Task, { task: task, events: props.events, key: i })))));

};

export default TaskList;

