import React from 'react';

import './SingleInputAlertBox.css';

declare const SingleInput_alertBox: React.FC<{

    input_title: string;

    addTask: (inputText: string) => void;

}>;

export default SingleInput_alertBox;

