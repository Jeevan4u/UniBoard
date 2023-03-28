import React from 'react'
export default function UserViewTable({ userData }) {
  return (
    <div className="table-container">
      <table class="table-auto w-full ">
        <thead>
          <tr>
            <th className="text-start border-2 p-2">Controller</th>
            <th className="text-start border-2 p-2">Permission</th>
          </tr>
        </thead>

        <tbody>
          {userData.map((item, index) => (
            <tr>
              <td className="border-2 p-2 text-gray-500 font-bold">
                {item.name}
              </td>
              {/* <td className=" p-2">
                {item.list && (
                  <div class="flex items-center rounded  border-gray-200 dark:border-gray-700">
                    <input
                      id={`bordered-checkbox-userView${index}`}
                      type="checkbox"
                      value=""
                      name="bordered-checkbox"
                      class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="bordered-checkbox-1"
                      class=" ml-2 w-full text-sm font-medium  dark:text-gray-300"
                    >
                      List
                    </label>
                  </div>
                )}
              </td> */}
              <td className="border-2 p-2">
                {item.permission &&
                  item.permission.map((item) => (
                    <span
                      className={`px-3 pb-1 pt-0.5 rounded-xl bg-${item.color}-500 text-white  mr-2  text-xs`}
                    >
                      {item.name}
                    </span>
                  ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
