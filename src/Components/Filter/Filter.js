import React, { useContext, useState } from "react";
import { Button, Drawer } from "antd";
import { MenuOutlined, SettingOutlined } from "@ant-design/icons";
import AgeSlider from "../InputSlider/AgeSlider";
import LocationSelect from "../Select/LocationSelect";
import GenderSelection from "../Select/GenderSelection";
import { useForm } from "react-hook-form";
import SportSearch from "../../Pages/Home/SportSearch/SportSearch";
import { FcSearch } from "react-icons/fc";
import { SearchContext } from "../../Context/SearchContext";
import { AiOutlineFilter, AiOutlineSearch } from "react-icons/ai";
import { FaLocationArrow } from "react-icons/fa";

const Filter = () => {
    const [loading, setLoading] = useState(false);
    const {
        gender,
        setGender,
        location,
        setLocation,
        ageGt,
        setAgeGt,
        ageLt,
        sportUserSearch,
        setSportUserSearch,
        setAgeLt,
    } = useContext(SearchContext);
    const [open, setOpen] = useState(false);
    const handleToggle = () => {
        setOpen(!open);
    };
    const [active, setActive] = React.useState(true);

    const placeholderToggle = () => {
        setActive(false);
    };

    const placeholder = () => {
        setActive(true);
    };
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        setGender(data.gender);
        setLocation(data.location);
        setAgeGt(data.ageGt);
        setAgeLt(data.ageLt);
        setOpen(false);
        document.getElementById("filterForm").reset();

    };
    console.log();

    return (
        <>

            <div className='col-12 flex  align-middle justify-center items-center'>
                <button
                    onClick={handleToggle}
                    type='button'
                    className='btn btn-light mr-10 shadow-sm '
                >
                    <AiOutlineFilter /> Filters
                </button>
                <div className="w-1/2 lg:w-1/3 mt-12 mb-10 lg:mb-12 z-49 relative">
                    <FcSearch className='absolute search'> </FcSearch>
                    <input
                        value={sportUserSearch}
                        onChange={(e) => {
                            setSportUserSearch(e.target.value);
                        }}
                        onFocus={placeholderToggle}
                        onBlur={placeholder}
                        type='text'
                        placeholder='Search People'
                        className={`in input input-bordered border-2 border-stone-600 w-full  placeholder:p-[-1px] input-outline shadow-md ${active ? "placeholder:block" : "placeholder:invisible"
                            } `}
                    />
                </div>

            </div>

            {open && (
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='text-center absolute w-full  z-50 '
                >
                    <div className='bg-gray-200 border-2 border-gray-800 mt-3 mx-8'>
                        <div className='solid col-9 mx-auto'>
                            <div className='md:flex lg:flex xl:flex justify-evenly col-9 mx-auto'>
                                <div className='col-lg-4 col-xl-4 col-md-4'>
                                    <article className='filter-group'>
                                        <header className='card-header'>
                                            <h6 className='title'>Gender </h6>
                                        </header>
                                        <div className='' id=''>
                                            <select
                                                {...register("gender")}
                                                className='border-2 text-sm rounded-full'
                                            >
                                                <option selected value=''>
                                                    All
                                                </option>
                                                <option value='male'>Male</option>
                                                <option value='female'>Female</option>
                                            </select>
                                        </div>
                                    </article>
                                </div>

                                <div className='col-lg-4 col-xl-4 col-md-4'>
                                    <article className='filter-group'>
                                        <header className='card-header'>
                                            <h6 className='title'> Location</h6>
                                        </header>
                                        <div className='' id=''>
                                            {/* Location Selection */}

                                            <input
                                                {...register("location")}
                                                type='text'
                                                className='border-2 text-sm rounded-full'
                                                placeholder='Location'


                                            />
                                        </div>
                                    </article>
                                </div>
                                <div className='col-lg-4 col-xl-4 col-md-4'>
                                    <article className='filter-group'>
                                        <header className='card-header'>
                                            <h6 className='title'>Age </h6>
                                        </header>
                                        <div className=''>
                                            <input
                                                {...register("ageGt")}
                                                type='number'
                                                className='border-2 rounded-full text-sm'
                                                placeholder='Start'
                                            />
                                            {errors.ageGt && <span>Age can't be negative</span>}
                                            <input
                                                {...register("ageLt")}
                                                type='number'
                                                className='border-2 text-sm rounded-full'
                                                placeholder='End'
                                            />
                                            {errors.ageGt && <span>Age can't be negative</span>}
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                        <div className='space-x-4 mb-3'>
                            <button
                                type='submit'
                                className='btn  mt-6 mb-8 md:mb-0 md:mt-10   text-white bg-red-500 hover:bg-green hover:text-black-600 rounded-lg shadow mx-auto'
                            >
                                Search
                            </button>
                            <button
                                onClick={() => setOpen(false)}
                                className='btn   mt-6 mb-8 md:mb-0 md:mt-10   text-black bg-white hover:bg-black hover:text-white rounded-lg shadow mx-auto'
                            >
                                Canel
                            </button>
                        </div>
                    </div>
                </form>
            )}

        </>
    );
};
export default Filter;
