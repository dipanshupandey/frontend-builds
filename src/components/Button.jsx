import React from 'react'
import clsx from 'clsx'
const Button = ({id,title,leftIcon,containerClass}) => {
  return (
    <button id={id} className={clsx(
        "flex z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black",
        containerClass
      ) }>
        {leftIcon}
        <span className=" overflow-hidden font-general text-xs uppercase">
        <div className="">
          {title}
        </div>
    </span>
    </button>
  )
}

export default Button