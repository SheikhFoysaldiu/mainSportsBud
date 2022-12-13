import React from 'react';
import { Select } from 'antd';


const handleChange = (value) => {
    console.log(`selected ${value}`);
};

const GenderSelection = () => (
    <>
        <Select
            defaultValue="Male"
            style={{
                width: 120,
            }}
            onChange={handleChange}
            options={[
                {
                    value: 'Male',
                    label: 'Male',
                },
                {
                    value: 'Female',
                    label: 'Female',
                },
                {
                    value: 'Others',
                    label: 'Others',
                },
            ]}
        />

    </>
);
export default GenderSelection;