import React, { useState, useRef, useMemo } from 'react'
import { useDrag, useDrop } from 'react-dnd'

export default function Card({ id, text, index, moveCard, card }) {
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
      if (!dragg.current) {
        return
      }

      // const dragIndex = item.index
      // const hoverIndex = index
      // // Don't replace items with themselves
      // if (dragIndex === hoverIndex) {
      //   return
      // }
      // // Determine rectangle on screen
      // const hoverBoundingRect = ref.current?.getBoundingClientRect()
      // // Get vertical middle
      // const hoverMiddleY =
      //   (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      // // console.log('hoverMiddleY', hoverMiddleY)
      // // Determine mouse position
      // const clientOffset = monitor.getClientOffset()
      // // Get pixels to the top
      // const hoverClientY = clientOffset.y - hoverBoundingRect.top
      // if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      //   return
      // }
      // // Dragging upwards
      // if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      //   return
      // }
      // item.index = hoverIndex
    },
    drop(item, monitor) {
      const hoverBoundingRect = dropp.current?.getBoundingClientRect()
      const lastDropOffSet = monitor.getClientOffset()
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      const clientOffset = monitor.getClientOffset()
      const hoverClientY = clientOffset.y - hoverBoundingRect.top
      // console.log('drop', card, 'drag', item)
      if (Number(clientOffset.x) - Number(hoverBoundingRect.x) > 100) {
        moveCard(card, item, true)
        console.log('yessssssssssssssss')
      } else {
        moveCard(card, item, false)
        console.log('nooooooooooooooooo')

        // return setList(true)
      }
      // Get pixels to the top
      // moveCard(card, item, true)
    },
  })
  const [{ isDragging, initialDrag }, drag] = useDrag({
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
        itemData={card.id}
        className={isDragging ? 'opacity-0' : ''}
      >
        <div className="p-4 border cursor-move" ref={dropp}>
          {card.id} = {text}
        </div>
        {card?.child && (
          <ul className="ml-4">
            {card?.child?.map((child) => {
              return (
                <Card
                  key={child.id}
                  index={index}
                  id={child.id}
                  text={child.text}
                  card={child}
                  moveCard={moveCard}
                />
              )
            })}
          </ul>
        )}
      </li>
      {/* {isActive && (
        <li
          ref={drag}
          // style={{ opacity }}
          data-handler-id={handlerId}
          className={`p-4 border cursor-move ml-4`}
        >
          {text}
        </li>
      )} */}
    </>
  )
}
