'use client'
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors, DragEndEvent } from '@dnd-kit/core'
import { SortableContext, arrayMove, horizontalListSortingStrategy, sortableKeyboardCoordinates } from '@dnd-kit/sortable'
import { ReactNode } from 'react'

type DraggableListProps<T extends { id: string }> = {
  items: T[]
  onReorder: (items: T[]) => void
  children: (item: T, index: number) => ReactNode
  gap?: string
  className?: string
}

export function DraggableList<T extends { id: string }>({
  items,
  onReorder,
  children,
  gap = 'gap-2',
  className = ''
}: DraggableListProps<T>) {
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 3,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    if (active.id !== over?.id) {
      const oldIndex = items.findIndex(item => item.id === active.id)
      const newIndex = items.findIndex(item => item.id === over?.id)
      onReorder(arrayMove(items, oldIndex, newIndex))
    }
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <div className={`flex flex-row items-center ${gap} ${className}`}>
        <SortableContext items={items} strategy={horizontalListSortingStrategy}>
          {items.map((item, index) => (
            <div key={item.id} className="flex items-center">
              {children(item, index)}
            </div>
          ))}
        </SortableContext>
      </div>
    </DndContext>
  )
}