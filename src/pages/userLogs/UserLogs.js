import React from 'react'
import { useState } from 'react'
import Table from '../../components/table/user/Table'
export default function UserLogs() {
  const [isactive, setIsactive] = useState(1)
  const columns = [
    {
      accessor: 'checkbox',
    },
    { accessor: 'id', label: 'S.N' },
    {
      accessor: 'name',
      label: 'User',
      sort: true,
      lineBreakInfo: {
        topLine: { accessor: 'name' },
        bottomLine: { accessor: 'link' },
      },
    },
    // { accessor: 'name', label: 'Name', sort: true },
    // { accessor: 'link', label: 'Link', sort: true },
    {
      accessor: 'active',
      label: 'Roles',
      sort: true,
      roundedColor: [
        {
          text: 'manager',
          bgColor: 'bg-purple-400',
          textColor: 'text-purple-900',
        },
        {
          text: 'super_admin',
          bgColor: 'bg-cyan-200',
          textColor: 'text-cyan-800',
        },
        { text: 'admin', bgColor: 'bg-lime-200', textColor: 'text-lime-800' },
        { text: 'other', bgColor: 'bg-teal-200', textColor: 'text-teal-800' },
      ],
    },
    {
      label: 'Action',
      editLink: 'editUser',
      deleteLink: true,
      viewLink: 'viewUser',
      optionLink: {
        previewLink: 'previewUser',
        manageLink: 'manageUser',
      },
    },
  ]
  const rows = [
    {
      id: 1,
      name: 'admin',
      link: 'admin_api@unitechmedia.com.np',
      active: 'admin',
    },
    {
      id: 2,
      name: 'support',
      link: 'semantakarki@unitechmedia.com.np',
      active: 'manager',
    },
    {
      id: 3,
      name: 'Test',
      link: 'samitarai@unitechmedia.com.np',
      active: 'manager',
    },
    {
      id: 4,
      name: 'admin',
      link: 'joshisisir24@gmail.com',
      active: 'super_admin',
    },
    {
      id: 5,
      name: 'Manager',
      link: 'joshisisir24@gmail.com',
      active: 'admin',
    },
    {
      id: 6,
      name: 'admin',
      link: 'admin_api@unitechmedia.com.np',
      active: 'manager',
    },
    {
      id: 7,
      name: 'support',
      link: 'semantakarki@unitechmedia.com.np',
      active: 'super_admin',
    },
    {
      id: 8,
      name: 'Test',
      link: 'samitarai@unitechmedia.com.np',
      active: 'admin',
    },
    {
      id: 9,
      name: 'admin',
      link: 'joshisisir24@gmail.com',
      active: 'super_admin',
    },
    {
      id: 10,
      name: 'Manager',
      link: 'joshisisir24@gmail.com',
      active: 'admin',
    },
  ]
  const additionalTableData = {
    searchAccessor: 'name',
    newTitle: {
      title: 'User',
      link: 'createUser',
    },
  }
  return (
    <div className="UserLogSection">
      <div className="userLogsContents">
        <h1 className="text-[28px] font-[510] mb-[4px] leading-[42px]">
          User Logs
        </h1>
        <p className="text-[#7D8398] text-[16px] leading-[24px] font-[400]">
          An Overview of all the logs of the user's
        </p>
        <div className="filterLogs my-[35px] border-b-[.5px] relative before:absolute before:h-[1px] before:w-full before:bg-[#a4a4a42c] before:bottom-[1px] before:-z-0">
          <button
            onClick={() => setIsactive(1)}
            className={`appearance-none outline-none p-3  ${
              isactive === 1 && 'border-blue-500 border-b-[3px]'
            }`}
          >
            All Logs
          </button>

          <button
            onClick={() => setIsactive(2)}
            className={`appearance-none  outline-none p-3  ${
              isactive === 2 && 'border-blue-500 border-b-[3px]'
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsactive(3)}
            className={`appearance-none  outline-none p-3 ${
              isactive === 3 && 'border-blue-500 border-b-[3px]'
            }`}
          >
            Created Events
          </button>
          <button
            onClick={() => setIsactive(4)}
            className={`appearance-none  outline-none p-3 ${
              isactive === 4 && 'border-blue-500 border-b-[3px] '
            }`}
          >
            Update Events
          </button>
          <button
            onClick={() => setIsactive(5)}
            className={`appearance-none  outline-none p-3  ${
              isactive === 5 && 'border-blue-500 border-b-[3px]'
            }`}
          >
            Deleted Events
          </button>
        </div>
      </div>
      <div className="userTable w-full ">
        <Table
          rows={rows}
          columns={columns}
          additionalTableData={additionalTableData}
        />
      </div>
    </div>
  )
}
