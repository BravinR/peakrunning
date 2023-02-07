import React from 'react';
import Hands from '../assets/hands.png';
import about from '../assets/information.png';

const Join = () => {
  return (
    <div>
        <div className='py-8 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[200px] mx-auto my-4' src={Hands} alt='/' />
                <div className='flex flex-col justify-center'>
                <p className='text-[#3e4e99] font-bold '>Team</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Run With Us</h1>
                <p>
                Welcome to Peak Running Elite, where runners of all levels and abilities come together to support,
                 encourage and challenge each other. Join our community and experience the power of running with a 
                supportive and inclusive group.
                </p>
                <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
                </div>
            </div>
        </div>
        <div className=''>
            <div className=''>
                <img className="w-[200px] mx-auto" src={about} alt="" />
            </div>
            <div className='py-8 px-4'>
                <h1 className='md:ml-28 md:text-4xl sm:text-3xl text-2xl font-bold py-2'>About Peak Running Elite</h1>
                <p className=''>
                The peak running elite is a professional team based in Colorado Springs Colorado.
                Launched late 2021, the team has already reached good heights with members making world 
                teams and setting personal best.We believe in integrity and hard work to achieve our goals 
                and team progress. Everyone deserves chances and we are providing that platform through 
                dedicated coaches and partners
                </p>
            </div>
            
        </div>
    </div>
  );
};

export default Join;