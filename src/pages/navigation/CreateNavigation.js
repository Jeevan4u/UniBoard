import React from 'react'
import { useForm } from 'react-hook-form'
export default function CreateNavigation() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log('form submit', data)

  return (
    <div>
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
              Location
            </label>
            <div className="flex-grow">
              <select
                aria-invalid={errors.design ? true : false}
                {...register('location', {
                  required: 'This field is required',
                })}
                className="w-full p-1 rounded-md dark:bg-gray-700"
              >
                <option value="navbar">Navbar</option>
                <option value="header">Header</option>
                <option value="sidebar">Sidebar</option>
                <option value="footer">Footer</option>
              </select>
              {errors.location && (
                <p className="text-red-500 m-1">{errors.design.message}</p>
              )}
            </div>
          </div>
          <div className="mt-4 flex gap-6">
            <label className="md:basis-32" htmlFor="design">
              Type
            </label>
            <div className="flex-grow">
              <select
                aria-invalid={errors.design ? true : false}
                {...register('type', { required: 'This field is required' })}
                className="w-full p-1 rounded-md dark:bg-gray-700"
              >
                <option value="single">Single Page</option>
                <option value="multiple">Multiple Page</option>
              </select>
              {errors.type && (
                <p className="text-red-500 m-1">{errors.design.message}</p>
              )}
            </div>
          </div>
          <div className="mt-4 flex gap-6">
            <label className="md:basis-32" htmlFor="design">
              Logo
            </label>
            <div className="flex-grow">
              <input
                aria-invalid={errors.name ? true : false}
                className="w-full dark:bg-gray-700"
                id="form-name"
                type="file"
                {...register('logo', { required: 'This field is required.' })}
              />
              {errors.logo && (
                <p className="text-red-500 m-1">{errors.name.message}</p>
              )}
            </div>
          </div>
        </div>
        <div className="mt-6 flex gap-2">
          <input className="btn-primary" type="submit" value="Submit" />
          <button className="btn-secondary" type="button">
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}
