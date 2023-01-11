import React from "react";
import { useNavigate } from "react-router-dom";
import JobCard from "../components/reusable/JobCard";
import { useGetJobsQuery } from "../reduxToolkitAll/features/job/jobapi";

const Jobs = () => {
  const navigate = useNavigate();
  const {data, isLoading, isError} = useGetJobsQuery();
  return (
    <div className='pt-14 px-20'>
      <div className='bg-primary/10 p-5 rounded-2xl'>
        <h1 className='font-semibold text-xl'>Find Jobs</h1>
      </div>
      <div className='grid grid-cols-2 gap-5 mt-5'>
    {
      data?.data?.map(data=>
        <JobCard jobData={data} />
      )
    }
      </div>
    </div>
  );
};

export default Jobs;
