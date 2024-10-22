import React from 'react'
import Nav from './Nav'
const Home = () => {
  return (
    <>
    <Nav/>
      <div className="text-center font-bold text-2xl mt-8">
        Bariflo Cybernetics Private Limited <br />
        207 Second Floor KIIT TBI Campus 11, Patia, Bhubaneswar, Odisha 751024
      </div>
      <div className="overflow-hidden h-0 pb-[30%] relative">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.581934562146!2d85.82004777501236!3d20.35888248112804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19092434cd888b%3A0xfb8ff597b8b044e1!2sBariflo%20Cybernetics%20Private%20Limited!5e0!3m2!1sen!2sin!4v1729572904494!5m2!1sen!2sin" width="600" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="border-0 h-full w-full left-0 right-0 absolute"  ></iframe>
      </div>
    </>
  )
}

export default Home
