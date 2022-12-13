import React from 'react';
import { Select } from 'antd';
const handleChange = (value) => {
    console.log(`selected ${value}`);
};
const LocationSelect = () => (
    <>
        <Select
            defaultValue="Jamgora"
            style={{
                width: 120,
            }}
            onChange={handleChange}
            options={[
                {
                    value: 'Jamgora',
                    label: 'Jamgora',
                },
                {
                    value: 'Savar',
                    label: 'Savar',
                },
                {
                    value: 'Ashulia',
                    label: 'Ashulia',
                },
            ]}
        />

    </>
);
export default LocationSelect;