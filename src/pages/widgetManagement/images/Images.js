import React from 'react'
import Table from '../../../components/table/user/Table'
export default function Images() {
  const columns = [
    {
      accessor: 'checkbox',
    },
    { accessor: 'id', label: 'S.N' },
    { accessor: 'name', label: 'Name', sort: true },
    {
      label: 'Action',
      editLink: 'images',
      deleteLink: true,
      optionLink: {
        previewLink: 'previewImages',
        manageLink: 'manageImages',
      },
    },
  ]
  const rows = [
    {
      id: 1,
      name: 'Gallery Photo',
    },
    {
      id: 2,
      name: 'Home Gallery',
    },
    {
      id: 3,
      name: 'Test',
    },
    {
      id: 4,
      name: 'admin',
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
    },
    {
      id: 7,
      name: 'support',
    },
    {
      id: 8,
      name: 'Test',
    },
    {
      id: 9,
      name: 'admin',
    },
    {
      id: 10,
      name: 'Manager',
    },
  ]
  const additionalTableData = {
    searchAccessor: 'name',
    newTitle: {
      title: 'Add Images',
      link: 'create',
    },
  }
  return (
    <div>
      <div className="page-header flex justify-between ">
        <div className="page-title">
          <p className="text-md font-sm">Images</p>
        </div>
      </div>
      <div className="userTable w-full mt-6">
        <Table
          rows={rows}
          columns={columns}
          additionalTableData={additionalTableData}
        />
      </div>
    </div>
  )
}
