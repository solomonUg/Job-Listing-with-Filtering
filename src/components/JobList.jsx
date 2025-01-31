import React from "react";
import JobItem from "./JobItem";
import { useState } from "react";

export default function JobList({ jobData }) {
  const [category, setCategory] = useState([]);


  function handleDelete (cat) {
    setCategory(category.filter((item)=>cat!==item))
  }
console.log(category)

function handleClear (){
  setCategory([])
}

const filteredJobs = category.length == 0
?  jobData // Show all jobs if no categories are selected

: jobData.filter((job) => {
  return category.every((cat) =>
    job.role === cat || // Check if the category matches job.role
    job.languages.includes(cat) || // Check if the category is in job.languages
    job.tools.includes(cat) // Check if the category is in job.tools
  );
})



  return (
    <div className="w-[80%] flex flex-col gap-12 mt-12 relative">
      {/* container element for hold selected job categories */}
      <div className={`bg-slate-50 ${category ==""? "hidden": "flex "} items-center justify-center shadow-md shadow-[#c4e5e6] w-full h-[45px] rounded-md absolute -top-[70px] pr-2`}>
        <div className=" justify-between flex w-[90%] text-xs font-bold text-[#64babb]">
          <div className="flex gap-2">
            {category.map((cat) => (
              <div>
                <span className="bg-[#edf6f7] p-[7px] rounded-l-[4px]">
                  {cat}
                </span>
                <span 
                onClick={()=>handleDelete(cat)}
                className="bg-[#64babb] cursor-pointer hover:bg-gray-700 text-white p-[7px] rounded-r-[4px]" >
                  x
                </span>
              </div>
            ))}
          </div>
          <div
          onClick={()=>handleClear()}
          className="cursor-pointer hover:underline flex items-center">
            Clear
          </div>
        </div>
      </div>
            
      {filteredJobs.map((job) => (
        <h1>
          <JobItem key={job.id} job={job} category={category} setCategory={setCategory} />
        </h1>
      ))}
    </div>
  );
}
