import React from 'react';

import { useEffect } from 'react';

import TaskWrapper from './TaskWrapper';

import './Taskbox.css';

let index = 1;

const Taskbox = ({ values }) => {

    const [taskData, setTaskData] = React.useState([]);

    useEffect(() => {

        let task = [];

        if (values && values.length !== 0) {

            task = values.map((value) => ({

                state: "TASK_INBOX",

                id: index++,

                value: value

            }));

            setTaskData(task);

        }

    }, [values]);

    return (React.createElement("div", { className: "taskbox" },

        React.createElement("div", { className: 'taskbox-heading' },

            React.createElement("span", { className: "taskbox-archive" }, "Archive"),

            React.createElement("span", null, "Task"),

            React.createElement("span", { className: 'taskbox-pin' }, "Pin")),

        React.createElement("div", { className: 'taskbox-wrapper' },

            React.createElement(TaskWrapper, { taskData: taskData }))));

};

export default Taskbox;

