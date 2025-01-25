import React, { useState } from 'react';
import jobData from '../../data/data.json'
import JobList from './JobList';

export default function Jobs() {

  
  return (
    <div className='w-full h-full flex justify-center '>
        <JobList jobData={jobData} />
    </div>
  )
}
