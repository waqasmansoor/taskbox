/// <reference types="react" />

import './TaskList.css';

import { TaskProps } from './Task';

import { task } from './index';

export interface TaskListProps {

    tasks: task[];

    loading: boolean;

    events: TaskProps["events"];

}

declare const TaskList: (props: TaskListProps) => JSX.Element;

export default TaskList;

