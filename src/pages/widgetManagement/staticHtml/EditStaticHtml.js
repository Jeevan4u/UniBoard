import React, { useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import Editor from 'ckeditor5-custom-build/build/ckeditor'
import { Controller, useFieldArray, useForm } from 'react-hook-form'

export default function EditStaticHtml() {
  const [editorData, setEditorData] = useState('')
  const { register, control, handleSubmit, watch } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <>
      <form
        className="container px-4 mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1>Create New Static HTML</h1>
        <div className="py-4">
          <div className="mt-4 flex gap-6">
            <label className="md:basis-32" htmlFor="form-name">
              Name
            </label>
            <input
              className="flex-grow dark:bg-gray-700"
              id="form-name"
              type="text"
              {...register('name')}
            />
          </div>
          <div className="mt-4 flex gap-6">
            <label className="md:basis-32" htmlFor="form-name">
              Design
            </label>
            <input
              className="flex-grow dark:bg-gray-700"
              id="form-name"
              type="text"
              {...register('design')}
            />
          </div>
          <div className="mt-4 flex gap-6">
            <label className="md:basis-32" htmlFor="design">
              HTML Content
            </label>
            <div className="editor-container grow dark:bg-gray-700 ">
              <CKEditor
                editor={Editor}
                // data="<p>Hello from CKEditor 5!</p>"
                onChange={(event, editor) => {
                  const data = editor.getData()
                  // console.log({ event, editor, data })
                  setEditorData(data)
                }}
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
