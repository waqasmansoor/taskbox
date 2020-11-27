import React from 'react';

import { task } from './index';

import './TaskWrapper.css';

declare const TaskWrapper: React.FC<{

    taskData: task[];

}>;

export default TaskWrapper;

