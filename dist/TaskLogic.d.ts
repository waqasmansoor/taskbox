/// <reference types="react" />

import { task } from './index';

export declare function pinTask(id: number, tasks: task[], setTasks: React.Dispatch<React.SetStateAction<task[]>>): void;

export declare function archiveTask(id: number, tasks: task[], setTasks: React.Dispatch<React.SetStateAction<task[]>>): void;

