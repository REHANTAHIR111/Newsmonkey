import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Navbar extends Component {

  render() {
    return (
      <div>

      {/* <video autoPlay loop muted className='absolute z-[-1] top-0 left-0 w-fit h-fit'>
        <source src={bgvid} type='video/mp4' />
      </video> */}

        <nav className="fixed top-0 w-full shadow-xl shadow-stone-700 z-10 py-2.5  bg-dark text-white">
            <div className=" container flex">
                <div className='flex gap-4'>
                    <img src="new.jpeg" alt="" />
                    <Link to='/'className='text-xl font-medium text-gray-400 '>NewsMonkey</Link>
                    <div className='space-x-4 relative top-1.5 text-sm font-semibold'>
                      <Link to='/'className='transition-all duration-250 hover:text-gray-400 hover:border hover:border-0 hover:border-b-2 hover:border-sky-600'>Home</Link>
                      <Link to='/business'className='transition-all duration-250 hover:text-gray- hover:border hover:border-0 hover:border-b-2 hover:border-sky-600'>Business</Link>
                      <Link to='/entertainment'className='transition-all duration-250 hover:text-gray-400 hover:border hover:border-0 hover:border-b-2 hover:border-sky-600'>Entertainment</Link>
                      <Link to='/general'className='transition-all duration-250 hover:text-gray-400 hover:border hover:border-0 hover:border-b-2 hover:border-sky-600'>General</Link>
                      <Link to='/health'className='transition-all duration-250 hover:text-gray-400 hover:border hover:border-0 hover:border-b-2 hover:border-sky-600'>Health</Link>
                      <Link to='/science'className='transition-all duration-250 hover:text-gray-400 hover:border hover:border-0 hover:border-b-2 hover:border-sky-600'>Science</Link>
                      <Link to='/sports'className='transition-all duration-250 hover:text-gray-400 hover:border hover:border-0 hover:border-b-2 hover:border-sky-600'>Sports</Link>
                      <Link to='/technology'className='transition-all duration-250 hover:text-gray-400 hover:border hover:border-0 hover:border-b-2 hover:border-sky-600'>Technology</Link> 
                    </div>
                </div>
                <div>
                </div>
            </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
