import React from 'react'

// Img 1 and Img 2
import alexandra from '../assets/img/Img-1.jpg';
import alexandra2 from '../assets/img/Img-2.jpg';

// Img 3 and Img 4
import boys from '../assets/img/Img-3.jpg';
import boys2 from '../assets/img/Img-4.jpg';

// Pic1, Pic2, Pic3
import Pic1 from '../assets/img/pic1.jpg';
import Pic2 from '../assets/img/pic2.png';
import Pic3 from '../assets/img/pic3.jpg';


// Components 
import NavBar from '../components/NavBar'

export default function AboutPage() {
  return (
    <div className='about-us'>
        <NavBar buttons={true} active={'about-us'} />
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 mt-20">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-4/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">About Us</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
                </div>
                <div className="w-full lg:w-3/12 ">
                    <img className="w-full h-full" src={alexandra2} alt="A group of People" />
                </div>
                <div className="w-full lg:w-3/12 ">
                    <img className="w-full h-full" src={alexandra} alt="A group of People" />
                </div>
            </div>

            <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 mt-20">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-3/12 ">
                    <img className="w-full h-full" src={boys} alt="A group of People" />
                </div>
                <div className="w-full lg:w-3/12 ">
                    <img className="w-full h-full" src={boys2} alt="A group of People" />
                </div>
                <div className="w-full lg:w-4/12 flex flex-col justify-center">
                    <p className="font-normal text-base leading-6 text-gray-600 ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our </p>
                </div>
            </div>

        </div>

            <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Our Story</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
                </div>
                <div className="w-full lg:w-8/12 lg:pt-8">
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src={Pic1} alt="Alexa featured Img" />
                            <img className="md:hidden block" src={Pic1} alt="Alexa featured Img" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Nicolas Garcia</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src={Pic2} alt="Olivia featured Img" />
                            <img className="md:hidden block" src={Pic2} alt="Olivia featured Img" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Tomas Lange</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src={Pic3} alt="Liam featued Img" />
                            <img className="md:hidden block" src={Pic3} alt="Liam featued Img" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Alexandra milea</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

   
    </div>
    
  )
}
