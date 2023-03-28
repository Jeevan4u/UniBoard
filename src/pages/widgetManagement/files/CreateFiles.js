import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import BaseNestedField from "./BaseNestedField";

const CreateFiles = () => {
  const navigate = useNavigate();
  const defaultValues = {
    name: "",
    design: "",
    nestedImage: [
      {
        file: "",
        title: "",
        description: "",
        date: "",
      },
    ],
    nestedFile: [
      {
        file: "",
        title: "",
        description: "",
        date: "",
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

  const onSubmit = (data) => console.log("form submit", data);

  return (
    <form className="container px-4 mx-auto" onSubmit={handleSubmit(onSubmit)}>
      <h1>Add New Files</h1>
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

      {/* Render image field */}
      <BaseNestedField
        control={control}
        watch={watch}
        register={register}
        errors={errors}
        label="Image"
        fieldName="nestedImage"
        stateName="showImage"
      />

      {/* Render File Field */}
      <BaseNestedField
        control={control}
        watch={watch}
        register={register}
        errors={errors}
        label="File"
        fieldName="nestedFile"
        stateName="showFile"
      />

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

export default CreateFiles;
