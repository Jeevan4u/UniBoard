import React from "react";
import ReactDatePicker from "react-datepicker";
import { Controller, useFieldArray } from "react-hook-form";
import { CancelIcon } from "../../../helper/svgIcon";
import FlipMove from "react-flip-move";

const BaseNestedField = (props) => {
  const { control, register, watch, errors, label, fieldName, stateName } =
    props;
  const { fields, remove, append } = useFieldArray({
    control,
    name: fieldName,
  });
  return (
    <>
      <div className="mt-4 flex gap-2">
        <input
          className="mt-5 self-start"
          type="checkbox"
          {...register(stateName)}
        />
        <label className="mt-4 md:basis-32 self-start shrink-0">{label}</label>
        <div className="flex flex-col md:-ml-4">
          <FlipMove>
            {fields.map((item, index) => {
              return (
                <ul key={item.id} className=" flex flex-wrap grow gap-2 relative">
                  <li className="mt-4 basis-[48%]">
                    <input
                      aria-invalid={
                        watch(stateName) &&
                          errors[`${fieldName}`] &&
                          errors[`${fieldName}`][index]?.file
                          ? true
                          : false
                      }
                      className="w-full dark:bg-gray-700"
                      disabled={!watch(stateName)}
                      type="file"
                      accept={label === "Image" && "image/*"}
                      {...register(`${fieldName}.${index}.file`, {
                        required: watch(stateName)
                          ? "This field is required"
                          : false,
                      })}
                    />
                    {watch(stateName) &&
                      errors[`${fieldName}`] &&
                      errors[`${fieldName}`][index]?.file && (
                        <p className="text-red-500 mt-1">
                          {errors[`${fieldName}`][index]?.file.message}
                        </p>
                      )}
                  </li>
                  <li className="mt-4 basis-[48%]">
                    <input
                      id="title"
                      aria-invalid={
                        watch(stateName) &&
                          errors[`${fieldName}`] &&
                          errors[`${fieldName}`][index]?.title
                          ? true
                          : false
                      }
                      className="w-full py-2 dark:bg-gray-700"
                      disabled={!watch(stateName)}
                      type="text"
                      placeholder="Title"
                      {...register(`${fieldName}.${index}.title`, {
                        required: watch(stateName)
                          ? "This field is required"
                          : false,
                      })}
                    />
                    {watch(stateName) &&
                      errors[`${fieldName}`] &&
                      errors[`${fieldName}`][index]?.title && (
                        <p className="text-red-500 mt-1">
                          {errors[`${fieldName}`][index]?.title.message}
                        </p>
                      )}
                  </li>
                  <li className="mt-4 basis-[48%]">
                    <input
                      id="description"
                      aria-invalid={
                        watch(stateName) &&
                          errors[`${fieldName}`] &&
                          errors[`${fieldName}`][index]?.description
                          ? true
                          : false
                      }
                      className="w-full py-2 dark:bg-gray-700"
                      disabled={!watch(stateName)}
                      type="text"
                      placeholder="Image Description"
                      {...register(`${fieldName}.${index}.description`, {
                        required: watch(stateName)
                          ? "This field is required"
                          : false,
                      })}
                    />
                    {watch(stateName) &&
                      errors[`${fieldName}`] &&
                      errors[`${fieldName}`][index]?.description && (
                        <p className="text-red-500 mt-1">
                          {errors[`${fieldName}`][index]?.description.message}
                        </p>
                      )}
                  </li>
                  <li className="mt-4 basis-[48%]">
                    <Controller
                      control={control}
                      name={`${fieldName}.${index}.date`}
                      rules={{
                        required: watch(stateName)
                          ? "This field is required"
                          : false,
                      }}
                      render={({ field: { onChange, value } }) => (
                        <ReactDatePicker
                          className={`dark:bg-gray-700 py-2 w-full`}
                          onChange={onChange}
                          selected={value}
                          disabled={!watch(stateName)}
                          placeholderText="Select Date"
                        />
                      )}
                    />
                    {watch(stateName) &&
                      errors[`${fieldName}`] &&
                      errors[`${fieldName}`][index]?.date && (
                        <p className="text-red-500 mt-1">
                          {errors[`${fieldName}`][index]?.date.message}
                        </p>
                      )}
                  </li>
                  {watch(`${fieldName}`).length > 1 && (
                    <button
                      className="w-5 absolute top-5 right-0 transition-all hover:text-red-500"
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
        </div>
      </div>
      <button
        type="button"
        className="block my-4 border-[1px] border-solid border-blue-500 text-blue-500 p-1 py-2 mr-6 rounded-md ml-auto"
        onClick={() => {
          append({
            file: "",
            title: "",
            description: "",
          });
        }}
      >
        {`Add Another ${label}`}
      </button>
    </>
  );
};

export default BaseNestedField;
