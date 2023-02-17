import React from 'react';
import img from '../../assets/meeting.jpg';


const Recruiting = () => {
    return (
    <div>

<div className='flex justify-center m-20'>
<div className="card w-full flex justify-between gap-20 bg-[#f2f8ff] p-20 rounded">
  <div className="card-body">
    <h2 className="card-title text-primary text-3xl font-bold font-sans">Recruiting?</h2>
    <p className='text-[15px] my-2'>Advertise your jobs to millions of monthly users and search 15.8 million <br/>
CVs in our database.</p>
    <div className="card-actions justify-end">
     <div>
     <button className="btn btn-secondary my-2 mr-4 text-white">Start Recruiting Now</button>
     </div>
    </div>
  </div>
  <div className="card-body">
    <img width={150} src={img} alt="" />
  </div>
</div>
</div>
</div>
    );
};

export default Recruiting;