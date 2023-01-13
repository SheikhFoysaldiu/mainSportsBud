import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Context/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { createUser } = useContext(AuthContext);
  const [signUpError, setSignUPError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (data) => {
    setSignUPError('');
    // console.log(data)
    createUser(data)
      .then(result => {
        console.log(result)
        // const user = result.user;
        // console.log(user);
        toast('User Created Successfully.');
        navigate('/main')
        // saveUser(data.name, data.email);

      })
      .catch(error => {
        console.log(error)
        setSignUPError(error.message)
      });
  }

  return (
    <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
      <form onSubmit={handleSubmit(handleSignUp)}>
        <div className="grid grid-cols-2 gap-4">
          <div className="form-group mb-6">
            <input
              type="text" {...register("fname", {
                required: "First name is Required"
              })}
              className="
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput123"
              aria-describedby="emailHelp123"
              placeholder="First name"
            />
            {errors.fname && <p className='text-red-500'>{errors.fname.message}</p>}
          </div>
          <div className="form-group mb-6">
            <input
              type="text" {...register("lname", {
                required: "Last name is Required"
              })}
              className="
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput124"
              aria-describedby="emailHelp124"
              placeholder="Last name"
            />
            {errors.lname && <p className='text-red-500'>{errors.lname.message}</p>}
          </div>
        </div>
        <div className="form-group mb-6">
          <input
            type="email" {...register("email", {
              required: "Email is Required"
            })}
            className="block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleInput125"
            placeholder="Email address"
          />
          {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
        </div>
        <div className="form-group mb-6">
          <input
            type="password"  {...register("password", {
              required: "Password is Required"
            })}
            className="block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleInput126"
            placeholder="Password"
          />
          {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
        </div>

        <div className="form-group mb-6">
          <input
            type="password" {...register("confirmpassword", {
              required: "Confirm password is Required"
            })}
            className="block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="confirmPassword"
            placeholder="Confirm Password"
          />
          {errors.confirmpassword && <p className='text-red-500'>{errors.confirmpassword.message}</p>}
        </div>

        <div className="flex items-center justify-center">
          <div
            className="datepicker relative form-floating mb-3 xl:w-96"
            data-mdb-toggle-button="false"
          >
            <input
              type="date" {...register("date", {
                required: "Select a date"
              })}
              placeholder='dd/mm/yy'
              className="block w-full px-3
               py-1.5
               text-base
               font-normal
               text-gray-700
               bg-white bg-clip-padding
               border border-solid border-gray-300
               rounded
               transition
               ease-in-out
               m-0
               focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"

            />
            {errors.date && <p className='text-red-500'>{errors.date.message}</p>}


          </div>
        </div>

        <div className="form-group form-check text-center mb-6">
          <input
            type="checkbox" {...register("value", {
              required: true
            })}
            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
            id="exampleCheck25"
          />
          {errors.value && <p className='text-red-500'>{errors.value.message}</p>}
          <label
            className="form-check-label inline-block text-gray-800"
            for="exampleCheck25"
          >
            Accept the terms and conditions
          </label>
        </div>
        <input
          type="submit" value="Sign up"
          className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
        />


        <p className="text-gray-800 mt-6 text-center">
          Already Have an account
          <Link
            to="/login"
            className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
          >
            Login
          </Link>
        </p>
        {signUpError && <p className='text-red-600'>{signUpError}</p>}
      </form>
      <Toaster />
    </div>
  );
};

export default Signup;
