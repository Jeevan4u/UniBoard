import React from "react";
import { useFieldArray } from "react-hook-form";
import FlipMove from "react-flip-move";

const NestedField = ({ nestIndex, control, register, watch }) => {
  const { fields, remove, append } = useFieldArray({
    control,
    name: `mainData[${nestIndex}].listItem`,
  });
  console.log("main data index", watch("mainData[0].listItem").length);
  return (
    <FlipMove>
      {fields.map((lists, i) => {
        return (
          <div key={lists.id} className="flex gap-2 items-center mb-4">
            <input
              key={lists.id}
              id="list-item"
              className="block  w-full dark:bg-gray-700"
              disabled={!watch(`showListItem${nestIndex}`)}
              defaultValue={lists.list}
              type="text"
              {...register(`mainData.${nestIndex}.listItem.${i}.list`)}
            />
            <button
              className="block py-2 px-4 rounded-md bg-red-500 text-white aria-disabled:bg-gray-500"
              type="button"
              disabled={
                watch(`mainData[${nestIndex}].listItem`).length === 1 ||
                !watch(`showListItem${nestIndex}`)
              }
              aria-disabled={
                watch(`mainData[${nestIndex}].listItem`).length === 1 ||
                !watch(`showListItem${nestIndex}`)
              }
              onClick={() => remove(i)}
            >
              Delete
            </button>
          </div>
        );
      })}
      <button
        className="block mt-4 py-2 px-4 rounded-md bg-blue-500 text-white aria-disabled:bg-gray-500"
        type="button"
        disabled={!watch(`showListItem${nestIndex}`)}
        aria-disabled={!watch(`showListItem${nestIndex}`)}
        onClick={() => append({ list: "" })}
      >
        Add List Item
      </button>
    </FlipMove>
  );
};

export default NestedField;
