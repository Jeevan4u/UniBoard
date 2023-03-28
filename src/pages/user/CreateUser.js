import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { see, unsee } from "../../helper/svgIcon";
export default function CreateUser() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [passwordSee, setPasswordSee] = useState(false);
  const [confirmPasswordSee, setConfirmPasswordSee] = useState(false);
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <div className="page-header flex justify-between mb-8">
        <div className="page-title">
          <p className="text-xl font-sm ">CREATE USER</p>
        </div>
      </div>
      <form className="md:w-3/4 " onSubmit={handleSubmit(onSubmit)}>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/4">
            <label
              className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Name
            </label>
          </div>
          <div className="md:w-3/4">
            <input
              placeholder="Full Name"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white "
              id="inline-full-name"
              type="text"
              {...register("name", {
                required: "This field is required",
                maxLength: {
                  value: 200,
                  message: "Name should not exceed 150 character",
                },
              })}
            />
            {errors.name && (
              <p className="ml-2 mt-1 text-red-700">{errors.name?.message}</p>
            )}
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/4">
            <label
              className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              E-Mail Address
            </label>
          </div>
          <div className="md:w-3/4">
            <input
              placeholder="Email"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white "
              id="inline-full-name"
              type="email"
              {...register("email", {
                required: "This field is required",
                maxLength: {
                  value: 200,
                  message: "Email is too long",
                },
                pattern: {
                  value: /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/,
                  message: "Please enter valid",
                },
              })}
            />
            {errors.email && (
              <p className="ml-2 mt-1 text-red-700">{errors.email?.message}</p>
            )}
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/4">
            <label
              className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Role
            </label>
          </div>
          <div className="md:w-3/4">
            <select
              placeholder="Select Role"
              className="block w-full bg-gray-200 border-2 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white "
              {...register("role", { required: "Please select your role" })}
            >
              <option>Select Role</option>
              <option value="1">super_admin</option>
              <option value="2">admin</option>
              <option value="3">support</option>
              <option value="4">test role</option>
              <option value="5">manager</option>
            </select>
            {errors.role && (
              <p className="ml-2 mt-1 text-red-700">{errors.role?.message}</p>
            )}
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/4">
            <label
              className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Password
            </label>
          </div>
          <div className="md:w-3/4 relative">
            <input
              placeholder="Password"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white "
              id="inline-full-name"
              type={passwordSee ? "text" : "password"}
              {...register("password", {
                required: "This field is required",
                pattern: {
                  value:
                    /^(?=.*\d)(?=.*[!@#$%^&_*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                  message:
                    "Password should contain Uppers Case,Lower Case,Number,Special Character",
                },
                maxLength: {
                  value: 25,
                  message: "Password is too long",
                },
                minLength: {
                  value: 5,
                  message: "Password is too short",
                },
              })}
            />
            <span
              className="absolute top-2.5 w-5 right-1 cursor-pointer"
              onClick={() => setPasswordSee(!passwordSee)}
            >
              {passwordSee ? see : unsee}
            </span>
            {errors.password && (
              <p className="ml-2 mt-1 text-red-700">
                {errors.password?.message}
              </p>
            )}
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/4">
            <label
              className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Confirm Password
            </label>
          </div>
          <div className="md:w-3/4 relative">
            <input
              placeholder="Confirm Password"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white "
              id="inline-full-name"
              type={confirmPasswordSee ? "text" : "password"}
              {...register("confirmPassword", {
                required: "This field is required",
                pattern: {
                  value:
                    /^(?=.*\d)(?=.*[!@#$%^&_*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                  message:
                    "Password should contain Uppers Case,Lower Case,Number,Special Character",
                },
                maxLength: {
                  value: 25,
                  message: "Password is too long",
                },
                minLength: {
                  value: 5,
                  message: "Password is too short",
                },
              })}
            />
            <span
              className="absolute top-2.5 w-5 right-1 cursor-pointer"
              onClick={() => setConfirmPasswordSee(!confirmPasswordSee)}
            >
              {confirmPasswordSee ? see : unsee}
            </span>
            {errors.confirmPassword && (
              <p className="ml-2 mt-1 text-red-700">
                {errors.confirmPassword?.message}
              </p>
            )}
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-2/4 ml-auto flex justify-end">
            <button
              type="submit"
              className="border-2 rounded py-2 px-3 ml-auto bg-blue-500 hover:bg-blue-600"
            >
              Register
            </button>
            <button
              className="border-2 rounded py-2 px-3 ml-2 bg-red-400 hover:bg-red-600"
              onClick={() => navigate(-1)}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
