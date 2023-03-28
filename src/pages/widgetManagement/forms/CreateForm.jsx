import React from "react";

const CreateForm = () => {
  return (
    <div className="CreateForm ">
      <h2 className="pb-5">Create a New Form</h2>
      <div className="grid grid-cols-1">
        <div className="form ">
          <div className="Name flex justify-between py-2">
            <label htmlFor="Name" className="mr-10 p-2">
              Name
            </label>
            <input
              type="text"
              placeholder="Name"
              id="Name"
              className="w-[80%]  text-sm text-gray-900 bg-gray-50 rounded-lg border-black border-[2px]  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="Design flex justify-between py-2">
            <label htmlFor="Design" className="mr-10 p-2">
              Design
            </label>
            <input
              type="text"
              placeholder="Design"
              id="Design"
              className="w-[80%]  text-sm text-gray-900 bg-gray-50 rounded-lg border-black border-[2px]  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
            />
          </div>
          <div className="Title flex justify-between py-2">
            <label htmlFor="Title" className="mr-10 p-2">
              Title
            </label>
            <input
              type="text"
              placeholder="Title"
              id="Title"
              className="w-[80%]  text-sm text-gray-900 bg-gray-50 rounded-lg border-black border-[2px]  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="Content flex justify-between py-2">
            <label htmlFor="Content" className="mr-10 p-2">
              Content
            </label>
            <textarea
              id="Content"
              rows="10"
              class="block p-2.5 w-[80%] text-sm text-gray-900 bg-gray-50 rounded-lg border-black border-[2px]  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>
          <div className="Link flex justify-between py-2">
            <label htmlFor="Link" className="mr-10 p-2">
              Link
            </label>
            <input
              type="text"
              placeholder="Link"
              id="Link"
              className="w-[80%]  text-sm text-gray-900 bg-gray-50 rounded-lg border-black border-[2px]  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="AddButton my-3">
            <button className="p-3 dark:bg-blue-700 bg-green-700 rounded-md my-2">
              Add Another Form
            </button>
          </div>
          <div className="Action_Button">
            <button className="py-2 px-3 dark:bg-green-700 bg-blue-500 rounded-md my-2">
              Create
            </button>
            <button className="py-2 px-3  bg-red-500 rounded-md m-2">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateForm;
