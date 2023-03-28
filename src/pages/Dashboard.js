import React from "react";
import Header from "../layout/Header";
import { Outlet } from "react-router";
export default function Dashboard() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
