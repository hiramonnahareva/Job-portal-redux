import React from 'react';

const Footer = () => {
  let date =  new Date().getFullYear();
    return (
        <div className="relative ">
     <footer className="footer grid grid-cols-3 py-20 lg:px-[144px] px-10 gap-3 bg-slate-900 text-white">
  <div className="mr-10">
    <a className="text-[17px] font-semibold items-end gap-2 flex mb-4" href="">  About Jobs</a>
    {/* <span className="footer-title">Legal</span>  */}
    <a className="link no-underline">Terms of use</a> 
    <a className="link no-underline text-gray-400 block">Aorem ipsum dolor sit amet elit sed lum tempor incididunt ut labore el dolore alg minim veniam quis nostrud lorem psum dolor sit amet sed incididunt.</a> 
  </div> 
  <div className="mr-10">
    <a className="text-[17px] font-semibold items-end gap-2 flex mb-4" href="">Keep In Touch</a>

    <a className="link no-underline text-gray-400 block"> 38-2 Hilton Street, California, USA</a> 
    <a className="link no-underline text-gray-400 block">(+01) 123 456 7890</a>
    <a className="link no-underline text-gray-400 block">info@dvents.org</a>
    <a className="link no-underline text-gray-400 block"> Mon - Fri 9.00 am - 6.00 pm</a>
  </div> 
 <div className="mr-10">
    <a className="text-[17px] font-semibold items-end gap-2 flex mb-4" href=""> Quick Link s</a>
    <div className="">
    <a className="link no-underline hover:text-primary text-white flex items-center gap-1">Our Services</a>
    <a className="link no-underline hover:text-primary text-white flex items-center gap-1">Our Team</a>
    <a className="link no-underline hover:text-primary text-white flex items-center gap-1">About Dvents</a>
 
  </div> 
  </div> 
</footer>
<footer className="footer lg:px-[144px] px-10 py-4 border-t bg-gray-900 text-white border-gray-800">
  <div className="md:place-self-center md:justify-self-end">
    <div className="grid grid-flow-col gap-4">
      <a className='text-center'>copyright {date}</a>
    </div>
  </div>
</footer>
    </div>
    );
};

export default Footer;