import React from 'react'
import Table from '../../../components/table/user/Table'
export default function StaticHtml() {
  const columns = [
    {
      accessor: 'checkbox',
    },
    { accessor: 'id', label: 'S.N' },
    { accessor: 'name', label: 'Name', sort: true },
    {
      label: 'Action',
      editLink: 'staticHtml',
      deleteLink: true,
      // optionLink: {
      //   previewLink: "previewStaticHtml",
      //   manageLink: "manageStaticHtml",
      // },
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
      title: 'Static Html',
      link: 'createStaticHtml',
    },
  }
  return (
    <div>
      <div className="page-header flex justify-between ">
        <div className="page-title">
          <p className="text-md font-sm">Static Html</p>
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
