import React from 'react'

const Layouts = ({children}: {children: React.ReactNode}) => {
  return (
    <main className='auth'>{children}</main>
  )
}

export default Layouts