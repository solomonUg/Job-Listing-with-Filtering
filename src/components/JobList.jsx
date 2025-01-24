import React from 'react'
import JobItem from './JobItem'

export default function JobList({jobData}) {
    console.log(jobData)

  return (
    
    <div className='w-[80%] flex flex-col gap-4 mt-12'>
            {jobData.map((job)=><h1><JobItem job={job} /></h1>)}
    </div>
  )
}
