/// <reference types="react" />

import { task } from './index';

import './Task.css';

export interface TaskProps {

    task: task;

    key?: number;

    events: {

        onPinTask: (id: task["id"]) => void;

        onArchiveTask: (id: task["id"]) => void;

    };

}

declare const Task: (props: TaskProps) => JSX.Element;

export default Task;

