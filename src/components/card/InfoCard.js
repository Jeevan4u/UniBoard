import React from "react";

export default function infoCard({ cardDetail }) {
  return (
    <div class="info-card  md:col-span-1 sm:col-span-2 col-span-4 bg-blue-700 flex items-center content-center mb-4 gap-x-4 rounded-lg overflow-hidden ">
      <div className={`logo-container w-24 p-4 bg--500 ${cardDetail.bgColor}`}>
        {cardDetail.image}
      </div>
      <div className="content p-x-4 ">
        <div class="title">
          <h3 className="text-xl text-white">{cardDetail.title}</h3>
        </div>
        <div class="stat">
          <h4 className="text-lg text-white">{cardDetail.value}</h4>
        </div>
      </div>
    </div>
  );
}
