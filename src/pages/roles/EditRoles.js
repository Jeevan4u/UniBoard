import React, { useState } from "react";
import PermissionTable from "../../components/table/PermissionTable";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
export default function EditRoles() {
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
  const userData = [
    {
      name: "Role",
      permission: [
        { name: "List", value: 1 },
        { name: "Create", value: 2 },
        { name: "Update", value: 3 },
        { name: "Delete", value: 4 },
        { name: "Delete", value: 5 },
      ],
    },
    {
      name: "User",
      permission: [
        { name: "List", value: 6 },
        { name: "Create", value: 7 },
        { name: "Update", value: 8 },
      ],
    },
    {
      name: "Test",
      permission: [
        { name: "List", value: 9 },
        { name: "Create", value: 10 },
      ],
    },
  ];
  return (
    <div>
      <div className="page-header flex justify-between mb-8">
        <div className="page-title">
          <p className="text-md font-sm ">EDIT USER</p>
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
        <div className="md:flex mb-6">
          <div className="md:w-1/4 mb-2">
            <label
              className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Permission
            </label>
          </div>
          <div className="md:w-3/4">
            <PermissionTable userData={userData} />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-2/4 ml-auto flex justify-end">
            <button
              type="submit"
              className="border-2 rounded py-2 px-3 ml-auto bg-blue-500 hover:bg-blue-600 text-white"
            >
              Submit
            </button>
            <button
              className="border-2 rounded py-2 px-3 ml-2 bg-red-400 hover:bg-red-600 text-white"
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
