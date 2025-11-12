import React ,{useState, useEffect}from 'react'
import { generateProbeData } from '../data/data'
import type { data } from '../types'

type Props = {}

const Dashboard = (props: Props) => {

      const [data,setData] = useState<data>([])
    
      useEffect(()=>{
        const arr = generateProbeData(200)
        setData(arr)
      },[])
  return (
    <div className='container bg-blue flex flex-col items-center justify-center'>
            <h1 className='text-2xl mt-10 mb-4'>Data Representing Space Programs</h1>
            <table className="table-auto border-collapse w-full text-left">
                <thead>
                    <tr className='border-b-2 border-gray-300 bg-gray-100'>
                    <th className='p-4 font-semibold text-gray-700'>Name</th>
                    <th className='p-4 font-semibold text-gray-700'>Destination</th>
                    <th className='p-4 font-semibold text-gray-700'>Launch Date</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map(value=><tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-4">{value.name}</td>
                    <td className="p-4">{value.destination}</td>
                    <td className="p-4">{value.launch_date}</td>
                    </tr>)}
                </tbody>
                </table>
    </div>
  )
}

export default Dashboard