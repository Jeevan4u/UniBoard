import React from "react";
import Table from "../../components/table/user/Table";
export default function Page() {
  const columns = [
    {
      accessor: "checkbox",
    },
    { accessor: "id", label: "S.N" },
    { accessor: "name", label: "Name", sort: true },
    { accessor: "link", label: "Link", sort: true },
    {
      accessor: "active",
      label: "Active",
      sort: true,
      roundedColor: [
        { text: "yes", bgColor: "bg-lime-300", textColor: "text-lime-800" },
        { text: "no", bgColor: "bg-red-300", textColor: "text-red-800" },
      ],
    },
    {
      label: "Action",
      editLink: "editPages",
      deleteLink: true,
      optionLink: {
        previewLink: "previewPages",
        manageLink: "managePages",
      },
    },
  ];
  const rows = [
    {
      id: 1,
      name: "admin",
      link: "admin_api@unitechmedia.com.np",
      active: "yes",
    },
    {
      id: 2,
      name: "support",
      link: "semantakarki@unitechmedia.com.np",
      active: "yes",
    },
    {
      id: 3,
      name: "Test",
      link: "samitarai@unitechmedia.com.np",
      active: "no",
    },
    {
      id: 4,
      name: "admin",
      link: "joshisisir24@gmail.com",
      active: "yes",
    },
    {
      id: 5,
      name: "Manager",
      link: "joshisisir24@gmail.com",
      active: "no",
    },
    {
      id: 6,
      name: "admin",
      link: "admin_api@unitechmedia.com.np",
      active: "no",
    },
    {
      id: 7,
      name: "support",
      link: "semantakarki@unitechmedia.com.np",
      active: "yes",
    },
    {
      id: 8,
      name: "Test",
      link: "samitarai@unitechmedia.com.np",
      active: "no",
    },
    {
      id: 9,
      name: "admin",
      link: "joshisisir24@gmail.com",
      active: "yes",
    },
    {
      id: 10,
      name: "Manager",
      link: "joshisisir24@gmail.com",
      active: "yes",
    },
  ];
  const additionalTableData = {
    searchAccessor: "name",
    newTitle: {
      title: "Page",
      link: "createPage",
    },
  };

  return (
    <div>
      <div className="page-header flex justify-between ">
        <div className="page-title">
          <p className="text-md font-sm">Pages</p>
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
  );
}
