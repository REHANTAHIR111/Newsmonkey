import React , { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import rehan from './new.png'
import BLUR from './blur.jpg'
import sound from './sound.wav'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Post() {

  const navigate = useNavigate();
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const [showPassword, setShowPassword] = useState(false);

  const valide = 'rehan@rmail.com'
  const validp = 'REHAN123' 

  localStorage.setItem('email',email)
  localStorage.setItem('password',password)

  useEffect(()=>{
    
  })

  const empty = (e) => {
    if(!email || !password){
      toast('Please Fill ' + (!email ? 'Email, ' : '') + (!password ? 'Password' : '') + '!')
      e.preventDefault();
    }
    else if(email !== valide){
      toast.error("Email is Not Valid!");
      e.preventDefault();
    }
    else if(password !== validp){
      toast.error("Password is Not Valid!");
      e.preventDefault();
    }
    else{
      play()
      navigate("/homepage");
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);

};

function play(){
  new Audio(sound).play()
}

  return (
      <div className='flex justify-center mt-24'>
        <ToastContainer
          autoClose={1800}
          closeButton={false}
        />
          <form className='w-[40rem] h-[34rem] gr'>
              <div className='flex justify-center overflow-hidden bg-cover bg-no-repeat mt-10'>
                  <img src={rehan} className='rounded-full transition-all duration-500 hover:scale-110 w-12 h-12 relative right-3'/>
                  <h1 className='text-center font-bold bg-gradient-to-r from-teal-700 to-cyan-600 text-transparent bg-clip-text text-4xl'>Login</h1>
              </div>
              <div className='ml-40 mt-20'>
                  <label className='font-semibold text-lg'>Email</label><br/>
                  <input type='email' className={`py-2 px-3 bg-transparent border-b-2 border-black caret-rose-500 focus:outline-none mb-5 w-80`} placeholder='Please add email...' value={email} onChange={(e) => {setEmail(e.target.value)}}/><br/>
                  <label className='font-semibold text-lg'>Password</label><br/>
                  <div className='flex'>
                  <input type={showPassword ? "Text" : "Password"} className={`py-2 pl-3 pr-9 bg-transparent border-b-2 border-black caret-rose-500 focus:outline-none w-80`} placeholder='Please add password...' value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                  <span className='mt-3 ml-10 relative right-16'
                        onClick={togglePasswordVisibility}
                    >
                        {showPassword ?
                            <i class="fa-regular fa-eye"></i>
                            :
                            <i class="fa-solid fa-eye-low-vision"></i>
                        }
                    </span>
                  </div>
                  <button type='submit' className='bg-gradient-to-t from-[#a80c26] to-[#037381] text-gray-300 hover:bg-gradient-to-b text-lg h-10 border-0 w-80 mt-10 py-1.8 px-9 rounded-lg font-bold' onClick={(e) => {empty(e)}}>Login</button>
              </div>
          </form>
    </div>
  )
}
export default Post;

