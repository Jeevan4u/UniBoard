import React, { useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import Editor from 'ckeditor5-custom-build/build/ckeditor'
import { Controller, useFieldArray, useForm } from 'react-hook-form'

export default function CreateStaticHtml() {
  const [editorData, setEditorData] = useState('')
  const {
    register,
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    fissr: '',
  })
  const onSubmit = (data) => console.log(data)

  return (
    <>
      <form
        className="container px-4 mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1>Create New Static HTML</h1>
        <div className="py-4">
          <div className="mt-4 flex gap-6  flex-wrap">
            <label className="md:basis-32" htmlFor="form-name">
              Name
            </label>
            <input
              className="flex-grow dark:bg-gray-700 max-w-full"
              id="form-name"
              type="text"
              {...register('name', {
                required: 'this field is required bitch',
              })}
            />
          </div>
          <div className="mt-4 flex gap-6  flex-wrap">
            <label className="md:basis-32" htmlFor="form-name">
              Design
            </label>
            <input
              className="flex-grow dark:bg-gray-700 max-w-full"
              id="form-name"
              type="text"
              {...register('design', {
                required: 'this field is required bitch',
              })}
            />
          </div>
          <div className="mt-4 flex gap-6 flex-wrap">
            <label className="md:basis-32" htmlFor="design">
              HTML Content
            </label>
            <div className="editor-container grow dark:bg-gray-700 w-[585px] overflow-x-auto">
              <Controller
                control={control}
                name="test"
                rules={{ required: true }}
                render={() => (
                  <CKEditor
                    editor={Editor}
                    onChange={(event, editor) => {
                      const data = editor.getData()
                      setValue('test', data, { shouldValidate: true })
                    }}
                  />
                )}
              />
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
    </>
  )
}
