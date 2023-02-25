import React from "react";

const Contact = () => {
  return (
      <>
        <div className='bg-primary h-20 w-screen mt-20 justify-center flex items-center'>
            <h1 className='font-bold text-3xl text-white'>ติดต่อเรา</h1>
        </div>
        <div className='mb-28 mt-10 mx-4 md:mx-20 md:flex gap-4'>
          <img className="w-full md:w-2/6 h-100 rounded-md mb-4" src="/banner/banner.jpeg" alt="banner" />
          <iframe
              className='rounded-md w-full w-4/5'
              width="80%" height="242"
                  src="https://maps.google.com/maps?q=13.754700194623059, 100.65184277531684&t=&z=17&ie=UTF8&iwloc=&output=embed"
                  frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" />
        </div>
      </>
  );
};

export default Contact;
