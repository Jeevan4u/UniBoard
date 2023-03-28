import React from "react";
import Table from "../../../components/table/user/Table";

const DynamicHtml = () => {
  const columns = [
    { accessor: "id", label: "ID" },
    { accessor: "name", label: "Name" },
    {
      label: "Action",
      editLink: "edit",
      deleteLink: true,
      // optionLink: {
      //   previewLink: "previewStaticHtml",
      //   manageLink: "manageStaticHtml",
      // },
    },
  ];

  const rows = [
    {
      id: 1,
      name: "Testimonial",
    },
    {
      id: 2,
      name: "Contact",
    },
    {
      id: 3,
      name: "About Us",
    },
    {
      id: 4,
      name: "Projects",
    },
    {
      id: 5,
      name: "Community",
    },
    {
      id: 6,
      name: "Products",
    },
  ];

  const additionalTableData = {
    searchAccessor: "name",
    newTitle: {
      title: "Add New Dynamic Html",
      link: "create",
    },
  };
  return (
    <div>
      <div className="page-header flex justify-between ">
        <div className="page-title">
          <p className="text-md font-sm">Dynamic Html</p>
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
};

export default DynamicHtml;
