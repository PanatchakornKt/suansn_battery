import React from "react";

const index = () => {

  return (
    <>
      <title>สวนสน แบตเตอรี่</title>
            <img className='mt-20 w-full md:block hidden' src='thumnail-desktop.png'/>
        <div className='w-full mt-18 h-10 bg-primary-nav block md:hidden' />
            <img className='relative w-full block md:hidden' src='thumnail-mobile.png'/>
        <p className='block md:hidden absolute z-4 top-80 left-8 pt-6'><span className='text-red-600 font-bold text-4xl'>สวนสน </span><span className='text-white font-bold text-4xl'>แบตเเตอรี่</span>  <span className='text-white text-xl font-bold'>    เดลิเวอรี่</span></p>
        <p className='absolute z-4 pt-4 top-96 left-7 text-xl block md:hidden'><span className='text-white'>รับเปลี่ยนแบตเตอรี่รถยนต์ เช็คไดชาร์จ</span> <span className='text-yellow-400'>ฟรี</span></p>
        <p className='absolute z-4 pt-12 top-96 left-2 text-xl block md:hidden'><span className='text-white'>รับเปลี่ยนนอกสถานที่ระยะทางไม่เกิน 3 กิโล</span> <span className='text-yellow-400'>ฟรี</span></p>
        <p className='absolute z-4 pt-20 top-96 left-16 text-xl block md:hidden'><span className='text-white'>พร้อมติดตั้งภายในเวลา</span> <span className='text-yellow-400'> 30 นาที</span></p>
        <p className='absolute z-4 pt-28 top-96 left-20 text-xl block md:hidden'><span className='text-white'>ทั้งในกรุงเทพและปริมณฑล</span></p>
       <div className='flex absolute z-4 pt-40 top-96 left-12  block md:hidden'>
           <div>
               <a href="#" className="flex gap-4 items-center">
                   <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="currentColor"
                        className="w-6 h-6" viewBox="0 0 16 16" id="IconChangeColor">
                       <path fillRule="evenodd"
                             d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                             id="mainIconPathAttribute" fill="#fffff" />
                   </svg>
                   <span className='text-xl text-white'>085-319-1185</span>
               </a>
           </div>
           <div className='ml-4'>
               <a href="https://liff.line.me/1645278921-kWRPP32q/?accountId=585okmvs" target='_blank' className="flex gap-4 items-center">
                   <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="currentColor"
                        className="w-5 h-5" viewBox="0 0 16 16" id="IconChangeColor">
                       <path
                           d="M8 0c4.411 0 8 2.912 8 6.492 0 1.433-.555 2.723-1.715 3.994-1.678 1.932-5.431 4.285-6.285 4.645-.83.35-.734-.197-.696-.413l.003-.018.114-.685c.027-.204.055-.521-.026-.723-.09-.223-.444-.339-.704-.395C2.846 12.39 0 9.701 0 6.492 0 2.912 3.59 0 8 0ZM5.022 7.686H3.497V4.918a.156.156 0 0 0-.155-.156H2.78a.156.156 0 0 0-.156.156v3.486c0 .041.017.08.044.107v.001l.002.002.002.002a.154.154 0 0 0 .108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157Zm.791-2.924a.156.156 0 0 0-.156.156v3.486c0 .086.07.155.156.155h.562c.086 0 .155-.07.155-.155V4.918a.156.156 0 0 0-.155-.156h-.562Zm3.863 0a.156.156 0 0 0-.156.156v2.07L7.923 4.832a.17.17 0 0 0-.013-.015v-.001a.139.139 0 0 0-.01-.01l-.003-.003a.092.092 0 0 0-.011-.009h-.001L7.88 4.79l-.003-.002a.029.029 0 0 0-.005-.003l-.008-.005h-.002l-.003-.002-.01-.004-.004-.002a.093.093 0 0 0-.01-.003h-.002l-.003-.001-.009-.002h-.006l-.003-.001h-.004l-.002-.001h-.574a.156.156 0 0 0-.156.155v3.486c0 .086.07.155.156.155h.56c.087 0 .157-.07.157-.155v-2.07l1.6 2.16a.154.154 0 0 0 .039.038l.001.001.01.006.004.002a.066.066 0 0 0 .008.004l.007.003.005.002a.168.168 0 0 0 .01.003h.003a.155.155 0 0 0 .04.006h.56c.087 0 .157-.07.157-.155V4.918a.156.156 0 0 0-.156-.156h-.561Zm3.815.717v-.56a.156.156 0 0 0-.155-.157h-2.242a.155.155 0 0 0-.108.044h-.001l-.001.002-.002.003a.155.155 0 0 0-.044.107v3.486c0 .041.017.08.044.107l.002.003.002.002a.155.155 0 0 0 .108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156Z"
                           id="mainIconPathAttribute" fill="green" />
                   </svg>
                   <span className='text-xl text-white'>085-319-1185</span>
               </a>
           </div>
       </div>
        <div className='mx-4 md:mx-20 mt-20'>
            {/*<div className='w-full'>*/}
                {/*<div>*/}

                    {/*<h1 className='md:hidden block text-xl font-bold'>*/}
                    {/*    <span className='text-red-500'>สวนสน</span>แบตเตอรี่ บริการเปลี่ยนนอกสถานที่ พร้อมให้คำปรึกษา ฟรี*/}
                    {/*</h1>*/}
                    {/*<h1 className='md:block hidden text-4xl font-bold mt-10'>*/}
                    {/*    <span className='text-red-500'>สวนสน</span>แบตเตอรี่*/}
                    {/*</h1>*/}
                    {/*<h1 className='md:block hidden text-4xl font-bold mt-4'>*/}
                    {/*    บริการเปลี่ยนนอกสถานที่*/}
                    {/*</h1>*/}
                    {/*<h1 className='md:block hidden text-4xl font-bold mt-4'>*/}
                    {/*    พร้อมให้คำปรึกษา ฟรี*/}
                    {/*</h1>*/}
                    {/*<a href="#" className="mt-10 md:mt-32 mb-10 text-xl font-bold text-gray-900 hover:text-gray-900 flex gap-4 items-center">*/}
                    {/*    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="currentColor"*/}
                    {/*         className="w-5 h-5" viewBox="0 0 16 16" id="IconChangeColor">*/}
                    {/*        <path fillRule="evenodd"*/}
                    {/*              d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"*/}
                    {/*              id="mainIconPathAttribute" fill="#212121" />*/}
                    {/*    </svg>*/}
                    {/*    <span>085-319-1185</span>*/}
                    {/*</a>*/}
                {/*</div>*/}
                {/*<img className='h-40 md:h-80' src='/image2.png' />*/}
            {/*</div>*/}
            {/*<div className='h-0.5 w-full bg-primary mb-10'/>*/}
            <div className='flex flex-col gap-2 md:gap-4 -mt-10'>
                <h1 className='text-2xl md:text-4xl font-bold text-primary'>แบตเตอรี่รถยนต์  มืออาชีพ</h1>
                <h1 className='text-2xl md:text-4xl font-bold text-primary'>ต้องสวนสนแบตเตอรี่</h1>
                <h1 className='text-xl md:text-2xl'>ร้านแบตเตอรี่ สวนสนแบตเตอรี่ บริการ ติดตั้ง ขาย จำหน่าย แบตเตอรี่รถยนต์ เช็คไดชาร์จ ไดสตาร์ทฟรี ทั้งในและนอกสถานที่ มั่นใจได้ 100% ว่าลูกค้าจะได้ แบตเตอรี่รถยนต์ คุณภาพสูงสุด
                </h1>
                <h1 className='text-xl text-red-500 underline'>ไม่มีหลอกขายเด็ดขาด!!</h1>
            </div>
            <img className='h-100 w-full' src='/image3.png'/>
            {/*<div className='flex flex-col md:flex-row md:justify-between'>*/}
                {/*<div>*/}
                {/*    <h1 className='text-2xl md:text-4xl font-bold mb-6 text-primary'>รายการสินค้า และราคา</h1>*/}
                {/*    <p className='mb-4 text-xl'>ราคาแบตเตอรี่ รถเก๋ง เริ่มต้น <span className='text-red-500 font-bold'>1, 500 บาท</span></p>*/}
                {/*    <p className='mb-4 text-xl'>ราคาแบตเตอรี่ กระบะ เริ่มต้น <span className='text-red-500 font-bold'>1, 950 บาท </span></p>*/}
                {/*    <p className='mb-4 text-xl'>ราคาแบตเตอรี่ รถยุโรป เริ่มต้น <span className='text-red-500 font-bold'>2, 300 บาท </span></p>*/}
                {/*    <p className='mb-4 text-xl'>ราคาแบตเตอรี่ รถบรรทุก เริ่มต้น <span className='text-red-500 font-bold'>2, 400 บาท </span></p>*/}
                {/*    <p className='mb-4 md:mb-0 md:mt-80 text-lg md:text-2xl'>อาจมีการเปลี่ยนแปลงบางรายการกรุณาโทรสอบถามหรือ LINE มาสอบถามราคา*/}
                {/*    </p>*/}
                {/*</div>*/}
                {/*<img className='md:h-100 md:w-80 w-full' src='/image7.jpg' />*/}
            {/*</div>*/}
            <div className='md:block hidden h-0.5 w-full bg-primary mt-10'/>
            <div className='md:hidden block text-primary mt-10 text-2xl md:text-5xl font-bold'>มั่นใจในการรับประกัน บริการหลังการขาย ไม่ทอดทิ้งลูกค้า 100%</div>
            <div className='md:block hidden text-primary md:mt-10 text-2xl md:text-5xl font-bold'>มั่นใจในการรับประกัน</div>
            <div className='md:block hidden text-primary md:mt-10 text-2xl md:text-5xl font-bold'>บริการหลังการขาย</div>
            <div className='md:block hidden text-primary md:mt-10 text-2xl md:text-5xl font-bold'>ไม่ทอดทิ้งลูกค้า 100%</div>
            <div className='flex justify-between mt-10'>
                <div className='md:block hidden'>
                    <p className='text-3xl font-bold'><span className='text-red-500'>สวนสน</span> แบตเตอรี่เดลิเวอรี่</p>
                    <p className='mt-10 text-xl'>เราคือผู้ให้บริการ รับเปลี่ยนแบตเตอรี่รถยนต์นอกสถานที่ทั่วกรุงเทพ และปริมณฑล เรามีทีมช่างมากประสบการณ์พร้อมเปลี่ยนแบตเตอรี่รถยนต์หรือรถจักรยานยนต์ทุกยี่ห้อไม่ว่ารถยนต์หรือรถจักรยานยนต์ของท่านจะประสบปัญหารถดับหรือแบตหมดกลางทาง, แบตเสื่อมสภาพ</p>
                    <p className='mt-10 text-xl'>เรามีแบตเตอรี่พร้อมเปลี่ยนรถยนต์ทุกประเภท บริการจัดส่งพร้อมติดตั้งภายใน 30นาที</p>
                    <p className='text-xl'>แบตของเราทุกลูกมีรับประกันหลังการติดตั้ง</p>
                </div>
                <img className='md:block hidden' src='/image4.png'/>
            </div>
            <p className='block md:hidden text-3xl font-bold mt-4'><span className='text-red-500'>สวนสน</span> แบตเตอรี่เดลิเวอรี่</p>
            <p className='block md:hidden mt-4 text-xl'>เราคือผู้ให้บริการ รับเปลี่ยนแบตเตอรี่รถยนต์นอกสถานที่ทั่วกรุงเทพ และปริมณฑล เรามีทีมช่างมากประสบการณ์พร้อมเปลี่ยนแบตเตอรี่รถยนต์หรือรถจักรยานยนต์ทุกยี่ห้อไม่ว่ารถยนต์หรือรถจักรยานยนต์ของท่านจะประสบปัญหารถดับหรือแบตหมดกลางทาง, แบตเสื่อมสภาพ</p>
            <p className='block md:hidden mt-4 text-xl mb-6'>เรามีแบตเตอรี่พร้อมเปลี่ยนรถยนต์ทุกประเภท บริการจัดส่งพร้อมติดตั้งภายใน 30นาที แบตของเราทุกลูกมีรับประกันหลังการติดตั้ง</p>
            <img className='block md:hidden h-full w-full mt-4' src='/image4.png'/>
        </div>
    </>
  );
};

export default index;
