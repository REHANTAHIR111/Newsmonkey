import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Navbar extends Component {

  render() {
    return (
      <div>
        <nav className="fixed top-0 w-[100%] z-10 py-2 navbar navbar-dark bg-dark text-white">
            <div className=" container flex">
                <div className='flex gap-4'>
                    <Link to='/'className='text-xl font-medium text-gray-400'>NewsMonkey</Link>
                    <Link to='/'className='text-sm font-semibold relative top-2 transition-all duration-250 hover:text-gray-400'>Home</Link>
                    <Link to='/business'className='text-sm font-semibold relative top-2 transition-all duration-250 hover:text-gray-400'>Business</Link>
                    <Link to='/entertainment'className='text-sm font-semibold relative top-2 transition-all duration-250 hover:text-gray-400'>Entertainment</Link>
                    <Link to='/general'className='text-sm font-semibold relative top-2 transition-all duration-250 hover:text-gray-400'>General</Link>
                    <Link to='/health'className='text-sm font-semibold relative top-2 transition-all duration-250 hover:text-gray-400'>Health</Link>
                    <Link to='/science'className='text-sm font-semibold relative top-2 transition-all duration-250 hover:text-gray-400'>Science</Link>
                    <Link to='/sports'className='text-sm font-semibold relative top-2 transition-all duration-250 hover:text-gray-400'>Sports</Link>
                    <Link to='/technology'className='text-sm font-semibold relative top-2 transition-all duration-250 hover:text-gray-400'>Technology</Link>
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
