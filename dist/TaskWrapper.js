var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {

    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }

    return new (P || (P = Promise))(function (resolve, reject) {

        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }

        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }

        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }

        step((generator = generator.apply(thisArg, _arguments || [])).next());

    });

};

import React from 'react';

import { pinTask, archiveTask } from './TaskLogic';

import TaskList from './Tasklist';

import { useEffect } from 'react';

import './TaskWrapper.css';

const sleep = (time) => new Promise(acc => setTimeout(acc, time));

const TaskWrapper = ({ taskData }) => {

    const [loading, setLoading] = React.useState(false);

    const [tasks, setTasks] = React.useState([]);

    useEffect(() => {

        if (taskData.length > 0) {

            setTasks([

                ...tasks,

                ...taskData

            ]);

        }

    }, [taskData]);

    function onPinTask(id) {

        return __awaiter(this, void 0, void 0, function* () {

            setLoading(true);

            pinTask(id, tasks, setTasks);

            yield sleep(500);

            setLoading(false);

        });

    }

    function onArchiveTask(id) {

        return __awaiter(this, void 0, void 0, function* () {

            setLoading(true);

            archiveTask(id, tasks, setTasks);

            yield sleep(500);

            setLoading(false);

        });

    }

    return (React.createElement("div", { className: 'task-wrapper' },

        React.createElement(TaskList, { tasks: tasks, events: { onPinTask, onArchiveTask }, loading: loading })));

};

export default TaskWrapper;

