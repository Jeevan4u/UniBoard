import React, { Fragment } from 'react'

export default function PermissionTable({ userData }) {
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
            <tr key={index}>
              <td className="border-2 p-2 text-gray-500 font-bold">
                {item.name}
              </td>
              <td className=" p-2 border-2">
                {item.permission && (
                  <div class="flex items-center rounded  border-gray-200 dark:border-gray-700 ">
                    {item.permission.map((permission, index) => (
                      <Fragment key={index}>
                        <input
                          id={`bordered-checkbox-${permission.name}-${permission.value}`}
                          type="checkbox"
                          value=""
                          name="bordered-checkbox"
                          class="w-3.5 h-3.5  text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          for={`bordered-checkbox-${permission.name}-${permission.value}`}
                          class="ml-2 mr-4 text-sm font-medium "
                        >
                          {permission.name}
                        </label>
                      </Fragment>
                    ))}
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
