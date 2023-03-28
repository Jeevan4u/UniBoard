/* eslint-disable eqeqeq */

export function isEmpty(obj = {}) {
  return Object.keys(obj).length === 0
}

export function isString(value) {
  return typeof value === 'string' || value instanceof String
}

export function isNumber(value) {
  return typeof value == 'number' && !isNaN(value)
}

export function isBoolean(value) {
  return value === true || value === false
}

export function isNil(value) {
  return typeof value === 'undefined' || value === null
}

export function isDateString(value) {
  if (!isString(value)) return false

  return value.match(/^\d{2}-\d{2}-\d{4}$/)
}

export function convertDateString(value) {
  return value.substr(6, 4) + value.substr(3, 2) + value.substr(0, 2)
}

export function toLower(value) {
  if (isString(value)) {
    return value.toLowerCase()
  }
  return value
}

export function convertType(value) {
  if (isNumber(value)) {
    return value.toString()
  }

  if (isDateString(value)) {
    return convertDateString(value)
  }

  if (isBoolean(value)) {
    return value ? '1' : '-1'
  }

  return value
}

export function filterRows(rows, filters) {
  if (isEmpty(filters)) return rows

  return rows.filter((row) => {
    return Object.keys(filters).every((accessor) => {
      const value = row[accessor]
      const searchValue = filters[accessor]

      if (isString(value)) {
        return toLower(value).includes(toLower(searchValue))
      }

      if (isBoolean(value)) {
        return (
          (searchValue === 'true' && value) ||
          (searchValue === 'false' && !value)
        )
      }

      if (isNumber(value)) {
        return value == searchValue
      }

      return false
    })
  })
}

export function sortRows(rows, sort) {
  return rows.sort((a, b) => {
    const { order, orderBy } = sort

    if (isNil(a[orderBy])) return 1
    if (isNil(b[orderBy])) return -1

    const aLocale = convertType(a[orderBy])
    const bLocale = convertType(b[orderBy])

    if (order === 'asc') {
      return aLocale.localeCompare(bLocale, 'en', {
        numeric: isNumber(b[orderBy]),
      })
    } else {
      return bLocale.localeCompare(aLocale, 'en', {
        numeric: isNumber(a[orderBy]),
      })
    }
  })
}

export function paginateRows(sortedRows, activePage, rowsPerPage) {
  return [...sortedRows].slice(
    (activePage - 1) * rowsPerPage,
    activePage * rowsPerPage,
  )
}

// for drag and drop
//match id and return that matched object / this need array and id
function matchId(arrayList, arrayid) {
  var trail = []
  var path = []
  var found = false
  function recurse(array) {
    for (var i = 0; i < array?.length; i++) {
      // Found the category!
      path.push(i)
      if (array[i].id === arrayid) {
        found = true
        trail.push(array[i])
        break

        // Did not match...
      } else {
        // Are there children / sub-categories? YES
        if (array[i]?.child?.length > 0) {
          recurse(array[i].child)
          if (found) {
            break
          }
        }
      }
      path.pop()
      trail.pop()
    }
  }

  recurse(arrayList)

  return { path: path, trail: trail }
}
//deltete the object of match id
function deleteArrayMatchId(arrayList, arrayid) {
  var found = false
  function recurse(array) {
    for (var i = 0; i < array?.length; i++) {
      // Found the category!

      if (array[i].id === arrayid) {
        found = true

        array.splice(i, 1)
        break

        // Did not match...
      } else {
        // Are there children / sub-categories? YES
        if (array[i]?.child?.length > 0) {
          recurse(array[i].child)
          if (found) {
            break
          }
        }
      }
    }
    return array
  }

  const deleteData = recurse(arrayList)
  return deleteData
}
//add data in match id
function addObjectArray(arrayList, arrayid, newData) {
  var found = false
  function recurse(array) {
    for (var i = 0; i < array?.length; i++) {
      // Found the category!
      if (array[i].id === arrayid) {
        found = true
        if (array[i]?.child) {
          console.log('i am top working')
          array[i].child.push(newData)
        } else {
          array[i] = {
            ...array[i],
            child: [
              {
                id: newData.id,
                text: newData.text,
                child: newData.child,
              },
            ],
          }
          break
        }
        break
        // Did not match...
      } else {
        // Are there children / sub-categories? YES
        if (array[i]?.child?.length > 0) {
          recurse(array[i].child)
          if (found) {
            break
          }
        }
      }
    }

    return array
  }

  const deleteData = recurse(arrayList)

  return deleteData
}
//add data inside array
function addObjectArrayInside(arrayList, arrayid, newData) {
  var found = false
  function recurse(array) {
    for (var i = 0; i < array?.length; i++) {
      // Found the category!
      if (array[i].id === arrayid) {
        found = true

        console.log('i adding inside working')
        array.splice(i + 1, 0, newData)

        break
        // Did not match...
      } else {
        // Are there children / sub-categories? YES
        if (array[i]?.child?.length > 0) {
          recurse(array[i].child)
          if (found) {
            break
          }
        }
      }
    }

    return array
  }

  const deleteData = recurse(arrayList)

  return deleteData
}
//check move from data is weather inside move from data
function checkChlidId(arrayList, arrayid) {
  var found = false
  function recurse(array) {
    for (var i = 0; i < array?.length; i++) {
      // Found the category!

      if (array[i].id === arrayid) {
        found = true
        console.log('found it')
        break
      } else {
        // Are there children / sub-categories? YES
        if (array[i]?.child?.length > 0) {
          recurse(array[i].child)
          if (found) {
            break
          }
        }
      }
    }
  }
  recurse(arrayList)

  return found
}
export function moveCard(arrayList, setCards, moveto, movefrom, createChild) {
  if (moveto.id !== movefrom.id) {
    const moveData = matchId(arrayList, movefrom.id)
    console.log('moveData', moveData, moveto.id)
    if (moveData.trail[0].child) {
      console.log('childExist')
      const checkChild = checkChlidId(moveData.trail[0].child, moveto.id)
      if (!checkChild) {
        const newArray = [...deleteArrayMatchId(arrayList, movefrom.id)]
        if (createChild) {
          setCards([...addObjectArray(newArray, moveto.id, moveData.trail[0])])
        } else {
          setCards([
            ...addObjectArrayInside(newArray, moveto.id, moveData.trail[0]),
          ])
        }
      }
    } else {
      const newArray = [...deleteArrayMatchId(arrayList, movefrom.id)]
      if (createChild) {
        setCards([...addObjectArray(newArray, moveto.id, moveData.trail[0])])
      } else {
        setCards([
          ...addObjectArrayInside(newArray, moveto.id, moveData.trail[0]),
        ])
      }
    }
    // const checkChild = checkChlidId(moveData.trail[0], moveto.id)
    // console.log('checkChild', checkChild)
    // const newArray = [...deleteArrayMatchId(arrayList, movefrom.id)]
    // if (createChild) {
    //   setCards([...addObjectArray(newArray, moveto.id, moveData.trail[0])])
    // } else {
    //   setCards([
    //     ...addObjectArrayInside(newArray, moveto.id, moveData.trail[0]),
    //   ])
    // }

    // setCards([...addObjectArray(arrayList, moveto.id, moveData.trail[0])])
  }
}
