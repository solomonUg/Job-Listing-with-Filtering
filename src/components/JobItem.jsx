
function JobItem({job, setCategory}) {

    function handleClick (jobProperty) {
        setCategory(prevCategory => 
            prevCategory.includes(jobProperty) 
                ? prevCategory 
                : [...prevCategory, jobProperty]
        );
    }
    
  return (
    <div className={`w-full rounded-md h-[250px] md:h-[100px] bg-white shadow-lg shadow-[#c4e5e6] relative  flex justify-center items-center ${job.featured? "border-l-4 border-l-[#64babb] pt-4 md:pt-0 md:p-4": "py-4"} `}>
        <div className='w-full h-[90%] flex flex-col md:flex-row md:justify-between '>
            <div className='flex  md:gap-4 md:ml-6'>
                <div className={`w-14 h-14 rounded-full absolute -top-7 left-3  md:relative ${job.featured? " md:-left-4 md:top-4 ":" md:top-[2px] md:left-0"} `}>
                    <img src={job.logo} alt="logo" />
                </div>
                <div className={`flex flex-col gap-4 md:gap-0 justify-between ${job.featured? "my-4": "my-0"} md:py-0 ml-4 md:ml-0 `}>
                    <div className='flex text-xs font-semibold text-[#64babb] gap-2 justify-start items-center'>
                        <h2>{job.company}</h2>
                        {job.new? <span className='text-white text-[9px] rounded-lg font-semibold bg-[#64babb] px-2 text-center'>NEW!</span>:" " }
                        {job.featured?<span className='text-white text-[9px] rounded-lg font-semibold bg-gray-700 px-2 text-center'>FEATURED!</span>: ""}

            
                    </div>
                    <div>
                        <h2 className='text-sm font-semibold text-gray-800'>{job.position}</h2>
                    </div>
                    <ul className='flex text-xs text-gray-500 list-disc gap-4'>
                        <span className='list-none' ><li>{job.postedAt}</li></span>
                        <li>{job.contract}</li>
                        <li>{job.location}</li>
                    </ul>
                </div>
            </div>

            <div className='flex flex-wrap  md:text-xs w-[80%] md:w-[50%] items-center mr-6 text-[#64babb] font-bold gap-6 ml-4  md:ml-0 md:justify-end' >
                <div className='bg-[#edf6f7] p-1 rounded-md cursor-pointer hover:bg-[#64babb] hover:text-gray-50' onClick={()=>handleClick(job.role)}>{job.role}</div>
                {job.languages.map((lang)=><div className='bg-[#edf6f7] hover:bg-[#64babb] hover:text-gray-50 p-1 rounded-md cursor-pointer' onClick={()=>handleClick(lang)}>{lang}</div>)}
                {job.tools.map((tool)=><div className='bg-[#edf6f7] hover:bg-[#64babb] hover:text-gray-50 p-1 rounded-md cursor-pointer' onClick={()=>handleClick(tool)}>{tool}</div>)}
            </div>
        </div>
    </div>
  )
}

export default JobItem