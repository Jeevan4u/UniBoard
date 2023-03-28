import React, { useState, useRef, useMemo } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { Cross } from '../../helper/svgIcon'
export default function DragAndDropCard({
  id,
  text,
  index,
  moveCard,
  dndItem,
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
        if (Number(clientOffset.x) - Number(hoverBoundingRect.x) > 100) {
          moveCard(dndItem, item, true)
        } else {
          moveCard(dndItem, item, false)
        }
      }
    },
    drop(item, monitor) {
      // const hoverBoundingRect = dropp.current?.getBoundingClientRect()
      // const clientOffset = monitor.getClientOffset()
      // if (Number(clientOffset.x) - Number(hoverBoundingRect.x) > 100) {
      //   moveCard(dndItem, item, true)
      // } else {
      //   moveCard(dndItem, item, false)
      // }
    },
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
  return (
    <>
      <li
        ref={dragg}
        style={{ opacity: 1 }}
        data-handler-id={handlerId}
        className={isDragging ? 'opacity-0 mb-1' : 'mb-1'}
      >
        <div className="p-2 pr-7 border cursor-move relative" ref={dropp}>
          <p className="text-xs font-medium">
            {dndItem.id} = {text}
          </p>
          <div className="image-container w-[10px]  absolute right-[8px] top-[50%] translate-y-[-50%] cursor-pointer">
            {<Cross />}
          </div>
        </div>
        {dndItem?.child && (
          <ul className="ml-4 mt-1 list-[initial]">
            {dndItem?.child?.map((child) => {
              return (
                <DragAndDropCard
                  key={child.id}
                  index={index}
                  id={child.id}
                  text={child.text}
                  dndItem={child}
                  moveCard={moveCard}
                />
              )
            })}
          </ul>
        )}
      </li>
    </>
  )
}
