import React from 'react'
// import ReactDatePicker from "react-datepicker";
import { useFieldArray, useForm, FormProvider } from 'react-hook-form'
import 'react-datepicker/dist/react-datepicker.css'
// import { CancelIcon } from "../../../helper/svgIcon";
import FormField from './FormField'
import { useNavigate } from 'react-router'

const CreateDynamicHtml = () => {
  const navigate = useNavigate()
  const mainData = {
    title: '',
    preTitle: '',
    subTitle: '',
    content: '',
    imageFile: '',
    imageTitle: '',
    imageDescription: '',
    videoLink: '',
    videoTitle: '',
    link: '',
    date: '',
    listItem: [{ name: '' }],
  }

  const methods = useForm({
    defaultValues: {
      name: '',
      design: '',
      mainData: [mainData],
    },
  })
  // const methods = useForm()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods

  /* const { fields, append, remove } = useFieldArray({
    control,
    name: "mainData",
  }); */

  const fieldArray = useFieldArray({
    control: methods.control,
    name: 'mainData',
  })

  // eslint-disable-next-line no-unused-vars
  const { fields, append, remove } = fieldArray

  const onSubmit = (data) => console.log('form submit', data)

  return (
    <FormProvider {...methods} {...fieldArray}>
      <form
        className="container px-4 mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1>Create New Dynamic HTML</h1>
        <div className="py-4">
          <div className="mt-4 flex gap-6">
            <label className="md:basis-32" htmlFor="form-name">
              Name
            </label>
            <div className="flex-grow">
              <input
                aria-invalid={errors.name ? true : false}
                className="w-full dark:bg-gray-700"
                id="form-name"
                type="text"
                {...register('name', { required: 'This field is required.' })}
              />
              {errors.name && (
                <p className="text-red-500 m-1">{errors.name.message}</p>
              )}
            </div>
          </div>
          <div className="mt-4 flex gap-6">
            <label className="md:basis-32" htmlFor="design">
              Design
            </label>
            <div className="flex-grow">
              <select
                aria-invalid={errors.design ? true : false}
                {...register('design', { required: 'This field is required' })}
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
        <FormField
        // fields={fields}
        // remove={remove}
        // listHelper={listHelper}
        // setListHelper={setListHelper}
        />
        <button
          type="button"
          className="block my-4 bg-blue-500 text-white p-3 rounded-md"
          onClick={() => {
            append(mainData)
            /*  setListHelper((listHelper) => {
              // Add a new array with object {list:""} when new form field is created.
              const newListHelper = { ...listHelper };
              // The index of the new array will be equal to the length of newListHelper
              const nextIndex = Object.keys(newListHelper).length;
              // Copy value of newListHelper to array
              const array = { ...newListHelper };
              // Add an array with object {list:""}
              array[nextIndex] = [{ list: "" }];
              return array;
            }); */
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
            onClick={() => navigate('/dynamicHtml')}
          >
            Cancel
          </button>
        </div>
      </form>
    </FormProvider>
  )
}

export default CreateDynamicHtml
