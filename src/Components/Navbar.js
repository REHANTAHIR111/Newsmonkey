import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Navbar extends Component {

  render() {
    return (
      <div>
        <nav className="fixed top-0 w-full shadow-xl shadow-stone-500 z-10 py-2.5 navbar  navbar-dark bg-dark text-white">
            <div className=" container flex">
                <div className='flex gap-4'>
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
