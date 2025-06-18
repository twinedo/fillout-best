// SortableItem.tsx
'use client'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { ReactNode, MouseEvent } from 'react'

export function SortableItem({
  id,
  children,
  className = '',
  onClick
}: {
  id: string
  children: ReactNode
  className?: string
  onClick?: (e: MouseEvent) => void
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.8 : 1,
  }

  const handleClick = (e: MouseEvent) => {
    // Only trigger onClick if we didn't just drag
    if (!isDragging && onClick) {
      onClick(e)
    }
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`${isDragging ? 'shadow-lg z-10' : ''} ${className}`}
      onClick={handleClick}
    >
      {children}
    </div>
  )
}