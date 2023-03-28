import React, { useState, useCallback, useEffect, useMemo } from 'react'
import DragAndDropCard from '../../components/card/DragAndDropCard2'
export default function ManageStaticHtml() {
  const [sidebar, setSidebar] = useState([
    {
      id: 8,
      text: 'Write a cool JS library',
    },
    {
      id: 9,
      text: 'Make it generic enough',
    },
    {
      id: 10,
      text: 'Write README',
    },
    {
      id: 11,
      text: 'Create some examples',
    },
    {
      id: 12,
      text:
        'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
    },
    {
      id: 13,
      text: '???',
    },
    {
      id: 14,
      text: 'PROFIT',
    },
  ])
  const [cards, setCards] = useState([
    {
      id: 0,
      text: 'Root',
      childId: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      level: 1,
    },
    {
      id: 1,
      text: 'Write a cool JS library',
      childId: [],
      level: null,
    },
    {
      id: 2,
      text: 'Make it generic enough',
      childId: [],
      level: null,
    },
    {
      id: 3,
      text: 'Write README',
      childId: [],
      level: null,
    },
    {
      id: 4,
      text: 'Create some examples',
      childId: [],
      level: null,
    },
    {
      id: 5,
      text:
        'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
      childId: [],
      level: null,
    },
    {
      id: 6,
      text: '???',
      childId: [],
      level: null,
    },
    {
      id: 7,
      text: 'PROFIT',
      childId: [],
      level: null,
    },
    {
      id: 8,
      text: 'change',
      childId: [],
      level: null,
    },
    {
      id: 9,
      text: 'never',
      childId: [],
      level: null,
    },
    {
      id: 10,
      text: 'hatar',
      childId: [],
      level: null,
    },
  ])
  const initialData = cards[0]
  const [activeUseEffect, setAciveUseEffect] = useState(1)
  //checking data is include  in array or not
  function checkDataExistArray(checkData, array) {
    return array.includes(checkData)
  }
  //getting array data by id
  function gettingArrayDataByID(dataId, array) {
    return array.filter((item) => item.id === dataId)[0]
  }
  //get the index of array
  function getArrayIndexById(dataId, array) {
    return array.indexOf(dataId)
  }
  //get the index of array inside object
  function getArrayIndexByIdOfObject(dataId, array) {
    return array.findIndex((object) => {
      return object.id === dataId
    })
  }
  //This function get the parent level for card data
  function gettingParentLevelForCard(
    dataId,
    array,
    parentLevel,
    returnValue = null,
  ) {
    if (checkDataExistArray(dataId, array)) {
      returnValue = parentLevel
      return returnValue
    } else {
      for (var i = 0; i < array?.length; i++) {
        const cardData = gettingArrayDataByID(array[i], cards)
        returnValue = gettingParentLevelForCard(
          dataId,
          cardData.childId,
          cardData.level,
        )
        if (returnValue) {
          break
        }
      }
    }
    return returnValue
  }
  //Getting the level of  given card id
  function gettingNewLevelForCardByParent(
    dataId,
    array,
    parentLevel,
    returnValue = null,
  ) {
    if (checkDataExistArray(dataId, array)) {
      returnValue = parentLevel + 1
      return returnValue
    } else {
      for (var i = 0; i < array?.length; i++) {
        const cardData = gettingArrayDataByID(array[i], cards)
        returnValue = gettingNewLevelForCardByParent(
          dataId,
          cardData.childId,
          cardData.level,
        )
        if (returnValue) {
          break
        }
      }
    }
    return returnValue
  }
  //Getting the parent data of a given id
  function gettingParentDataByChildID(dataId, array) {
    for (var i = 0; i < array.length; i++) {
      if (checkDataExistArray(dataId, array[i].childId)) {
        return array[i]
      }
    }
  }
  // function gettingNewLevelForCard(
  //   dataId,
  //   array,
  //   parentLevel = 1,
  //   returnValue = null,
  // ) {
  //   if (checkDataExistArray(dataId, array)) {
  //     return parentLevel
  //   } else {
  //     parentLevel = parentLevel + 1

  //     for (var i = 0; i < array?.length; i++) {
  //       const cardData = gettingArrayDataByID(array[i], cards)
  //       returnValue = gettingNewLevelForCard(
  //         dataId,
  //         cardData.childId,
  //         parentLevel,
  //       )
  //       if (returnValue) {
  //         break
  //       }
  //     }
  //   }
  //   return returnValue
  // }
  //  This useEffect determine the new Level for card data
  useEffect(() => {
    // This function return array of  child id  of that id
    function gettingAllChildIdFromThaLevel(dataId, array) {
      const arrayChildID = gettingArrayDataByID(dataId, array)
      return arrayChildID?.childId
    }
    //getting the initial root child Id
    const newCard = cards[0].childId.map((card) => {
      return getArrayIndexByIdOfObject(card, cards)
    })
    setCards((prev) =>
      prev.map((card) => {
        if (checkDataExistArray(card.id, newCard)) {
          return { ...card, level: 1 }
        } else {
          return card
        }
      }),
    )
    //This recursive function assign the level of the card
    function findingLevel(levelCount, array) {
      let childArray = []
      array.forEach((id) => {
        const data = gettingAllChildIdFromThaLevel(id, cards)
        if (data?.length > 0) {
          //this loop is to keep all the same level child in one array
          data.forEach((i) => childArray.push(i))
        }
      })

      setCards((prev) =>
        prev.map((card) => {
          if (checkDataExistArray(card.id, childArray)) {
            return { ...card, level: levelCount }
          } else {
            return card
          }
        }),
      )
      if (childArray.length > 0) {
        findingLevel(++levelCount, childArray)
      }
    }
    findingLevel(1, cards[0].childId)
  }, [activeUseEffect])

  //
  function moveCardInfo(moveto, movefrom, createChild) {
    console.log('moving: data', 'to', moveto, 'from:', movefrom, createChild)

    // moveCard(cards, setCards, moveto, movefrom, createChild)
    if (checkDataExistArray(movefrom.id, moveto.id)) {
      console.log(' Matched')
      return
    } else {
      console.log('not Matched')
    }
    // changingData(moveto, movefrom)
  }
  //swapCard
  function swapCard(moveto, movefrom) {
    console.log(moveto, movefrom)
    const moveToIndex = getArrayIndexById(moveto, cards[0].childId)
    const moveFromIndex = getArrayIndexById(movefrom.id, cards[0].childId)
    const movingCardData = gettingArrayDataByID(movefrom.id, cards)
    const movetoCardData = gettingArrayDataByID(moveto, cards)
    const parenDataOfmovingCard = gettingParentDataByChildID(movefrom.id, cards)
    const parenDataOfmovetoCard = gettingParentDataByChildID(moveto, cards)
    if (movetoCardData?.level === 1 && movingCardData?.level === 1) {
      const temp = cards[0].childId[moveToIndex]
      cards[0].childId[moveToIndex] = cards[0].childId[moveFromIndex]
      cards[0].childId[moveFromIndex] = temp
      setCards(
        cards.map((item, index) => {
          if (index === 0) {
            return cards[0]
          } else {
            return item
          }
        }),
      )
    } else if (movetoCardData.level === movingCardData.level) {
      if (parenDataOfmovingCard.id !== parenDataOfmovetoCard.id) {
        setCards(
          cards.map((item, index) => {
            if (index === 0) {
              return cards[0]
            } else {
              //add moving data in new state
              if (parenDataOfmovetoCard.id === item.id) {
                if (checkDataExistArray(movingCardData?.id, item.childId)) {
                  return item
                } else {
                  return {
                    ...item,
                    childId: [
                      ...item.childId.filter(
                        (child) => child !== movetoCardData?.id,
                      ),
                      movingCardData.id,
                    ],
                  }
                }
              }
              //remove from previous state of moving data
              if (parenDataOfmovingCard.id === item.id) {
                if (checkDataExistArray(movingCardData?.id, item.childId)) {
                  return {
                    ...item,
                    childId: [
                      ...item.childId.filter(
                        (child) => child !== movingCardData?.id,
                      ),
                      movetoCardData?.id,
                    ],
                  }
                }
              }

              return item
            }
          }),
        )
      }
      if (parenDataOfmovingCard.id === parenDataOfmovetoCard.id) {
        setCards(
          cards.map((item, index) => {
            var copyArray = [...item.childId]
            const movetoArrayIndex = getArrayIndexById(moveto, item.childId)
            const movefromArrayIndex = getArrayIndexById(
              movefrom.id,
              item.childId,
            )
            const temp = copyArray[movetoArrayIndex]
            copyArray[movetoArrayIndex] = copyArray[movefromArrayIndex]
            copyArray[movefromArrayIndex] = temp
            if (index === 0) {
              return cards[0]
            } else {
              return { ...item, childId: copyArray }
            }
          }),
        )
      }
    } else if (movetoCardData.level !== movingCardData.level) {
      setCards(
        cards.map((item) => {
          if (parenDataOfmovetoCard.id === item.id) {
            if (
              checkDataExistArray(
                movingCardData.id,
                parenDataOfmovetoCard.childId,
              )
            ) {
              return item
            }
            const updatedItems = [...item.childId]
            updatedItems.splice(
              getArrayIndexById(movetoCardData.id, item.childId),
              0,
              movingCardData.id,
            )
            return { ...item, childId: updatedItems }
          } else if (parenDataOfmovingCard.id === item.id) {
            return {
              ...item,
              childId: item.childId.filter(
                (child) => child !== movingCardData.id,
              ),
            }
          } else {
            return item
          }
        }),
      )
    } else {
    }
    setAciveUseEffect((prev) => prev + 1)
  }
  //put card inside child
  function addCardAsChild(moveto, movefrom) {
    console.log('card', moveto, movefrom)
    const movingCardData = gettingArrayDataByID(movefrom.id, cards)
    const movetoCardData = gettingArrayDataByID(moveto, cards)
    const parentDataOfmovingCard = gettingParentDataByChildID(
      movefrom.id,
      cards,
    )
    setCards(
      cards.map((item) => {
        if (movetoCardData.id === item.id) {
          if (checkDataExistArray(movingCardData.id, item.childId)) {
            return item
          } else {
            return { ...item, childId: [...item.childId, movingCardData.id] }
          }
        }
        if (parentDataOfmovingCard.id === item.id) {
          if (checkDataExistArray(movingCardData.id, item.childId)) {
            return {
              ...item,
              childId: item.childId.filter(
                (child) => child !== movingCardData.id,
              ),
            }
          } else {
            return item
          }
        }
        return item
      }),
    )
    setAciveUseEffect((prev) => prev + 1)
    // const moveToChildIndex = getArrayIndexById(moveto, cards[0].childId)
    // const moveFromChildIndex = getArrayIndexById(movefrom.id, cards[0].childId)
    // const moveToIndex = getArrayIndexByIdOfObject(moveto, cards)
    // const moveFromIndex = getArrayIndexByIdOfObject(movefrom.id, cards)
    // console.log('moveFrom', movefrom)
    // const newData = cards.map((card) => {
    //   if (card.id !== moveToIndex) {
    //     if (checkDataExistArray(movefrom.id, card.childId)) {
    //       const newChildId = card.childId.filter(
    //         (child) => child !== movefrom.id,
    //       )
    //       return { ...card, childId: newChildId }
    //     } else {
    //       return card
    //     }
    //   } else {
    //     if (movefrom.id === card.id) {
    //       return card
    //     }
    //     const updateCard = {
    //       ...card,
    //       childId: checkDataExistArray(movefrom.id, card.childId)
    //         ? card.childId
    //         : [...card.childId, movefrom.id],
    //     }
    //     console.log('updateCard', updateCard)
    //     return updateCard
    //   }
    // })
    // // console.log(newData)
    // setCards(newData)
    // // console.log(newData)
    // // if (!checkDataExistArray(moveFromIndex, cards[moveToIndex].childId)) {
    // //   cards[moveToIndex].childId.push(movefrom.id)
    // // }
    // // console.log(
    // //   moveToChildIndex,
    // //   moveFromChildIndex,
    // //   cards[0].childId,
    // //   moveToIndex,
    // //   moveFromIndex,
    // // )
  }
  return (
    <div>
      <div className="">
        <h1 className="mb-6" onClick={() => console.log(cards)}>
          Manage Menu
        </h1>
        <div className="side flex gap-4">
          <aside className="sidebar max-w-[300px] border-2">
            <div className="header p-2 flex items-center justify-between border-b-2">
              <h3 className="text-l ">Menu</h3>
              <div className="filter flex items-center ">
                <div className="checkbox-contianer relative h-full flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="userall"
                    className="w-3 h-3"
                    // checked={checkboxList[index]?.isChecked || false}
                    // onClick={(e) => handleCheckboxAll(e)}
                  />
                  <label>
                    <p className="text-xs font-medium">Check All</p>
                  </label>
                </div>
              </div>
            </div>
            <ul className=" px-2 ">
              {sidebar.map((item) => (
                <li className=" py-2 ">
                  <div className="checkbox-contianer relative h-full flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="userall"
                      className="w-3 h-3"
                      // checked={checkboxList[index]?.isChecked || false}
                      // onClick={(e) => handleCheckboxAll(e)}
                    />
                    <label>
                      <p className="text-xs font-medium">{item.text}</p>
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          </aside>

          <div className="content border-2 grow">
            <div className="header p-2 border-b-2">
              <h3 className="text-l ">Menu Structure</h3>
            </div>
            <div className="content-detail flex">
              <div className="w-[20px]"></div>
              <ul className="grow">
                {initialData.childId.map((card, index) => (
                  <>
                    <DragAndDropCard
                      key={card}
                      id={card}
                      moveCard={moveCardInfo}
                      swapCard={swapCard}
                      allItems={cards}
                      dndItem={card}
                      addCardAsChild={addCardAsChild}
                    />
                  </>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
