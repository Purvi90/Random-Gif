import React , {useState} from 'react'



  const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

  const Random = () => {
    const[gif , setGif] =useState('');
    const url =

    function clickHandler(){


    }
    
  return (
    
    <div className='w-1/2 h-[450px] bg-green-500 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px]'>
   
   <h1 className='text-2xl underline uppercase font-bold'> A Random Gif</h1>
  
   <img src={gif} width="450"/>

   <button 
 
   onClick={clickHandler}
   className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg">
     Generate
   
    </button>
    
     </div>
  )
}
export default Random
