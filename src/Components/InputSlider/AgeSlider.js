import React from 'react';
import { Slider } from 'antd';
const onChange = (value) => {
    console.log('onChange: ', value);
};
const onAfterChange = (value) => {
    console.log('onAfterChange: ', value);
};
const AgeSlider = () => {
    return (
        <Slider
            range
            step={10}
            defaultValue={[20, 50]}
            onChange={onChange}
            onAfterChange={onAfterChange}
        />


    )
};
export default AgeSlider;