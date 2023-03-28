import React, { useReducer, useRef } from 'react'
import { useForm } from 'react-hook-form'
import {
  checkState,
  createCustom,
} from '../../../feature/reducer/CustomDynamicSlice/CustomDynamicSlice'
import { useDispatch } from 'react-redux'
export default function CustomDynamicOption({ dynamicContent, getfieldName }) {
  const dispatch = useDispatch()
  const initialState = {
    text: null,
    image: null,
    link: null,
    textArea: null,
    file: null,
    date: null,
  }
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const textInputSelect = useRef([])
  const imageInputSelect = useRef([])
  const linkInputSelect = useRef([])
  const textAreaInputSelect = useRef([])
  const fileInputSelect = useRef([])
  const dateInputSelect = useRef([])
  function reducer(state, action) {
    switch (action.type) {
      case 'text':
        if (action.value > 5) {
          return { ...state, text: 5 }
        } else if (action.value < 0) {
          return { ...state, text: 0 }
        } else {
          return { ...state, text: action.value }
        }
      case 'image':
        if (action.value > 5) {
          return { ...state, image: 5 }
        } else if (action.value < 0) {
          return { ...state, image: 0 }
        } else {
          return { ...state, image: action.value }
        }
      case 'link':
        if (action.value > 5) {
          return { ...state, link: 5 }
        } else if (action.value < 0) {
          return { ...state, link: 0 }
        } else {
          return { ...state, link: action.value }
        }
      case 'textArea':
        if (action.value > 5) {
          return { ...state, textArea: 5 }
        } else if (action.value < 0) {
          return { ...state, textArea: 0 }
        } else {
          return { ...state, textArea: action.value }
        }
      case 'file':
        if (action.value > 5) {
          return { ...state, file: 5 }
        } else if (action.value < 0) {
          return { ...state, file: 0 }
        } else {
          return { ...state, file: action.value }
        }
      case 'date':
        if (action.value > 5) {
          return { ...state, date: 5 }
        } else if (action.value < 0) {
          return { ...state, date: 0 }
        } else {
          return { ...state, date: action.value }
        }
      default:
        throw new Error()
    }
  }

  const [state, reducerDispatch] = useReducer(reducer, initialState)
  const text = (
    <>
      {state.text > 0 &&
        Array.from(Array(Number(state.text)), (e, i) => {
          return (
            <input
              className="dark:bg-gray-700 mb-4"
              type="text"
              placeholder="Field Name"
              {...register(`text[${i}]`, { min: 0, max: 10 })}
            />
          )
        })}
    </>
  )
  const image = (
    <>
      {state.image > 0 &&
        Array.from(Array(state.image), (e, i) => {
          return (
            <input
              className="dark:bg-gray-700 mb-4"
              type="text"
              placeholder="Field Name"
              {...register(`image[${i}]`, { min: 0, max: 10 })}
            />
          )
        })}
    </>
  )
  const link = (
    <>
      {state.link > 0 &&
        Array.from(Array(state.link), (e, i) => {
          return (
            <input
              className="dark:bg-gray-700 mb-4"
              type="text"
              placeholder="Field Name"
              {...register(`link[${i}]`, { min: 0, max: 10 })}
            />
          )
        })}
    </>
  )
  const textArea = (
    <>
      {state.textArea > 0 &&
        Array.from(Array(state.textArea), (e, i) => {
          return (
            <input
              className="dark:bg-gray-700 mb-4"
              type="text"
              placeholder="Field Name"
              {...register(`textArea[${i}]`, { min: 0, max: 10 })}
            />
          )
        })}
    </>
  )
  const date = (
    <>
      {state.date > 0 &&
        Array.from(Array(state.date), (e, i) => {
          return (
            <input
              className="dark:bg-gray-700 mb-4"
              type="text"
              placeholder="Field Name"
              {...register(`date[${i}]`, { min: 0, max: 10 })}
            />
          )
        })}
    </>
  )
  const file = (
    <>
      {state.file > 0 &&
        Array.from(Array(state.file), (e, i) => {
          return (
            <input
              className="dark:bg-gray-700 mb-4"
              type="text"
              placeholder="Field Name"
              {...register(`file[${i}]`, { min: 0, max: 10 })}
            />
          )
        })}
    </>
  )
  const submit = (data) => {
    dispatch(createCustom(data))
    getfieldName(data)
  }
  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <div className="px-4">
          {dynamicContent.map((item, index) => (
            <>
              {item === 'text' && (
                <div>
                  <div className="flex items-center mb-4 gap-4">
                    <div className="input-container flex gap-4 items-center ">
                      <label>Text field Number</label>
                      <input
                        type="number"
                        ref={textInputSelect}
                        className="w-[100px] dark:bg-gray-700"
                        // {...register('textNumber', {
                        //   required: true,
                        //   max: 7,
                        //   min: 1,
                        // })}
                      />
                    </div>
                    <div
                      className="button block bg-blue-500 text-white px-2 py-1.5 rounded-md cursor-pointer"
                      onClick={() =>
                        reducerDispatch({
                          type: 'text',
                          value: Number(textInputSelect.current.value),
                        })
                      }
                    >
                      Create
                    </div>
                  </div>

                  <div className="flex gap-2 flex-wrap"> {text}</div>
                </div>
              )}
              {item === 'image' && (
                <div>
                  <div className="flex items-center mb-4 gap-4">
                    <div className="input-container flex gap-4 items-center ">
                      <label>Image field Number</label>
                      <input
                        type="number"
                        ref={imageInputSelect}
                        className="w-[100px] dark:bg-gray-700"
                      />
                    </div>
                    <div
                      className="button block bg-blue-500 text-white px-2 py-1.5 rounded-md cursor-pointer"
                      onClick={() =>
                        reducerDispatch({
                          type: 'image',
                          value: Number(imageInputSelect.current.value),
                        })
                      }
                    >
                      Create
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap"> {image}</div>
                </div>
              )}
              {item === 'link' && (
                <div>
                  <div className="flex items-center mb-4 gap-4">
                    <div className="input-container flex gap-4 items-center ">
                      <label>Link field Number</label>
                      <input
                        type="number"
                        ref={linkInputSelect}
                        className="w-[100px] dark:bg-gray-700"
                      />
                    </div>
                    <div
                      className="button block bg-blue-500 text-white px-2 py-1.5 rounded-md cursor-pointer"
                      onClick={() =>
                        reducerDispatch({
                          type: 'link',
                          value: Number(linkInputSelect.current.value),
                        })
                      }
                    >
                      Create
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap"> {link}</div>
                </div>
              )}
              {item === 'textArea' && (
                <div>
                  <div className="flex items-center mb-4 gap-4">
                    <div className="input-container flex gap-4 items-center ">
                      <label>Text Area field Number</label>
                      <input
                        type="number"
                        ref={textAreaInputSelect}
                        className="w-[100px] dark:bg-gray-700"
                      />
                    </div>
                    <div
                      className="button block bg-blue-500 text-white px-2 py-1.5 rounded-md cursor-pointer"
                      onClick={() =>
                        reducerDispatch({
                          type: 'textArea',
                          value: Number(textAreaInputSelect.current.value),
                        })
                      }
                    >
                      Create
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap"> {textArea}</div>
                </div>
              )}
              {item === 'file' && (
                <div>
                  <div className="flex items-center mb-4 gap-4">
                    <div className="input-container flex gap-4 items-center ">
                      <label>File field Number</label>
                      <input
                        type="number"
                        ref={fileInputSelect}
                        className="w-[100px] dark:bg-gray-700"
                      />
                    </div>
                    <div
                      className="button block bg-blue-500 text-white px-2 py-1.5 rounded-md cursor-pointer"
                      onClick={() =>
                        reducerDispatch({
                          type: 'file',
                          value: Number(fileInputSelect.current.value),
                        })
                      }
                    >
                      Create
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap"> {file}</div>
                </div>
              )}
              {item === 'date' && (
                <div>
                  <div className="flex items-center mb-4 gap-4">
                    <div className="input-container flex gap-4 items-center ">
                      <label>Date field Number</label>
                      <input
                        type="number"
                        ref={dateInputSelect}
                        className="w-[100px] dark:bg-gray-700"
                      />
                    </div>
                    <div
                      className="button block bg-blue-500 text-white px-2 py-1.5 rounded-md cursor-pointer"
                      onClick={() =>
                        reducerDispatch({
                          type: 'date',
                          value: Number(dateInputSelect.current.value),
                        })
                      }
                    >
                      Create
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap"> {date}</div>
                </div>
              )}
            </>
          ))}
        </div>

        {
          <button
            type="submit"
            className="block my-4 bg-blue-500 text-white p-2 rounded-md ml-auto"
          >
            Submit
          </button>
        }
      </form>
    </div>
  )
}
