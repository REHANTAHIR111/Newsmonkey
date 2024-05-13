import React from 'react';
import axios from 'axios';

export default function Post() {
    const Submithandler = (event) => {
        event.preventDefault();
        const title = event.target.title.value;
        const Ftitle = event.target.Ftitle.value;
        axios.post("https://jsonplaceholder.typicode.com/posts" , {
          title , Ftitle
        })
        .then(response => {
            console.log(response)
        })
        .catch((error)=>{
            console.log(error)
        }); 
    }
  return (
    <div>
      <form className='mb-20'>
           <center>
                <label>Name:</label><br/>
                <input type='text' id='title' className='border border-2' required /><br/><br/>  
                <label>F/Name:</label><br/>
                <input type='text' id='Ftitle' className='border border-2' required /><br/><br/>
                <button type='submit' className='border border-2 bg-emerald-400 px-4 py-1.5 rounded-full' onClick={Submithandler}>Submit</button>
            </center>  
      </form>
    </div>
  )
}
