import React from 'react'

export default function ProgressBar({ progressBarData }) {
  console.log(progressBarData)
  return (
    <>
      <h1 className="mt-4 mb-6 text-2xl ">User Activities</h1>
      {progressBarData.map((item) => (
        <>
          <div
            class="mb-1 text-base font-medium flex justify-between"
            key={item.name}
          >
            <div className="text1">{item.name} Events</div>
            <div className="text1">{item.value}/279</div>
          </div>

          <div class="w-full rounded-full h-1.5 mb-4  bg-gray-200">
            <div
              class={` h-1.5 rounded-full ${item.color} `}
              style={{ width: `${(item.value / 279) * 100}%` }}
            ></div>
          </div>
        </>
      ))}
    </>
  )
}
