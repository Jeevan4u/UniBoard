import React from "react";
import Table from "../../../components/table/user/Table";

export default function Banner() {
  const columns = [
    {
      accessor: "checkbox",
    },
    { accessor: "id", label: "S.N" },
    { accessor: "name", label: "Name", sort: true },
    {
      label: "Action",
      editLink: "Banner",
      deleteLink: true,
      optionLink: {
        previewLink: "previewBanner",
        manageLink: "manageBanner",
      },
    },
  ];

  const rows = [
    {
      id: 1,
      name: "Home Banner",
    },
    {
      id: 2,
      name: "Testimonial Banner",
    },
    {
      id: 3,
      name: "Gallery Banner",
    },
    {
      id: 4,
      name: "About Us Banner",
    },
    {
      id: 5,
      name: "Contact Banner",
    },
    {
      id: 6,
      name: "Notice Banner",
    },
  ];

  const additionalTableData = {
    searchAccessor: "name",
    newTitle: {
      title: "Add New Banner",
      link: "create",
    },
  };

  return (
    <div>
      <div className="page-header flex justify-between ">
        <div className="page-title">
          <p className="text-md font-sm">Banner</p>
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
