import React from "react"
import {useRouter} from 'next/router'

interface INav {
  children: React.ReactNode
  href: string
}

const Nav = ({children, href}: INav): React.ReactElement => {
  const {push, route} = useRouter()

  const handlerClick = () => push(href)
  return (
    <button
      className={`px-3 py-2
        ${route === href ? 'text-black select-none border-b border-violet-500' : 'text-gray-400'}
      `}
      disabled={route === href}
      onClick={handlerClick}
    >
      {children}
    </button>
  )
}

export default Nav
