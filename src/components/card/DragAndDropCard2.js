import React, { useState, useRef, useMemo } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { Cross } from '../../helper/svgIcon'
export default function DragAndDropCard({
  id,
  swapCard,
  index,
  moveCard,
  dndItem,
  key,
  allItems,
  addCardAsChild,
}) {
  const dropp = useRef(null)
  const dragg = useRef(null)
  const [{ handlerId, isOver, canDrop }, drop] = useDrop({
    accept: 'list',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }
    },
    hover(item, monitor) {
      if (!dropp.current) {
        return
      }
      if (dragg.current) {
        const hoverBoundingRect = dropp.current?.getBoundingClientRect()
        const clientOffset = monitor.getClientOffset()
        const isSwapData =
          clientOffset.y - hoverBoundingRect.y < 20 ? true : false
        if (dndItem === item.id) {
          return
        } else {
          if (isSwapData) {
            if (dndItem && item) {
              swapCard(dndItem, item)
            }
          } else {
            if (dndItem && item) {
              addCardAsChild(dndItem, item)
            }
          }
        }
      }
    },
    drop(item, monitor) {},
  })
  const [{ isDragging }, drag] = useDrag({
    type: 'list',
    item: () => {
      return { id, index }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging() ? true : false,
      initialDrag: monitor.getInitialClientOffset(),
    }),
    hover(item, monitor) {
      console.log('to stop')
    },
  })
  const isActive = canDrop && isOver
  const opacity = isDragging ? true : false
  drop(dropp)
  drag(dragg)
  function gettingArrayDataByID(dataId, array) {
    return array.filter((item) => item.id === dataId)[0]
  }
  const selectedItem = gettingArrayDataByID(id, allItems)
  const selectedItemChild = selectedItem?.childId
  // console.log(
  //   allItems,
  //   'selectedItem',
  //   selectedItem,
  //   'selectedItemChild',
  //   selectedItemChild,
  // )
  return (
    <>
      <li
        ref={dragg}
        style={{ opacity: 1 }}
        data-handler-id={handlerId}
        className={isDragging ? 'opacity-0 mb-1' : 'mb-1'}
        key={key}
      >
        <div className="p-2 pr-7 border cursor-move relative" ref={dropp}>
          <p className="text-xs font-medium">
            {selectedItem?.id} = {selectedItem?.text}
          </p>
          <div className="image-container w-[10px]  absolute right-[8px] top-[50%] translate-y-[-50%] cursor-pointer">
            {<Cross />}
          </div>
        </div>
        {selectedItemChild?.length > 0 && (
          <ul className="ml-4 mt-1 list-[initial]">
            {selectedItemChild.map((child) => {
              return (
                <DragAndDropCard
                  key={child}
                  id={child}
                  moveCard={moveCard}
                  addCardAsChild={addCardAsChild}
                  swapCard={swapCard}
                  allItems={allItems}
                  dndItem={child}
                />
              )
            })}
          </ul>
        )}
      </li>
    </>
  )
}
