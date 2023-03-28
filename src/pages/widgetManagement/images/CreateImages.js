import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import FlipMove from "react-flip-move";
import { useNavigate } from "react-router";
import { CancelIcon } from "../../../helper/svgIcon";

const CreateImages = () => {
  const navigate = useNavigate();
  const defaultValues = {
    name: "",
    design: "",
    nestedData: [
      {
        imageFile: "",
        title: "",
        description: "",
      },
    ],
  };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues,
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "nestedData",
  });

  const onSubmit = (data) => console.log("form submit", data);

  return (
    <form className="container px-4 mx-auto" onSubmit={handleSubmit(onSubmit)}>
      <h1>Create New Gallery</h1>
      <div className="py-4">
        <div className="mt-4 flex gap-2">
          <label className="md:basis-32" htmlFor="form-name">
            Name
          </label>
          <div className="flex-grow">
            <input
              aria-invalid={errors.name ? true : false}
              className="w-full dark:bg-gray-700"
              id="form-name"
              type="text"
              {...register("name", { required: "This field is required." })}
            />
            {errors.name && (
              <p className="text-red-500 m-1">{errors.name.message}</p>
            )}
          </div>
        </div>
        <div className="mt-4 flex gap-2">
          <label className="md:basis-32" htmlFor="design">
            Design
          </label>
          <div className="flex-grow">
            <select
              aria-invalid={errors.design ? true : false}
              {...register("design", { required: "This field is required" })}
              className="w-full p-1 rounded-md dark:bg-gray-700"
            >
              <option value="DesignA">DesignA</option>
              <option value="DesignB">DesignB</option>
              <option value="DesignC">DesignC</option>
            </select>
            {errors.design && (
              <p className="text-red-500 m-1">{errors.design.message}</p>
            )}
          </div>
        </div>
      </div>
      <FlipMove>
        {fields.map((item, index) => {
          return (
            <ul
              key={item.id}
              className="py-6 relative border-t-4 border-t-blue-500"
            >
              <li className="mt-4 flex items-center gap-2">
                <label htmlFor="imageFile" className="md:basis-32">
                  Image
                </label>
                <div className="flex-grow">
                  <input
                    id="imageFile"
                    aria-invalid={
                      errors.nestedData && errors.nestedData[index]?.imageFile
                        ? true
                        : false
                    }
                    className="w-full dark:bg-gray-700"
                    type="file"
                    accept="image/*"
                    {...register(`nestedData.${index}.imageFile`, {
                      required: "Please upload an image",
                    })}
                  />
                  {errors.nestedData &&
                    errors?.nestedData[index]?.imageFile && (
                      <p className="text-red-500 mt-1">
                        {errors?.nestedData[index]?.imageFile.message}
                      </p>
                    )}
                </div>
              </li>
              <li className="mt-4 flex items-center gap-2">
                <label htmlFor="title" className="md:basis-32">
                  Title
                </label>
                <div className="flex-grow">
                  <input
                    id="title"
                    aria-invalid={
                      errors.nestedData && errors.nestedData[index]?.title
                        ? true
                        : false
                    }
                    className="w-full dark:bg-gray-700"
                    type="text"
                    {...register(`nestedData.${index}.title`, {
                      required: "Image title is required",
                    })}
                  />
                  {errors.nestedData && errors?.nestedData[index]?.title && (
                    <p className="text-red-500 mt-1">
                      {errors?.nestedData[index]?.title.message}
                    </p>
                  )}
                </div>
              </li>
              <li className="mt-4 flex items-center gap-2">
                <label htmlFor="description" className="md:basis-32">
                  Description
                </label>
                <div className="flex-grow">
                  <input
                    id="description"
                    aria-invalid={
                      errors.nestedData && errors.nestedData[index]?.description
                        ? true
                        : false
                    }
                    className="w-full dark:bg-gray-700"
                    type="text"
                    {...register(`nestedData.${index}.description`, {
                      required: "Image description is required",
                    })}
                  />
                  {errors.nestedData &&
                    errors?.nestedData[index]?.description && (
                      <p className="text-red-500 mt-1">
                        {errors?.nestedData[index]?.description.message}
                      </p>
                    )}
                </div>
              </li>
              {watch("nestedData").length > 1 && (
                <button
                  className="w-5 absolute top-1 right-0 transition-all hover:text-red-500"
                  type="button"
                  onClick={() => remove(index)}
                >
                  <CancelIcon className="" />
                </button>
              )}
            </ul>
          );
        })}
      </FlipMove>
      <button
        type="button"
        className="block my-4 bg-blue-500 text-white p-3 rounded-md"
        onClick={() => {
          append({
            imageFile: "",
            title: "",
            description: "",
          });
        }}
      >
        Add Another Content
      </button>
      <div className="mt-6 flex gap-2">
        <input
          className="px-4 py-3 bg-green-500 text-white border-transparent rounded-md cursor-pointer"
          type="submit"
          value="Submit"
        />
        <button
          className="px-4 py-3 bg-red-500 text-white rounded-md"
          type="button"
          onClick={() => navigate("/dynamicHtml")}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default CreateImages;
