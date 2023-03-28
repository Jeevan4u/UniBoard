import React from "react";
// import RoleViewTable from '../../components/table/role/RoleViewTable'
export default function ViewRoles() {
  // const userData = [
  //   {
  //     name: 'Role',
  //     permission: [
  //       { name: 'List', vlaue: 1, color: 'blue' },
  //       { name: 'Create', vlaue: 2, color: 'green' },
  //       { name: 'Update', vlaue: 3, color: 'yellow' },
  //       { name: 'Delete', vlaue: 4, color: 'red' },
  //     ],
  //   },
  //   {
  //     name: 'User',
  //     permission: [
  //       { name: 'List', vlaue: 1, color: 'blue' },
  //       { name: 'Create', vlaue: 2, color: 'green' },
  //       { name: 'Update', vlaue: 3, color: 'yellow' },
  //     ],
  //   },
  //   {
  //     name: 'Test',
  //     permission: [
  //       { name: 'List', vlaue: 1, color: 'blue' },
  //       { name: 'Create', vlaue: 2, color: 'green' },
  //     ],
  //   },
  //   {
  //     name: 'Test2',
  //     permission: [{ name: 'List', vlaue: 1, color: 'blue' }],
  //   },
  //   {
  //     name: 'Test3',
  //   },
  // ]
  return (
    <div>
      <div className="page-header flex justify-between mb-8">
        <div className="page-title">
          <p className="text-md font-md ">VIEW ROLE</p>
        </div>
      </div>
      <div className="">
        <div className="flex items-center gap-2 mb-5">
          <p className="text-gray-500 font-bold">Name:</p>
          <p className="">Person Name</p>
        </div>

        <div className="items-center gap-2 mb-5">
          <p className="text-gray-500 font-bold">Permissions:</p>
          <div className="table-container mt-2">
            {/* <RoleViewTable userData={userData} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
