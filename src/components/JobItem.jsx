import React from 'react'

function JobItem({job}) {
  return (
    <div className={`w-full rounded-md h-[100px] bg-white shadow-lg shadow-[#c4e5e6] flex justify-center items-center ${job.featured? "border-l-4 border-l-[#64babb] p-4 ": ""} `}>
        <div className='w-full  flex justify-between'>
            <div className='flex gap-4 ml-6 '>
                <div className='w-14 h-14 rounded-full bg-slate-400'>
                    <img src={job.logo} alt="logo" />
                </div>
                <div className='flex flex-col justify-between'>
                    <div className='flex text-xs font-semibold text-[#64babb] gap-2 justify-start items-center'>
                        <h2>{job.company}</h2>
                        {job.new? <span className='text-white text-[9px] rounded-lg font-semibold bg-[#64babb] px-2 text-center'>NEW!</span>:" " }
                        {job.featured?<span className='text-white text-[9px] rounded-lg font-semibold bg-gray-700 px-2 text-center'>FEATURED!</span>: ""}

            
                    </div>
                    <div>
                        <h2 className='text-sm font-semibold text-gray-800'>{job.position}</h2>
                    </div>
                    <ul className='flex text-xs text-gray-500 list-disc gap-4'>
                        <span className='list-none'><li>{job.postedAt}</li></span>
                        <li>{job.contract}</li>
                        <li>{job.location}</li>
                    </ul>
                </div>
            </div>

            <div className=' flex text-xs w-[50%] items-center mr-6 text-[#64babb] font-bold gap-6 justify-end' >
                <div className='bg-[#edf6f7] p-1 rounded-md'>{job.role}</div>
                {job.languages.map((lang)=><div className='bg-[#edf6f7] p-1 rounded-md'>{lang}</div>)}
                {job.tools.map((tool)=><div className='bg-[#edf6f7] p-1 rounded-md'>{tool}</div>)}
            </div>
        </div>
    </div>
  )
}

export default JobItem