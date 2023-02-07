import React from 'react';
import Hands from '../assets/hands.png';
import about from '../assets/information.png';

const Join = () => {
  return (
    <div>
        <div className='w-full bg-white py-16 px-4 mt-8'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[200px] mx-auto my-4' src={Hands} alt='/' />
                <div className='flex flex-col justify-center'>
                <p className='text-[#3e4e99] font-bold '>Team</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Join The Team That Wins</h1>
                <p>
                    We are commited to helping you succeed in your running goals.
                    With our rigorous training program, group exercises, one on one classes
                    and state-of-the-art fitness team, you will find exactly what you are looking for.
                </p>
                <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
                </div>
            </div>
        </div>
        <div className='flex'>
            <div>
                <h1 className='md:ml-28 md:text-4xl sm:text-3xl text-2xl font-bold py-2'>About Peak Running Elite</h1>
                <p className='w-96 ml-28 pb-8'>
                The peak running elite is a professional team based in Colorado Springs Colorado.
                Launched late 2021, the team has already reached good heights with members making world 
                teams and setting personal best.We believe in integrity and hard work to achieve our goals 
                and team progress. Everyone deserves chances and we are providing that platform through 
                dedicated coaches and partners
                </p>
            </div>
            <div>
                <img className="w-[400px] mx-auto my-4 pl-32" src={about} alt="" />
            </div>
        </div>
    </div>
  );
};

export default Join;