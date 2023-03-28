import React, { Fragment, useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";

const RolesForm = (props) => {
  const { isFormVisible, setIsFormVisible, userPermission } = props;
  console.log("user permission", userPermission);
  const [allPermissionId, setAllPermissionId] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    resetField,
    setValue,
    formState,
  } = useForm({
    defaultValues: {
      name: "",
      permissionId: userPermission || [],
      selectAll: false,
    },
  });

  console.log("form state", formState);

  const rolesList = useMemo(
    () => [
      {
        id: 1,
        title: "role",
        permissionList: [
          {
            roleId: 1,
            name: "List",
          },
          {
            roleId: 2,
            name: "Create",
          },
          {
            roleId: 3,
            name: "Update",
          },
          {
            roleId: 4,
            name: "Delete",
          },
        ],
      },
      {
        id: 2,
        title: "user",
        permissionList: [
          {
            roleId: 5,
            name: "List",
          },
          {
            roleId: 6,
            name: "Create",
          },
          {
            roleId: 7,
            name: "Update",
          },
          {
            roleId: 8,
            name: "Delete",
          },
        ],
      },
      {
        id: 3,
        title: "page",
        permissionList: [
          {
            roleId: 9,
            name: "List",
          },
          {
            roleId: 10,
            name: "Create",
          },
          {
            roleId: 11,
            name: "Update",
          },
          {
            roleId: 12,
            name: "Delete",
          },
        ],
      },
      {
        id: 4,
        title: "widget",
        permissionList: [
          {
            roleId: 13,
            name: "List",
          },
          {
            roleId: 14,
            name: "Create",
          },
          {
            roleId: 15,
            name: "Update",
          },
          {
            roleId: 16,
            name: "Delete",
          },
        ],
      },
      {
        id: 5,
        title: "banner",
        permissionList: [
          {
            roleId: 17,
            name: "List",
          },
          {
            roleId: 18,
            name: "Create",
          },
          {
            roleId: 19,
            name: "Update",
          },
          {
            roleId: 20,
            name: "Delete",
          },
        ],
      },
      {
        id: 6,
        title: "image Gallery",
        permissionList: [
          {
            roleId: 21,
            name: "List",
          },
          {
            roleId: 22,
            name: "Create",
          },
          {
            roleId: 23,
            name: "Update",
          },
          {
            roleId: 24,
            name: "Delete",
          },
        ],
      },
      {
        id: 7,
        title: "video Gallery",
        permissionList: [
          {
            roleId: 25,
            name: "List",
          },
          {
            roleId: 26,
            name: "Create",
          },
          {
            roleId: 27,
            name: "Update",
          },
          {
            roleId: 28,
            name: "Delete",
          },
        ],
      },
      {
        id: 8,
        title: "text Editor Item",
        permissionList: [
          {
            roleId: 29,
            name: "List",
          },
          {
            roleId: 30,
            name: "Create",
          },
          {
            roleId: 31,
            name: "Update",
          },
          {
            roleId: 32,
            name: "Delete",
          },
        ],
      },
    ],
    []
  );

  useEffect(() => {
    rolesList?.forEach((role) =>
      role?.permissionList?.forEach((permission) => {
        return setAllPermissionId((allPermissionId) => [
          ...allPermissionId,
          String(permission.roleId),
        ]);
      })
    );
    setAllPermissionId((allPermissionId) => [...new Set(allPermissionId)]);
  }, [rolesList]);

  const onSubmit = (data) => console.log("data", data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`fade-in w-1/2 fixed top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all transition-duration-300 bg-white dark:bg-gray-700 rounded-md py-8 px-16 mx-auto z-10 ${
        !isFormVisible ? "invisible opacity-0" : "opacity-100"
      }`}
    >
      <label className="mr-4">Role Name</label>
      <input
        className="dark:bg-gray-800"
        {...register("name", { required: true })}
        placeholder="Enter Role Name"
      />
      {errors.name?.type === "required" && (
        <p role="alert" className="text-red-500">
          Name is required
        </p>
      )}
      <div className="role-table mt-4">
        <div className="flex flex-col">
          <div className="flex items-center py-4 border-b border-b-slate-300">
            <h2 className="basis-[200px]">Controller</h2>
            <input
              type="checkbox"
              onChange={(e) => {
                if (e.target.checked) {
                  setValue("permissionId", allPermissionId);
                } else {
                  resetField("permissionId");
                }
              }}
            />
            <label className="m-2">Select All</label>
          </div>
          {rolesList &&
            rolesList.map((role) => {
              return (
                <div
                  key={role.id}
                  className="flex items-center py-4 border-b border-b-slate-300 capitalize"
                >
                  <h2 className="basis-[200px]">{role.title}</h2>
                  <div className="flex items-center gap-2">
                    {role.permissionList &&
                      role.permissionList.map((permission) => {
                        return (
                          <Fragment key={permission.roleId}>
                            <input
                              value={permission.roleId}
                              type="checkbox"
                              {...register("permissionId")}
                              checked={watch("permissionId").includes(
                                String(permission.roleId)
                              )}
                            />
                            <label className="mr-2">{permission.name}</label>
                          </Fragment>
                        );
                      })}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="button-container flex gap-2 mt-6">
        <input
          type="submit"
          value="Submit"
          className="bg-blue-500 text-white cursor-pointer px-4 py-2"
        />
        <input
          onClick={() => setIsFormVisible(false)}
          type="button"
          value="Cancel"
          className="bg-red-500 text-white cursor-pointer px-4 py-2"
        />
      </div>
    </form>
  );
};

export default RolesForm;
