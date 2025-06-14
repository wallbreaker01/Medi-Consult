import React from 'react'

export default function Usermsg(props) {
  return (
    <div className='flex justify-end items-center w-full '>
        <div className="chat chat-end ">
            <div className="chat-bubble bg-slate-300  ">{props.msg}</div>
        </div>
        </div>
  )
}