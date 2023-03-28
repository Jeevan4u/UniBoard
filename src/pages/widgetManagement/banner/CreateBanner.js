import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const CreateBanner = () => {
  const navigate = useNavigate();
  const defaultValues = {
    name: "",
    design: "",
    bannerType: "",
    title: "",
    content: "",
    link: "",
    imageFile: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  const onSubmit = (data) => console.log("form submit", data);

  return (
    <form className="container px-4 mx-auto" onSubmit={handleSubmit(onSubmit)}>
      <h1>Create New Dynamic HTML</h1>
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
        <div className="mt-4 flex gap-2">
          <label className="md:basis-32" htmlFor="design">
            Type
          </label>
          <div className="flex-grow">
            <select
              aria-invalid={errors.bannerType ? true : false}
              {...register("bannerType", {
                required: "This field is required",
              })}
              className="w-full p-1 rounded-md dark:bg-gray-700"
            >
              <option value="simple">Simple</option>
              <option value="carousel">Carousel</option>
            </select>
            {errors.bannerType && (
              <p className="text-red-500 m-1">{errors.bannerType.message}</p>
            )}
          </div>
        </div>
      </div>
      <ul>
        <li className="mt-4 flex items-center gap-2">
          <label htmlFor="title" className="md:basis-32 shrink-0">
            Title
          </label>
          <div className="flex-grow">
            <input
              id="title"
              aria-invalid={errors.title ? true : false}
              className="w-full dark:bg-gray-700"
              type="text"
              {...register(`title`, {
                required: "This field is required",
              })}
            />
            {errors?.title && (
              <p className="text-red-500 mt-1">{errors?.title.message}</p>
            )}
          </div>
        </li>
        <li className="mt-4 flex items-center gap-2">
          <label htmlFor="content" className="md:basis-32 shrink-0 self-start">
            Content
          </label>
          <div className="flex-grow">
            <textarea
              id="content"
              aria-invalid={errors.content ? true : false}
              className="w-full h-20 dark:bg-gray-700"
              type="text"
              {...register(`content`)}
            ></textarea>
            {errors?.content && (
              <p className="text-red-500 mt-1">{errors?.content.message}</p>
            )}
          </div>
        </li>
        <li className="mt-4 flex items-center gap-2">
          <label htmlFor="link" className="md:basis-32 shrink-0">
            Link
          </label>
          <div className="flex-grow">
            <input
              id="link"
              aria-invalid={errors.link ? true : false}
              className="w-full dark:bg-gray-700"
              type="text"
              {...register(`link`)}
            />
            {errors?.link && (
              <p className="text-red-500 mt-1">{errors?.link.message}</p>
            )}
          </div>
        </li>
        <li className="mt-4 flex items-center gap-2">
          <label htmlFor="imageFile" className="md:basis-32 shrink-0">
            Image
          </label>
          <div className="flex-grow">
            <input
              id="imageFile"
              aria-invalid={errors.imageFile ? true : false}
              className="w-full dark:bg-gray-700"
              type="file"
              accept="image/*"
              {...register(`imageFile`, {
                required: "This field is required",
              })}
            />
            {errors?.imageFile && (
              <p className="text-red-500 mt-1">{errors?.imageFile.message}</p>
            )}
          </div>
        </li>
      </ul>
      <div className="mt-6 flex gap-2">
        <input
          className="px-4 py-3 bg-green-500 text-white border-transparent rounded-md cursor-pointer"
          type="submit"
          value="Submit"
        />
        <button
          className="px-4 py-3 bg-red-500 text-white rounded-md"
          type="button"
          onClick={() => navigate("/banner")}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default CreateBanner;
