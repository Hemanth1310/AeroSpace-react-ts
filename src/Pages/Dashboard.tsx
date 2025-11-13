import React ,{useState, useEffect}from 'react'
import { generateProbeData } from '../data/data'
import type { data } from '../types'

type Props = {}

const Dashboard = (props: Props) => {

    const [data,setData] = useState<data>([])
    const [currentPage,setCurrrentPage] = useState<number>(1)   
    const totolPages = Math.ceil(data.length/10) 
    const ItemsPerPage= 10
    const startIndex = (currentPage-1)*ItemsPerPage
    const endIndex = startIndex + ItemsPerPage
    const modifiedArray :data = data.slice(startIndex,endIndex)

    const onSpecificPage = (currentIndex:number)=>{
        setCurrrentPage(currentIndex)
    }

     const onNextPage=()=>{
        setCurrrentPage(prev=>prev+1)
    }
    const onPrevPage=()=>{
        setCurrrentPage(prev=>prev-1)
    }
      useEffect(()=>{
        const arr = generateProbeData(201)
        setData(arr)
      },[])
    
      const onRender = ()=>{
        return(<tbody>{modifiedArray?.map(value=><tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-4">{value.name}</td>
                    <td className="p-4">{value.destination}</td>
                    <td className="p-4">{value.launch_date}</td>
        </tr>)}</tbody>)
      }
    
  return (
    <div className='container bg-blue flex flex-col items-center justify-center'>
            <h1 className='text-2xl mt-10 mb-10'>Data Representing Space Programs</h1>
            <table className="table-auto border-collapse w-full text-left ">
                <thead>
                    <tr className='border-b-2 border-gray-300 bg-gray-100'>
                    <th className='p-4 font-semibold text-gray-700'>Name</th>
                    <th className='p-4 font-semibold text-gray-700'>Destination</th>
                    <th className='p-4 font-semibold text-gray-700'>Launch Date</th>
                    </tr>
                </thead>
                
                    {onRender()}

            </table>
            <div className='flex gap-4 mt-10'>
                <button className='hover:cursor-pointer' onClick={onPrevPage}>Previous</button>
                <div className='flex gap-4'>
                    {Array.from(Array(totolPages)).map((_,index)=>
                    <button className={`h-10 w-10 border-2 ${index+1===currentPage && 'bg-gray-950 text-white'}`} onClick={()=>onSpecificPage(index+1)}>{index+1}</button>)}
                </div>
                <button className='hover:cursor-pointer' onClick={onNextPage}>Next</button>
            </div>
    </div>
  )
}

export default Dashboard