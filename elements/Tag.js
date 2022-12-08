import { useState } from 'react'

import { products } from '../data'

const SingleTag = ({ label, setTag, activeTag }) => {
  return (
    <div
      className={`max-w-max cursor-pointer rounded-3xl border-[1px] px-2.5 hover:border-neutral-500 ${
        activeTag === label
          ? 'cursor-default border-green-400 bg-green-100 hover:border-green-400'
          : 'border-neutral-300'
      }`}
      onClick={() => setTag(label)}
    >
      {label}
    </div>
  )
}

const Tags = ({ onTagSelect }) => {
  const [activeTag, setActiveTag] = useState('Хлеб')

  const setTag = (name) => {
    setActiveTag(activeTag === name ? '' : name)
  }

  onTagSelect(activeTag)

  return (
    <div className="scrollbar-none -mx-8 mb-8 flex flex-row flex-nowrap gap-2 overflow-x-auto px-8 md:mx-0 md:flex-wrap md:overflow-visible md:px-0">
      {products.map((tag) => {
        return (
          <SingleTag
            label={tag.label}
            key={tag.label}
            setTag={setTag}
            activeTag={activeTag}
          />
        )
      })}
    </div>
  )
}

export default Tags
