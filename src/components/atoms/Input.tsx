import React from 'react';
import {ReactNode} from'react'

interface InputInterface{
  type:string,
  placeholder?:string,
  label:string,
  defaultValue?:string,
  onChange?:any ;
  icon?:ReactNode
  className?:any
}

const Input = ({type,placeholder,label,icon,onChange,defaultValue, className}:InputInterface) => {
  return (
        <div className="flex items-center justify-between ">
            <input onChange={onChange} id={label} name={label} type={type} defaultValue={defaultValue} className={"w-full outline-none bg-white text-black h-10 pl-3 rounded-md font-normal bg-clip-padding transition ease-in-out  focus:outline-none"||className} placeholder={placeholder} />
        </div>
  )
}

export default Input