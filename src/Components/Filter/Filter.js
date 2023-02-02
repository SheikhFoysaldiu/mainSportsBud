import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import GenderSelection from '../Select/GenderSelection';
import tw from 'tailwind-styled-components';
import { Slider } from 'antd';
import { Select } from 'antd';
import { useForm, Controller } from 'react-hook-form';


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
    const { register, handleSubmit, control, formState: { errors } } = useForm();
    const [open, setOpen] = useState(false);

  

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    const handleFilter = (data) =>{
        console.log(data.test, data.locationValue)
    }

    return (
        <>
        
            <Button  onClick={showDrawer} className='btn btn-sm lg:btn-lg  bg-blue-600 mx-5 fixed top-28 flex justify-center items-center'>
                {/* <MenuOutlined /> */}
                Filter
            </Button>
            <Drawer title="Filter Item" className='' placement="right" onClose={onClose} open={open}>
            <form onSubmit={handleSubmit(handleFilter)}>

                <Selection>Age :   <Controller
        as={<Slider value={sliderValue} onChange={handleSliderChange} />}
        control={control}
        name="sliderValue"
        defaultValue={50}
      /> <Slider
                {...register("ageValue")}
            range
            step={10}
            defaultValue={[20, 50]}
            
        /> </Selection>
                <Selection>Location : <Select
            defaultValue="Jamgora"
            {...register("locationValue")}
            style={{
                width: 120,
            }}
           
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
        /> </Selection>
                <Selection>Gender :  <Select
            defaultValue="Male"
            {...register("genderValue")}
            style={{
                width: 120,
            }}
           
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
        /> </Selection>
                <ButtonSelection className='my-5'>
                    <input type="submit" className='btn bg-blue-700' value="Apply" />
                    <input type="reset" className='btn bg-blue-700' value="Reset" />
                    
                </ButtonSelection>
                </form>
            </Drawer>
            <div>

            </div>
           
        </>
    );
};
export default Filter;