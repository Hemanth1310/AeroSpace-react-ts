import React, { useEffect, useState } from 'react'
import type {data} from '../types'
import { generateProbeData } from '../data/data'
type Props = {}

const Status = (props: Props) => {
    const [data,setData] = useState<data>([])
    const [currentPage,setCurrrentPage] = useState<number>(1)
    const ItemsPerPage = 10;
    const TotalPages = Math.ceil(data.length/10)
    const StartIndex = (currentPage-1)*ItemsPerPage;
    const endIndex = StartIndex+ItemsPerPage
    const modifiedArray = data.slice(StartIndex,endIndex)  as data

    const onSpecificPage=(index:number)=>{
        setCurrrentPage(index)
    }
    const onNextPage=()=>{
        setCurrrentPage(prev=>prev+1)
    }
    const onPrevPage=()=>{
        setCurrrentPage(prev=>prev-1)
    }
    useEffect(()=>{
        const dataEntries = generateProbeData(200)
        setData(dataEntries)
    },[])
  return (
    <div className='container bg-blue flex flex-col items-center justify-center'>
            <h1 className='text-2xl mt-10 mb-10'>Status of Space Programs</h1>
            <table className="table-auto border-collapse w-full text-left">
                <thead>
                    <tr className='border-b-2 border-gray-300 bg-gray-100'>
                    <th className='p-4 font-semibold text-gray-700'>Name</th>
                    <th className='p-4 font-semibold text-gray-700'>Destination</th>
                    <th className='p-4 font-semibold text-gray-700'>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {modifiedArray?.map(value=><tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-4">{value.name}</td>
                    <td className="p-4">{value.destination}</td>
                    <td className="p-4">{value.status}</td>
                    </tr>)}
                </tbody>
            </table>
            <div className='flex gap-4 mt-10'>
                <button className='hover:cursor-pointer' onClick={onPrevPage}>Previous</button>
                <div className='flex gap-4'>
                    {Array.from(Array(TotalPages)).map((_,index)=>
                    <button className={`h-10 w-10 border-2 ${index+1===currentPage && 'bg-gray-950 text-white'}`} onClick={()=>onSpecificPage(index+1)}>{index+1}</button>)}
                </div>
                <button className='hover:cursor-pointer' onClick={onNextPage}>Next</button>
            </div>
    </div>
  )
}

export default Status