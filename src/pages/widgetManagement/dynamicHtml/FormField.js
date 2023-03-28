import React from "react";
import ReactDatePicker from "react-datepicker";
import { Controller, useFormContext } from "react-hook-form";
import { CancelIcon } from "../../../helper/svgIcon";
import FlipMove from "react-flip-move";
import NestedField from "./NestedField";

const FormField = (props) => {
  // const { listHelper, setListHelper } = props;
  const fieldArray = useFormContext();
  const methods = useFormContext();
  // console.log(fieldArray);
  const { fields, remove } = fieldArray;
  // const {  } = methods
  const {
    register,
    control,
    watch,
    formState: { errors },
  } = methods;
  // console.log("errors", errors);

  return (
    <FlipMove>
      {fields.map((item, index) => {
        return (
          <ul
            key={item.id}
            className="py-6 relative border-t-4 border-t-blue-500"
          >
            <li className="mt-4 flex items-center gap-2">
              <input type="checkbox" {...register(`showTitle${index}`)} />
              <label htmlFor="title" className="md:basis-32">
                Title
              </label>
              <div className="flex-grow">
                <input
                  data-test-id="title"
                  id="title"
                  aria-invalid={
                    watch(`showTitle${index}`) &&
                    errors.mainData &&
                    errors.mainData[index]?.title
                      ? true
                      : false
                  }
                  className="w-full dark:bg-gray-700"
                  disabled={!watch(`showTitle${index}`)}
                  type="text"
                  {...register(`mainData.${index}.title`, {
                    required: watch(`showTitle${index}`)
                      ? "This field is required"
                      : false,
                  })}
                />
                {watch(`showTitle${index}`) &&
                  errors.mainData &&
                  errors?.mainData[index]?.title && (
                    <p className="text-red-500 mt-1">
                      {errors?.mainData[index]?.title.message}
                    </p>
                  )}
              </div>
            </li>
            <li className="mt-4 flex items-center gap-2">
              <input type="checkbox" {...register(`showPreTitle${index}`)} />
              <label htmlFor="preTitle" className="md:basis-32">
                Pre Title
              </label>
              <div className="flex-grow">
                <input
                  id="preTitle"
                  aria-invalid={
                    watch(`showPreTitle${index}`) &&
                    errors.mainData &&
                    errors.mainData[index]?.preTitle
                      ? true
                      : false
                  }
                  className="w-full dark:bg-gray-700"
                  disabled={!watch(`showPreTitle${index}`)}
                  type="text"
                  {...register(`mainData.${index}.preTitle`, {
                    required: watch(`showPreTitle${index}`)
                      ? "This field is required"
                      : false,
                  })}
                />
                {watch(`showPreTitle${index}`) &&
                  errors.mainData &&
                  errors?.mainData[index]?.preTitle && (
                    <p className="text-red-500 mt-1">
                      {errors?.mainData[index]?.preTitle.message}
                    </p>
                  )}
              </div>
            </li>
            <li className="mt-4 flex items-center gap-2">
              <input type="checkbox" {...register(`showSubTitle${index}`)} />
              <label htmlFor="subTitle" className="md:basis-32">
                Sub Title
              </label>
              <div className="flex-grow">
                <input
                  id="subTitle"
                  aria-invalid={
                    watch(`showSubTitle${index}`) &&
                    errors.mainData &&
                    errors.mainData[index]?.subTitle
                      ? true
                      : false
                  }
                  className="w-full dark:bg-gray-700"
                  disabled={!watch(`showSubTitle${index}`)}
                  type="text"
                  {...register(`mainData.${index}.subTitle`, {
                    required: watch(`showSubTitle${index}`)
                      ? "This field is required"
                      : false,
                  })}
                />
                {watch(`showSubTitle${index}`) &&
                  errors.mainData &&
                  errors?.mainData[index]?.subTitle && (
                    <p className="text-red-500 mt-1">
                      {errors?.mainData[index]?.subTitle.message}
                    </p>
                  )}
              </div>
            </li>
            <li className="mt-4 flex items-center gap-2">
              <input
                className="mt-[2px] self-start"
                type="checkbox"
                {...register(`showContent${index}`)}
              />
              <label htmlFor="content" className="md:basis-32 self-start">
                Content
              </label>
              <div className="flex-grow">
                <textarea
                  id="content"
                  aria-invalid={
                    watch(`showContent${index}`) &&
                    errors.mainData &&
                    errors.mainData[index]?.content
                      ? true
                      : false
                  }
                  className="w-full h-20 dark:bg-gray-700"
                  disabled={!watch(`showContent${index}`)}
                  type="text"
                  {...register(`mainData.${index}.content`, {
                    required: watch(`showContent${index}`)
                      ? "This field is required"
                      : false,
                  })}
                ></textarea>
                {watch(`showContent${index}`) &&
                  errors.mainData &&
                  errors?.mainData[index]?.content && (
                    <p className="text-red-500 mt-1">
                      {errors?.mainData[index]?.content.message}
                    </p>
                  )}
              </div>
            </li>
            <li className="mt-4 flex items-center gap-2">
              <input
                className="mt-[2px]"
                type="checkbox"
                {...register(`showImage${index}`)}
              />
              <label htmlFor="imageFile" className="md:basis-32 shrink-0">
                Image
              </label>
              <div className="flex-grow">
                <div className="flex justify-between gap-2">
                  <input
                    id="imageFile"
                    aria-invalid={
                      watch(`showImage${index}`) &&
                      errors.mainData &&
                      errors.mainData[index]?.imageFile
                        ? true
                        : false
                    }
                    className="w-[30%] dark:bg-gray-700"
                    disabled={!watch(`showImage${index}`)}
                    type="file"
                    accept="image/*"
                    {...register(`mainData.${index}.imageFile`, {
                      required: watch(`showImage${index}`)
                        ? "Upload an image"
                        : false,
                    })}
                  />
                  <input
                    id=""
                    className=" self-stretch dark:bg-gray-700"
                    disabled={!watch(`showImage${index}`)}
                    type="text"
                    placeholder="Image Title"
                    {...register(`mainData.${index}.imageTitle`)}
                  />
                  <input
                    className=" self-stretch dark:bg-gray-700"
                    disabled={!watch(`showImage${index}`)}
                    type="text"
                    placeholder="Image Description"
                    {...register(`mainData.${index}.imageDescription`)}
                  />
                </div>
                {watch(`showImage${index}`) &&
                  errors.mainData &&
                  errors?.mainData[index]?.imageFile && (
                    <p className="text-red-500 mt-1">
                      {errors?.mainData[index]?.imageFile.message}
                    </p>
                  )}
              </div>
            </li>
            <li className="mt-4 flex items-center gap-2">
              <input type="checkbox" {...register(`showVideo${index}`)} />
              <label htmlFor="video-link" className="md:basis-32">
                Video Link
              </label>
              <div className="flex-grow">
                <div className="flex justify-between gap-2">
                  <input
                    aria-invalid={
                      watch(`showVideo${index}`) &&
                      errors.mainData &&
                      errors.mainData[index]?.videoLink
                        ? true
                        : false
                    }
                    id="video-link"
                    className="flex-grow dark:bg-gray-700"
                    disabled={!watch(`showVideo${index}`)}
                    type="text"
                    {...register(`mainData.${index}.videoLink`, {
                      required: watch(`showVideo${index}`)
                        ? "This field is required"
                        : false,
                    })}
                  />
                  <input
                    id=""
                    className="flex-grow dark:bg-gray-700"
                    disabled={!watch(`showVideo${index}`)}
                    type="text"
                    placeholder="Video Title"
                    {...register(`mainData.${index}.videoTitle`)}
                  />
                </div>
                {watch(`showVideo${index}`) &&
                  errors.mainData &&
                  errors?.mainData[index]?.videoLink && (
                    <p className="text-red-500 mt-1">
                      {errors?.mainData[index]?.videoLink.message}
                    </p>
                  )}
              </div>
            </li>
            <li className="mt-4 flex items-center gap-2">
              <input type="checkbox" {...register(`showLink${index}`)} />
              <label htmlFor="link" className="md:basis-32">
                Link
              </label>
              <div className="flex-grow">
                <input
                  id="link"
                  aria-invalid={
                    watch(`showLink${index}`) &&
                    errors.mainData &&
                    errors.mainData[index]?.link
                      ? true
                      : false
                  }
                  className="w-full dark:bg-gray-700"
                  disabled={!watch(`showLink${index}`)}
                  type="text"
                  {...register(`mainData.${index}.link`, {
                    required: watch(`showLink${index}`)
                      ? "This field is required"
                      : false,
                  })}
                />
                {watch(`showLink${index}`) &&
                  errors.mainData &&
                  errors?.mainData[index]?.link && (
                    <p className="text-red-500 mt-1">
                      {errors?.mainData[index]?.link.message}
                    </p>
                  )}
              </div>
            </li>
            <li className="mt-4 flex items-center gap-2">
              <input type="checkbox" {...register(`showDate${index}`)} />
              <label htmlFor="date" className="md:basis-32 shrink-0">
                Date
              </label>
              <div>
                <Controller
                  control={control}
                  name={`mainData.${index}.date`}
                  rules={{
                    required: watch(`showDate${index}`)
                      ? "This field is required"
                      : false,
                  }}
                  render={({ field: { onChange, value } }) => (
                    <ReactDatePicker
                      // customInput={
                      //   <input
                      //     aria-invalid={
                      //       watch(`showDate${index}`) &&
                      //       errors.mainData &&
                      //       errors.mainData[index]?.date
                      //         ? true
                      //         : false
                      //     }
                      //     type="text"
                      //   />
                      // }
                      className={`dark:bg-gray-700 ${
                        watch(`showDates${index}`) &&
                        "border border-1 border-red-500"
                      }`}
                      onChange={onChange}
                      selected={value}
                      disabled={!watch(`showDate${index}`)}
                      placeholderText="Select Date"
                    />
                  )}
                />
                {watch(`showDate${index}`) &&
                  errors.mainData &&
                  errors?.mainData[index]?.date && (
                    <p className="text-red-500 mt-1">
                      {errors?.mainData[index]?.date.message}
                    </p>
                  )}
              </div>
            </li>
            <li className="mt-4 flex items-center gap-2">
              <input
                className="mt-[2px] self-start"
                type="checkbox"
                {...register(`showListItem${index}`)}
              />
              <label
                htmlFor="list-item"
                className="md:basis-32 shrink-0 self-start"
              >
                List Item
              </label>
              <div className="w-full">
                <NestedField
                  nestIndex={index}
                  {...{ control, register, watch }}
                />
                {/*  {listHelper[index] &&
                  listHelper[index]?.map((lists, i) => {
                    return (
                      <input
                        key={i}
                        id="list-item"
                        className="block mb-4 w-full dark:bg-gray-700"
                        disabled={!watch(`showListItem${index}`)}
                        type="text"
                        {...register(`mainData.${index}.listItem.${i}.list`)}
                      />
                    );
                  })} */}
                {/* <button
                  className="block mt-4 py-2 px-4 rounded-md bg-blue-500 text-white aria-disabled:bg-gray-500"
                  disabled={!watch(`showListItem${index}`)}
                  aria-disabled={!watch(`showListItem${index}`)}
                  type="button"
                  onClick={() => {
                    // Indirectly mutating the value of listHelper on click

                    // Make a copy of the list helper object
                    const listHelperCopy = { ...listHelper };
                    // Get the sub array from the listHelper object that is stored on required index
                    const subArray = listHelperCopy[index];
                    // Modifying the helper array will modify the array in listHelperCopy
                    // Add the item to the array
                    subArray.push({ list: "" });
                    // Assign the new value of listHelperCopy to listHelper
                    setListHelper(listHelperCopy);
                  }}
                >
                  Add List Item
                </button> */}
              </div>
            </li>
            {watch("mainData").length > 1 && (
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
  );
};

export default FormField;
