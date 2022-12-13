import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import { MenuOutlined, SettingOutlined } from '@ant-design/icons';
import AgeSlider from '../InputSlider/AgeSlider';
import LocationSelect from '../Select/LocationSelect';
import GenderSelection from '../Select/GenderSelection';
import tw from 'tailwind-styled-components'

const Selection = tw.div`
    py-3
`
const ButtonSelection = tw.div`
    flex
    justify-center
    items-center
    gap-10
`
const Apply = tw.button`
bg-transparent
 hover:bg-blue-500 
 text-blue-700 font-semibold 
 hover:text-white py-2 px-4 border 
 border-blue-500 
 hover:border-transparent rounded
`
const Reset = tw.button`
bg-transparent
 hover:bg-red-500 
 text-red-700 font-semibold 
 hover:text-white py-2 px-4 border 
 border-red-500 
 hover:border-transparent rounded
`

const Filter = () => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button onClick={showDrawer} className='flex justify-center items-center'>
                {/* <MenuOutlined /> */}
                <SettingOutlined />
            </Button>
            <Drawer title="Filter Item" placement="right" onClose={onClose} open={open}>
                <Selection>Age : <AgeSlider /> </Selection>
                <Selection>Location : <LocationSelect /> </Selection>
                <Selection>Gender : <GenderSelection /> </Selection>
                <ButtonSelection>
                    <Apply>
                        Apply
                    </Apply>
                    <Reset>
                        Reset
                    </Reset>
                </ButtonSelection>
            </Drawer>
            <div>

            </div>
        </>
    );
};
export default Filter;