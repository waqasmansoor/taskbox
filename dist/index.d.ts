import React from 'react';

import './Taskbox.css';

export interface task {

    id: number;

    value: string;

    state: "TASK_PINNED" | "TASK_ARCHIVED" | "TASK_INBOX";

}

declare const Taskbox: React.FC<{

    values?: string[];

}>;

export default Taskbox;

