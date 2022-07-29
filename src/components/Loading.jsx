import React, {useState} from 'react'
import { VscLoading } from "react-icons/vsc";

const Loading = () => {
    const [loading, setLoading] = useState(true);
    document.addEventListener('DOMContentLoaded', () => {
        setLoading(false);
    })
  return (
    <div className='overflow-hidden flex items-center justify-center bg-black h-screen w-full z-50 fixed top-0 left-0 duration-1000' style={!loading ? {height: '0px'} : null}><VscLoading className='text-8xl fill-white animate-spin' /></div>
  )
}

export default Loading