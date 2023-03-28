import React from 'react'
import Select from 'react-select'
import { useForm, Controller } from 'react-hook-form'
export default function CustomDynamicTop({ getContent }) {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm()
  const options = [
    { value: 'text', label: 'Text' },
    { value: 'file', label: 'File' },
    { value: 'textArea', label: 'Text Area' },
    { value: 'image', label: 'Image' },
    { value: 'link', label: 'Link' },
    { value: 'date', label: 'Date' },
  ]

  return (
    <form
      className="container px-4 mx-auto"
      onSubmit={handleSubmit(getContent)}
    >
      <h1>Create Custom Dynamic HTML</h1>
      <div className="py-4">
        <div className="mt-4 flex gap-6">
          <label className="md:basis-32" htmlFor="form-name">
            Name
          </label>
          <div className="flex-grow">
            <input
              className="w-full dark:bg-gray-700"
              id="form-name"
              type="text"
              {...register('name', {
                required: 'This field is required',
                maxLength: 30,
              })}
            />
            {errors.name && (
              <p className="text-red-500 m-1">{errors.name.message}</p>
            )}
          </div>
        </div>
        <div className="mt-4 flex gap-6">
          <label className="md:basis-32" htmlFor="design">
            Select Content
          </label>
          <div className="flex-grow">
            <Controller
              name="content"
              control={control}
              rules={{ required: 'This field is required' }}
              render={({ field }) => (
                <Select
                  {...field}
                  options={options}
                  isMulti
                  closeMenuOnSelect={false}
                />
              )}
            />
            {errors.content && (
              <p className="text-red-500 m-1">{errors.content.message}</p>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="block my-4 bg-blue-500 text-white p-2 rounded-md ml-auto"
        >
          Create
        </button>
      </div>
    </form>
  )
}
