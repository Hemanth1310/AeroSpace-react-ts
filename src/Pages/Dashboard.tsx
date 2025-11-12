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
    <div>
            <div className='w-screen bg-blue flex flex-col items-center justify-center'>
            <h1>AeroSpace Data</h1>
            {data?.map(value=><div>{value.name}</div>)}
    </div>
    </div>
  )
}

export default Dashboard