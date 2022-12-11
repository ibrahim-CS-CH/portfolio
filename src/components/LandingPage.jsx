import React from 'react'
import Useful from './Useful'
import Array from './Array'

const LandingPage = () => {
  return (
        <div className='flex justify-around pt-10'>
            <div className=' bg-black opacity-80 text-white rounded-xl px-2 h-fit pb-2'>
                <h1 className='text-xl py-1 first-letter:uppercase'>
                    i'm Ibrahim adel, Software Engineer and a Full-Stack-Web Developer.
                </h1>
                <p className='first-letter:uppercase'>
                    i graduated from the Faculty Of Science,<span className=' font-bold text-xl'>Computer Science Department</span>.
                </p>
                <p className='first-letter:uppercase'>
                    studied a Couple of Courses on FreeCodeCamp and <span className=' font-bold text-xl'>ITI</span> to Learn Web Development Technologies.
                </p>
                <p className='first-letter:uppercase'>
                    i gained experience in <span className=' font-bold text-xl'>ReactJS</span>, JavaScript, PHP, MySQL, <span className=' font-bold text-xl'>Tailwind CSS</span>, and <span className=' font-bold text-xl'>Laravel</span>.
                </p>
                <p className='first-letter:uppercase'>familiar with <span className=' font-bold text-xl uppercase'>api</span>.</p>
                <p className='capitalize'>live in <span className=' font-bold text-xl'>egypt</span> </p>
                <p className='capitalize'>age: 23</p>
                <p className='capitalize '>phone: <span className='font-semibold text-xl'>+201273285866</span></p>
                <p className='first-letter:uppercase'>mail: <a href="mailto:ibrahimadel2220@gmail.com" className='font-semibold text-xl'>ibrahimadel2220@gmail.com</a></p>
            </div>
            <div className='bg-black bg-opacity-75 text-white  font-bold rounded-xl w-fit text-xl px-2 grid capitalize'>
                <span className='text-red-600'>
                    "menu" 
                    <span className='text-white'>{" => [ "}</span>
                </span>
                <Useful short="deep learning" category="education" element="b.s" />
                <Useful short="deep character" category="personality" element="flexable" />
                <Useful short="courses" category="courses" element="iti" />
                <Useful short="documents" category="download" element="cv" link="https://drive.google.com/file/d/1kl7E0KJKAUaTC-Ak8PEbfIczIY62e4WR/view?usp=sharing" />
                
                <div className='px-2'>{"],"}</div>
                <span className='text-red-600'>
                    "social" 
                    <span className='text-white'>{" => [ "}</span>
                </span>
                <Useful short="deep connect" category="mail" element="message" link="mailto:ibrahimadel2220@gmail.com" />
                <Useful short="deep connect" category="linkedin" element="follow" link="https://www.linkedin.com/in/ibrahimadel2220" />
                <Useful short="deep connect" category="facebook" element="follow" link="https://www.facebook.com/ibbrahim.adel.7" />
                <Useful short="deep connect" category="github" element="check" link="https://github.com/ibrahim-CS-CH" />
                <div className='px-2'>{"],"}</div>

                <span className='text-red-600'>
                    "projects" 
                    <span className='text-white'>{" => [ "}</span>
                </span>
                <Useful short="react js " category="front-end" element="eRP system" />
                <Useful short="php " category="Full-stack" element="hotel's cafe" />
                <Useful short="java script " category="front-end" element="e-commerce" />
                <Useful short="laravel " category="full-stack" element="crud operations" />
                <div className='px-2'>{"],"}</div>
                <span className='text-red-600'>
                    "front-end-tools" 
                    <span className='text-white'>{" => [ "}</span>
                </span>
                <Array short="//have knowledge in" el="figma, " el2="html, " el3="css, " el4="tailwind css, " />
                <Array  el="javaScript, " el2="reactJS"/>
                <div className='px-2'>{"],"}</div>
                <span className='text-red-600'>
                    "back-end-tools" 
                    <span className='text-white'>{" => [ "}</span>
                </span>
                <Array short="//have knowledge in" el="mySql, " el2="linux, " el3="php, " el4="laravel " />
                <div className='px-2'>{"],"}</div>
                <span className='text-red-600'>
                    "planning" 
                    <span className='text-white'>{" => [ "}</span>
                </span>
                <Array short="//learning" el="redux, " el2="typeScript, " />
                <div className='px-2'>{"],"}</div>
                <span className='text-red-600'>
                    "problem-solving" 
                    <span className='text-white'>{" => [ "}</span>
                </span>
                <Array short="//solve" el="letcode, " el2="hackerRank, " />
                <div className='px-2'>{"],"}</div>

            </div>
        </div>
  )
}

export default LandingPage