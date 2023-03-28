import React from 'react'
import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate, useLocation } from 'react-router'
import { user, userAdd } from '../../../helper/svgIcon'
import { sortRows, filterRows, paginateRows } from '../../../helper/helpers'
import { Pagination } from '../../Pagination'
import {
  EditIcon,
  DeleteIcon,
  ViewIcon,
  // UserAdd,
  option,
} from '../../../helper/svgIcon'
import avatar from '../../../assets/image/avatar.png'
import { check } from 'prettier'

export default function Table({ columns, rows, additionalTableData }) {
  const [activePage, setActivePage] = useState(1)
  const navigate = useNavigate()
  const [dropDownClickData, setDropDownClickData] = useState(null)
  const [filters, setFilters] = useState({})
  const [sort, setSort] = useState({ order: 'asc', orderBy: 'id' })
  const [rowsPerPage, setrowsPerPage] = useState(5)
  const [allCheckboxClick, setAllCheckboxClick] = useState(false)
  const [checkboxList, setCheckboxList] = useState([])
  const filteredRows = useMemo(() => filterRows(rows, filters), [rows, filters])
  const sortedRows = useMemo(() => sortRows(filteredRows, sort), [
    filteredRows,
    sort,
  ])
  const calculatedRows = paginateRows(sortedRows, activePage, rowsPerPage)
  const count = filteredRows.length
  const totalPages = Math.ceil(count / rowsPerPage)

  const handleSearch = (value, accessor) => {
    setActivePage(1)
    if (value) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [accessor]: value,
      }))
    } else {
      setFilters((prevFilters) => {
        const updatedFilters = { ...prevFilters }
        delete updatedFilters[accessor]
        return updatedFilters
      })
    }
  }

  const handleSort = (event, column) => {
    if (column.sort) {
      setActivePage(1)
      setSort((prevSort) => ({
        order:
          prevSort.order === 'asc' && prevSort.orderBy === column.accessor
            ? 'desc'
            : 'asc',
        orderBy: column.accessor,
      }))
    }
    if (event.currentTarget.classList.contains('up')) {
      event.currentTarget.classList.add('down')
      event.currentTarget.classList.remove('up')
    } else {
      event.currentTarget.classList.add('up')
      event.currentTarget.classList.remove('down')
    }
  }
  //For option open and close
  const handleDropdown = (e, currentIndex) => {
    e.stopPropagation()
    currentIndex === dropDownClickData
      ? setDropDownClickData(null)
      : setDropDownClickData(currentIndex)
  }
  document.body.addEventListener('click', () => setDropDownClickData(null))

  //for checkbox click all
  const handleCheckboxAll = (e) => {
    const { name, checked } = e.target
    if (name === 'checkAll') {
      setAllCheckboxClick(!allCheckboxClick)
      let tempCalculatedRows = calculatedRows.map((item, index) => {
        return { ...item, isChecked: checked }
      })
      setCheckboxList(tempCalculatedRows)
    } else {
      setAllCheckboxClick(false)
      let tempCalculatedRows = calculatedRows.map((item, index) =>
        `checkbox${index}` === name
          ? { ...item, isChecked: checked }
          : { ...checkboxList[index] },
      )
      setCheckboxList(tempCalculatedRows)
    }
  }

  return (
    <div className="table-container p-4 rounded-md dark:bg-gray-700">
      <div className="table-top flex justify-between mb-4">
        <div className="left flex justify-between">
          <div className="page-container flex items-center gap-2">
            <div className="text-container">
              <p>Show</p>
            </div>
            <div className="page-option dark:bg-gray-700">
              <select
                name=""
                id=""
                className="border-2 p-0.5 w-30 rounded dark:bg-gray-700"
                onChange={(e) => setrowsPerPage(Number(e.target.value))}
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
            </div>
          </div>
        </div>
        <div className="right flex gap-4 ">
          <div className="serch-container">
            <input
              type="text"
              className="border-2 dark:bg-gray-700"
              placeholder="Search"
              onChange={(event) =>
                handleSearch(
                  event.target.value,
                  additionalTableData.searchAccessor,
                )
              }
            />
          </div>
          {additionalTableData?.newTitle && (
            <div
              className="create-user flex items-center gap-x-1 cursor-pointer"
              onClick={() => navigate(additionalTableData?.newTitle.link)}
            >
              <div className="logo-container w-4">{userAdd}</div>
              <div className="text-container">
                <p>{additionalTableData?.newTitle.title}</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <table className="w-full outer-margin ">
        <thead>
          <tr className=" border-y-2 h-10 ">
            {columns.map((column) => {
              if (column.accessor === 'checkbox') {
                return (
                  <th
                    className={
                      column?.sort
                        ? 'text-start pl-2 after-before'
                        : 'text-start pl-2 '
                    }
                    key={column.accessor}
                    onClick={(event) => handleSort(event, column)}
                  >
                    <div className="checkbox-contianer relative h-full flex items-center">
                      <input
                        type="checkbox"
                        id="userall"
                        name="checkAll"
                        value="all"
                        className="w-4 h-4"
                        onClick={(e) => handleCheckboxAll(e)}
                        checked={allCheckboxClick}
                      />
                    </div>
                  </th>
                )
              }
              return (
                <th
                  className={
                    column?.sort
                      ? 'text-start pl-2 after-before'
                      : 'text-start pl-2 '
                  }
                  key={column.accessor}
                  onClick={(event) => handleSort(event, column)}
                >
                  {column.label}
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {calculatedRows.map((row, index) => {
            return (
              <tr key={row.id} className="border-y-2 ">
                {columns.map((column) => {
                  //this is for checkbox
                  if (column?.accessor === 'checkbox')
                    return (
                      <td className=" p-2 w-10">
                        <div className="checkbox-contianer relative h-full flex items-center">
                          <input
                            type="checkbox"
                            id="userall"
                            name={`checkbox${index}`}
                            className="w-4 h-4"
                            // isChecked={true}
                            checked={checkboxList[index]?.isChecked || false}
                            onClick={(e) => handleCheckboxAll(e)}
                          />
                        </div>
                      </td>
                    )
                  //if we use extra the we send whole jsx in value
                  if (column?.accessor === 'extra') return <>{column.value}</>
                  // if we want to add action value
                  if (
                    column?.editLink ||
                    column?.deleteLink ||
                    column?.viewLink ||
                    column.optionLink
                  )
                    return (
                      <>
                        <td className=" p-2 ">
                          <div className="action-data flex  items-center gap-3">
                            {column.viewLink && (
                              <div className="view">
                                <button
                                  className="w-5 pt-1"
                                  onClick={() =>
                                    navigate(`${column.viewLink}/${row.id}`)
                                  }
                                >
                                  <ViewIcon id={`view-${row.id}`} />
                                </button>
                              </div>
                            )}
                            {column.editLink && (
                              <div className="edit">
                                <button
                                  className="w-5"
                                  onClick={() =>
                                    navigate(`${column.editLink}/${row.id}`)
                                  }
                                >
                                  <EditIcon id={`edit-${row.id}`} />
                                </button>
                              </div>
                            )}
                            {column.deleteLink && (
                              <div className="delete pt-1">
                                <button className="w-5">
                                  <DeleteIcon id={`delete-${row.id}`} />
                                </button>
                              </div>
                            )}{' '}
                            {column.optionLink && (
                              <div className="option pt-1 relative ">
                                <button
                                  id="dropdownDefault"
                                  data-dropdown-toggle="dropdown"
                                  onClick={(e) => handleDropdown(e, index + 1)}
                                >
                                  {option}
                                </button>
                                {dropDownClickData &&
                                  dropDownClickData === index + 1 && (
                                    <div
                                      id="dropdown"
                                      className="absolute right-0  border-2 z-10 w-30 bg-white rounded divide-y divide-gray-100  dark:bg-gray-700 dark:border-gray-600"
                                    >
                                      <ul
                                        className="py-1 text-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700"
                                        aria-labelledby="dropdownDefault"
                                      >
                                        <li>
                                          <button
                                            className=" block py-1 px-4 hover:bg-gray-100 dark:hover:bg-gray-800"
                                            onClick={() =>
                                              navigate(
                                                `${column.optionLink.previewLink}/${row.id}`,
                                              )
                                            }
                                          >
                                            Preview
                                          </button>
                                        </li>
                                        <li>
                                          <button
                                            className="block py-1 px-4 hover:bg-gray-100  dark:hover:bg-gray-800"
                                            onClick={() =>
                                              navigate(
                                                `${column.optionLink.manageLink}/${row.id}`,
                                              )
                                            }
                                          >
                                            Manage
                                          </button>
                                          {/* <Link
                                            to={`${column.optionLink.previewLink}/${row.id}`}
                                            class="block py-1 px-4 hover:bg-gray-100 "
                                          >
                                            sdadadsadd
                                          </Link> */}
                                        </li>
                                      </ul>
                                    </div>
                                  )}
                              </div>
                            )}
                          </div>
                        </td>
                      </>
                    )
                  if (column.roundedColor)
                    return column.roundedColor.map(
                      (item) =>
                        item.text === row[column.accessor] && (
                          <td className=" p-2">
                            <span
                              className={`px-2 pb-0.5  text-white font-medium text-xs rounded-xl ${item.bgColor} ${item.textColor}`}
                            >
                              {row[column.accessor]}
                            </span>
                          </td>
                        ),
                    )
                  if (column.lineBreakInfo) {
                    return (
                      <td className=" p-2">
                        <div className="user-container flex items-center gap-1">
                          <div className="logo-container w-8">
                            <img src={avatar} alt="" />
                          </div>
                          <div className="text-container">
                            <p className="text-xs font-medium">
                              {row[column.lineBreakInfo.topLine.accessor]}
                            </p>
                            <p className="text-xs">
                              {row[column.lineBreakInfo.bottomLine.accessor]}
                            </p>
                          </div>
                        </div>
                      </td>
                    )
                  }
                  return (
                    <td className="pl-2 text-xs" key={column.accessor}>
                      {row[column.accessor]}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className="pagination-container flex justify-between mt-4 items-center">
        <div className="page-detail">
          <p className="text-[12px] font-[700]">
            Showing {(activePage - 1) * rowsPerPage} to{' '}
            {activePage * rowsPerPage > count
              ? count
              : activePage * rowsPerPage}{' '}
            of {count} entries
          </p>
        </div>
        <Pagination
          activePage={activePage}
          count={count}
          rowsPerPage={rowsPerPage}
          totalPages={totalPages}
          setActivePage={setActivePage}
        />
      </div>
    </div>
  )
}
