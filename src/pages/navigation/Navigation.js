import React from 'react'
import Table from '../../components/table/user/Table'
export default function Navigation() {
  const columns = [
    {
      accessor: 'checkbox',
    },
    { accessor: 'id', label: 'S.N' },
    { accessor: 'name', label: 'Name', sort: true },
    { accessor: 'location', label: 'Location', sort: true },
    {
      label: 'Action',
      editLink: 'editNavigation',
      deleteLink: true,

      optionLink: {
        previewLink: 'previewNavigation',
        manageLink: 'manageNavigation',
      },
    },
  ]
  const rows = [
    {
      id: 1,
      name: 'admin',
      link: 'admin_api@unitechmedia.com.np',
      location: 'ktm',
    },
    {
      id: 2,
      name: 'support',
      link: 'semantakarki@unitechmedia.com.np',
      location: 'dharan',
    },
    {
      id: 3,
      name: 'Test',
      link: 'samitarai@unitechmedia.com.np',
      location: 'kathmandu',
    },
    {
      id: 4,
      name: 'admin',
      link: 'joshisisir24@gmail.com',
      location: 'ktm',
    },
    {
      id: 5,
      name: 'Manager',
      link: 'joshisisir24@gmail.com',
      location: 'ratnapark',
    },
    {
      id: 6,
      name: 'admin',
      link: 'admin_api@unitechmedia.com.np',
      location: 'bhatkekopool',
    },
    {
      id: 7,
      name: 'support',
      link: 'semantakarki@unitechmedia.com.np',
      location: 'ktm',
    },
    {
      id: 8,
      name: 'Test',
      link: 'samitarai@unitechmedia.com.np',
      location: 'dsfds',
    },
    {
      id: 9,
      name: 'admin',
      link: 'joshisisir24@gmail.com',
      location: 'ktm',
    },
    {
      id: 10,
      name: 'Manager',
      link: 'joshisisir24@gmail.com',
      location: 'dharan',
    },
  ]
  const additionalTableData = {
    searchAccessor: 'name',
    newTitle: {
      title: 'Navigation',
      link: 'createNavigation',
    },
  }

  return (
    <div>
      <div className="page-header flex justify-between ">
        <div className="page-title">
          <p className="text-md font-sm">NAVIGATION</p>
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
