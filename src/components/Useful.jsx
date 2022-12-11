import React from 'react'

const Useful = (props) => {
  return (
    <div >
        <div className='text-[.7rem] font-normal text-white/50'>// {props.short}</div>
        <a href={props.link} className='hover:bg-blue-400 hover:text-white hover:rounded text-blue-400  w-full cursor-pointer '>
          <span className='text-white capitalize'>"{props.category}" {'=>'}</span>
          <span className='capitalize'> "{props.element}"</span>
          <span className='text-white'>,</span>
        </a>
    </div>
  )
}

export default Useful