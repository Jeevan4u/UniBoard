import React from 'react'
import { useForm, useFieldArray, Controller } from 'react-hook-form'
import ReactDatePicker from 'react-datepicker'
import { CancelIcon } from '../../../helper/svgIcon'
export default function CustomDynamicBody({
  dynamicContentName,
  getDynamicContent,
}) {
  const { register, control, handleSubmit, setValue } = useForm({
    defaultValues: {
      customeArrayData: [
        { text: [], date: [], file: [], textArea: [], image: [], link: [] },
      ],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'customeArrayData',
  })
  console.log('dynamicContentName', dynamicContentName)
  return (
    <form onSubmit={handleSubmit(getDynamicContent)}>
      <ul>
        {fields.map((item, index) => (
          <li
            className="py-6 relative border-t-4 border-t-blue-500"
            key={index}
          >
            {dynamicContentName?.textNumber > 0 && (
              <ul>
                {dynamicContentName.text.map((content, i) => {
                  return (
                    <li className="mt-4 flex items-center gap-2">
                      <label
                        htmlFor="title"
                        className="md:basis-32"
                        onChange={setValue(
                          `customeArrayData.${index}.text[${i}].inputlabel`,
                          content,
                          { shouldValidate: true },
                        )}
                      >
                        {content}
                      </label>
                      <div className="flex-grow">
                        <input
                          data-test-id="title"
                          id="title"
                          className="w-full dark:bg-gray-700"
                          type="text"
                          {...register(
                            `customeArrayData.${index}.text[${i}].inputValue`,
                          )}
                        />
                      </div>
                    </li>
                  )
                })}
              </ul>
            )}
            {dynamicContentName?.dateNumber > 0 && (
              <ul>
                {dynamicContentName.date.map((content, i) => {
                  return (
                    <li className="mt-4 flex items-center gap-2">
                      <label
                        htmlFor="title"
                        className="md:basis-32"
                        onChange={setValue(
                          `customeArrayData.${index}.date[${i}].inputlabel`,
                          content,
                          { shouldValidate: true },
                        )}
                      >
                        {content}
                      </label>
                      <div className="flex-grow">
                        <Controller
                          control={control}
                          name={`customeArrayData.${index}.date[${i}].inputValue`}
                          render={({ field: { onChange, value } }) => (
                            <ReactDatePicker
                              onChange={onChange}
                              selected={value}
                              placeholderText="Select Date"
                            />
                          )}
                        />
                      </div>
                    </li>
                  )
                })}
              </ul>
            )}
            {dynamicContentName?.fileNumber > 0 && (
              <ul>
                {dynamicContentName.date.map((content, i) => {
                  return (
                    <li className="mt-4 flex items-center gap-2">
                      <label
                        htmlFor="title"
                        className="md:basis-32"
                        onChange={setValue(
                          `customeArrayData.${index}.date[${i}].inputlabel`,
                          content,
                          { shouldValidate: true },
                        )}
                      >
                        {content}
                      </label>
                      <div className="flex-grow">
                        <Controller
                          control={control}
                          name={`customeArrayData.${index}.date[${i}].inputValue`}
                          render={({ field: { onChange, value } }) => (
                            <ReactDatePicker
                              onChange={onChange}
                              selected={value}
                              placeholderText="Select Date"
                            />
                          )}
                        />
                      </div>
                    </li>
                  )
                })}
                {Array.from(Array(dynamicContentName.fileNumber), (e, i) => {
                  return (
                    <li className="mt-4 flex items-center gap-2">
                      <label
                        htmlFor="title"
                        className="md:basis-32"
                        onChange={setValue(
                          `customeArrayData.${index}.file[${i}].inputlabel`,
                          dynamicContentName[`file${i}`],
                          { shouldValidate: true },
                        )}
                      >
                        {dynamicContentName[`file${i}`]}
                      </label>
                      <div className="flex-grow">
                        <input
                          data-test-id="title"
                          id="title"
                          className="w-full dark:bg-gray-700"
                          type="file"
                          {...register(
                            `customeArrayData.${index}.file[${i}].inputValue`,
                          )}
                        />
                      </div>
                    </li>
                  )
                })}
              </ul>
            )}
            {dynamicContentName?.imageNumber > 0 && (
              <ul>
                {Array.from(Array(dynamicContentName.imageNumber), (e, i) => {
                  return (
                    <li className="mt-4 flex items-center gap-2">
                      <label
                        htmlFor="title"
                        className="md:basis-32"
                        onChange={setValue(
                          `customeArrayData.${index}.image[${i}].inputlabel`,
                          dynamicContentName[`image${i}`],
                          { shouldValidate: true },
                        )}
                      >
                        {dynamicContentName[`image${i}`]}
                      </label>
                      <div className="flex-grow">
                        <input
                          data-test-id="title"
                          id="title"
                          className="w-full dark:bg-gray-700"
                          type="file"
                          accept="image/png, image/jpeg"
                          {...register(
                            `customeArrayData.${index}.image[${i}].inputValue`,
                          )}
                        />
                      </div>
                    </li>
                  )
                })}
              </ul>
            )}
            {dynamicContentName?.linkNumber > 0 && (
              <ul>
                {Array.from(Array(dynamicContentName.linkNumber), (e, i) => {
                  return (
                    <li className="mt-4 flex items-center gap-2">
                      <label
                        htmlFor="title"
                        className="md:basis-32"
                        onChange={setValue(
                          `customeArrayData.${index}.link[${i}].inputlabel`,
                          dynamicContentName[`link${i}`],
                          { shouldValidate: true },
                        )}
                      >
                        {dynamicContentName[`link${i}`]}
                      </label>
                      <div className="flex-grow">
                        <input
                          data-test-id="title"
                          id="title"
                          className="w-full dark:bg-gray-700"
                          type="text"
                          {...register(
                            `customeArrayData.${index}.link[${i}].inputValue`,
                          )}
                        />
                      </div>
                    </li>
                  )
                })}
              </ul>
            )}
            {dynamicContentName?.textAreaNumber > 0 && (
              <ul>
                {Array.from(
                  Array(dynamicContentName.textAreaNumber),
                  (e, i) => {
                    return (
                      <li className="mt-4 flex items-center gap-2">
                        <label
                          htmlFor="title"
                          className="md:basis-32"
                          onChange={setValue(
                            `customeArrayData.${index}.textArea[${i}].inputlabel`,
                            dynamicContentName[`textArea${i}`],
                            { shouldValidate: true },
                          )}
                        >
                          {dynamicContentName[`textArea${i}`]}
                        </label>
                        <div className="flex-grow">
                          <textarea
                            id="content"
                            className="w-full h-20 dark:bg-gray-700"
                            type="text"
                            {...register(
                              `customeArrayData.${index}.textArea[${i}].inputValue`,
                            )}
                          ></textarea>
                        </div>
                      </li>
                    )
                  },
                )}
              </ul>
            )}

            <button
              className="w-5 absolute top-1 right-0 transition-all hover:text-red-500"
              type="button"
              onClick={() => remove(index)}
            >
              <CancelIcon className="" />
            </button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="block my-4 bg-blue-500 text-white p-3 rounded-md"
        onClick={() => {
          append({
            text: [],
            date: [],
            file: [],
            textArea: [],
            image: [],
            link: [],
          })
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
        >
          Cancel
        </button>
      </div>
    </form>
  )
}
