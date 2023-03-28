import React, { useState } from "react";
import roleImage from "../../assets/image/sitting-girl-with-laptop-light.png";
import RolesForm from "./RolesForm";
import Table from "../../components/table/user/Table";
import { data } from "autoprefixer";
export default function Roles() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [userPermission, setUserPermission] = useState([]);
  const [userData,setUserData]=useState([
    {
      id: 1,
      name: "admin",
      userNumber: 1,
      permissionId: ["1", "2", "3", "4", "5", "7", "10", "15"],
    },
    {
      id: 2,
      name: "support",
      userNumber: 1,
      permissionId: ["1", "2", "3"],
    },
    {
      id: 3,
      name: "Test",
      userNumber: 1,
      permissionId: ["5", "10", "15"],
    },
    {
      id: 4,
      name: "Manager",
      userNumber: 1,
      permissionId: ["14", "16"],
    },
    {
      id: 5,
      name: "Test",
      userNumber: 1,
      permissionId: ["1", "3"],
    },
  ])

  const columns = [
    {
      accessor: "checkbox",
    },
    { accessor: "id", label: "S.N" },
    {
      accessor: "name",
      label: "User",
      sort: true,
      lineBreakInfo: {
        topLine: { accessor: "name" },
        bottomLine: { accessor: "link" },
      },
    },
    // { accessor: 'name', label: 'Name', sort: true },
    // { accessor: 'link', label: 'Link', sort: true },
    {
      accessor: "active",
      label: "Roles",
      sort: true,
      roundedColor: [
        {
          text: "manager",
          bgColor: "bg-purple-400",
          textColor: "text-purple-900",
        },
        {
          text: "super_admin",
          bgColor: "bg-cyan-200",
          textColor: "text-cyan-800",
        },
        { text: "admin", bgColor: "bg-lime-200", textColor: "text-lime-800" },
        { text: "other", bgColor: "bg-teal-200", textColor: "text-teal-800" },
      ],
    },
    {
      label: "Action",
      editLink: "editUser",
      deleteLink: true,
      viewLink: "viewUser",
      optionLink: {
        previewLink: "previewUser",
        manageLink: "manageUser",
      },
    },
  ];
  const rows = [
    {
      id: 1,
      name: "admin",
      link: "admin_api@unitechmedia.com.np",
      active: "admin",
    },
    {
      id: 2,
      name: "support",
      link: "semantakarki@unitechmedia.com.np",
      active: "manager",
    },
    {
      id: 3,
      name: "Test",
      link: "samitarai@unitechmedia.com.np",
      active: "manager",
    },
    {
      id: 4,
      name: "admin",
      link: "joshisisir24@gmail.com",
      active: "super_admin",
    },
    {
      id: 5,
      name: "Manager",
      link: "joshisisir24@gmail.com",
      active: "admin",
    },
    {
      id: 6,
      name: "admin",
      link: "admin_api@unitechmedia.com.np",
      active: "manager",
    },
    {
      id: 7,
      name: "support",
      link: "semantakarki@unitechmedia.com.np",
      active: "super_admin",
    },
    {
      id: 8,
      name: "Test",
      link: "samitarai@unitechmedia.com.np",
      active: "admin",
    },
    {
      id: 9,
      name: "admin",
      link: "joshisisir24@gmail.com",
      active: "super_admin",
    },
    {
      id: 10,
      name: "Manager",
      link: "joshisisir24@gmail.com",
      active: "admin",
    },
  ];
  const additionalTableData = {
    searchAccessor: "name",
    newTitle: {
      title: "User",
      link: "createUser",
    },
  };
  return (
    <div className="dark:bg-gray-800">
      <div className="page-header mb-6">
        <div className="page-title">
          <p className="text-md font-semibold">ROLES</p>
        </div>
        <div className="card-container mt-4 flex flex-wrap  md:flex-row gap-4 ">
          <>
            {userData &&
              userData.map((item,i) => {
                return (
                  <div
                    key={item.id}
                    className="p-4  bg-slate-100 dark:bg-gray-700 rounded-md basis-[32%] shadow  grow-0  flex justify-between "
                  >
                    <div className="text-container ">
                      <p className="font-light mb-2">{`Total ${item.userNumber} User`}</p>
                      <h2 className="font-medium text-lg capitalize">
                        {item.name}
                      </h2>
                    </div>

                    <div className="mt-2 flex justify-between flex-col ">
                      <p
                        onClick={() => {
                          setIsFormVisible(true);
                          setUserPermission(item.permissionId);
                        }}
                        role="button"
                        className="text-blue-500 text-sm cursor-pointer font-bold"
                      >
                        Edit Role
                      </p>
                      <p
                        role="button"
                        className="text-red-500 text-sm cursor-pointer font-bold"
                        onClick={()=>setUserData(prev=>prev.filter(data=>data.id!==item.id))}
                      >
                        Delete Role
                      </p>
                    </div>
                  </div>
                );
              })}

            {/* Add card */}
            <div className="flex justify-between p-2 bg-slate-100 dark:bg-gray-700 rounded-md basis-[30%] shadow ">
              <img
                src={roleImage}
                alt="Illustration of girl sitting with laptop"
                className="w-[36%] "
              />
              <button
                onClick={() => {
                  setIsFormVisible(true);
                  setUserPermission([]);
                }}
                className="py-3 px-2 self-center text-white rounded-md bg-blue-500"
              >
                Add New Role
              </button>
            </div>
          </>
        </div>

        {/* Overlay div when form shows up */}
        <div
          onClick={() => setIsFormVisible(false)}
          className={`overlay transition-all transition-duration-300 opacity-0 ${
            isFormVisible &&
            "fixed bg-gray-800 bg-opacity-70 top-0 left-0 h-full w-full opacity-100"
          }`}
        ></div>

        {isFormVisible && (
          <RolesForm
            isFormVisible={isFormVisible}
            setIsFormVisible={setIsFormVisible}
            userPermission={userPermission}
          />
        )}
      </div>
      <div className="page-header flex justify-between mb-4">
        <div className="page-title">
          <p className="text-md font-sm font-semibold">
            Total users with their roles
          </p>
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
  );
}
