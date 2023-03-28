import React, { Fragment, useState } from 'react'
import { dashboardIcon, accessManagementIcon } from '../helper/svgIcon'
import { Link } from 'react-router-dom'
import menu from "../assets/image/menu.svg"
export default function Sidebar({sidebar,setSidebar}) {
  const sidebarInfo = [
    {
      id: 1,
      name: 'Dashboard',
      icon: dashboardIcon,
      link: '/dashboard',
    },
    {
      id: 2,
      name: 'Access Management',
      icon: dashboardIcon,
      link: '/accessManagement',

      dropdownItem: [
        { name: 'User', icon: dashboardIcon, link: '/accessManagement/user' },
        { name: 'Roles', icon: dashboardIcon, link: '/accessManagement/roles' },
      ],
    },
    {
      id: 3,
      name: 'Widget Management',
      icon: dashboardIcon,
      link: '/dashboard',
      dropdownItem: [
        {
          name: 'Custome Dynamic Html',
          icon: dashboardIcon,
          link: '/customeDynamicHtml',
        },
        { name: 'Dynamic Html', icon: dashboardIcon, link: '/dynamicHtml' },
        { name: 'Static Html', icon: dashboardIcon, link: '/staticHtml' },
        { name: 'Banner', icon: dashboardIcon, link: '/banner' },
        { name: 'Images', icon: dashboardIcon, link: '/images' },
        { name: 'Videos', icon: dashboardIcon, link: '/videos' },
        { name: 'Files', icon: dashboardIcon, link: '/files' },
        { name: 'Forms', icon: dashboardIcon, link: '/forms' },
      ],
    },
    {
      id: 4,
      name: 'Navigation',
      icon: dashboardIcon,
      link: '/navigation',
    },
    {
      id: 5,
      name: 'Pages',
      icon: dashboardIcon,
      link: '/pages',
    },
    {
      id: 6,
      name: 'User Logs',
      icon: dashboardIcon,
      link: '/userLogs',
    },
    {
      id: 7,
      name: 'User Inquiry',
      icon: dashboardIcon,
      link: '/dashboard',
    },
  ]
  const [toggle,setToggle] = useState(false)
  const [sideToggleId, setSideToggleId] = useState(0)
  const handeleSibarToggle = (id) => {
    if (id === sideToggleId) {
      setSideToggleId(0)
    } else {
      setSideToggleId(id)
    }
  }
  console.log(sidebar)
  return (
    <div className={`sidebar hide-scrollbar  relative top-0 left-0 h-screen  w-full`}>

      <div className="uniboard-log h-[100%]">
        <aside className="w-full hide-scrollbar overflow-y-scroll h-[100%] bg-[#0072BC] dark:bg-gray-800">

          <div className="px-3 py-4  text-white transition-all duration-300 ">
            <div className="head-container py-6 flex justify-center">
              <h1 className="text-2xl text-white font-bold">UNIBOARD</h1>
              <div className='menu border-white border-[2px] rounded-3xl absolute top-[25px] right-[-18px] z-[50] w-[40px] bg-[#0072BC] dark:bg-gray-800' onClick={()=>setSidebar(!sidebar)}>
                  <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px"><path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z" fill='#ffffff'/></svg>
              </div>
            </div>
            <ul className="space-y-2">
              {sidebarInfo.map((item) => (
                <Fragment key={item.id}>
                  {!item.dropdownItem ? (
                    <li>
                      <Link
                        to={item.link}
                        className="flex items-center p-2 text-base text-white font-normal rounded-lg dark:text-white hover:bg-blue-400 dark:hover:bg-gray-700"
                      >
                        {item.icon}
                        <span className="ml-3">{item.name}</span>
                      </Link>
                    </li>
                  ) : (
                    <li>
                      <button
                        type="button"
                        className="flex items-center w-full p-2 text-base font-normal transition-all duration-300 rounded-lg group hover:bg-blue-400 dark:text-white dark:hover:bg-gray-700"
                        onClick={() => handeleSibarToggle(item.id)}
                      >
                        {item.icon}
                        <span
                          className="flex-1 ml-3 text-left whitespace-nowrap"
                          sidebar-toggle-item
                        >
                          {item.name}
                        </span>
                        <svg
                          sidebar-toggle-item
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </button>

                      <ul
                        className={
                          sideToggleId === item.id
                            ? 'py-2 space-y-2 '
                            : 'py-2 space-y-2 hidden'
                        }
                      >
                        {item.dropdownItem.map((dropItem, index) => (
                          <li key={index}>
                            <Link
                              to={dropItem.link}
                              className="flex items-center w-full p-2 text-base text-white font-normal transition-all duration-300 rounded-lg group hover:bg-blue-400 dark:text-white dark:hover:bg-gray-700 pl-11"
                            >
                              {dropItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  )}
                </Fragment>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  )
}
