import React from "react";
import InfoCard from "../../components/card/InfoCard";
import ProgressBar from "../../components/progressiveState/ProgressBar";
import { user, setting } from "../../helper/svgIcon";
export default function DashboardMain() {
  const infoCardDetail = [
    { title: "INQUIRIES", value: 13, image: user, bgColor: "bg-yellow-400" },
    { title: "USERS", value: 13, image: setting, bgColor: "bg-lime-400" },
  ];
  const progressBarData = [
    { name: "Created", color: "bg-orange-400", value: 111 },
    { name: "Updated ", color: "bg-stone-400", value: 200 },
    { name: "Deleted", color: "bg-yellow-400", value: 250 },
  ];
  return (
    <>
      <div className="card-container  gap-x-4  grid-cols-4 grid">
        {infoCardDetail.map((item) => (
          <InfoCard cardDetail={item} />
        ))}
      </div>
      <div className="progressBar-container max-w-xxl">
        <ProgressBar progressBarData={progressBarData} />
      </div>
    </>
  );
}
