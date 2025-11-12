import React, { useEffect, useState } from 'react'
import type {data} from '../types'
import { generateProbeData } from '../data/data'
type Props = {}

const Status = (props: Props) => {
    const [data,setData] = useState<data>([])

    useEffect(()=>{
        const dataEntries = generateProbeData(200)
        setData(dataEntries)
    },[])
  return (
    <div className='container bg-blue flex flex-col items-center justify-center'>
            <h1 className='text-2xl mt-10 mb-4'>Status of Space Programs</h1>
            <table className="table-auto border-collapse w-full text-left">
                <thead>
                    <tr className='border-b-2 border-gray-300 bg-gray-100'>
                    <th className='p-4 font-semibold text-gray-700'>Name</th>
                    <th className='p-4 font-semibold text-gray-700'>Destination</th>
                    <th className='p-4 font-semibold text-gray-700'>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map(value=><tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-4">{value.name}</td>
                    <td className="p-4">{value.destination}</td>
                    <td className="p-4">{value.status}</td>
                    </tr>)}
                </tbody>
                </table>
    </div>
  )
}

export default Status