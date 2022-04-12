import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
import './style.css'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'


function App() {
  const [loading,setLoading]=useState(true)
  const [tours,setTours]=useState([])

  const handleDelete=(id)=>{
 const newTours=tours.filter((tour)=>tour.id!==id)
 setTours(newTours)
    console.log("delete",id)
  }
  const getTours=async()=>{
    setLoading(true)
    try{
      const response=await fetch(url)
      const tours=await response.json()
      setLoading(false)
      console.log(tours)
      setTours(tours)
    }

    catch(error){
     console.log("error")
      setLoading(false)
    }
 
 
    
    }
     
    useEffect(()=>{
      getTours()
      
      
      },[])

  if(loading){
  return <main>
  <Loading/>
  </main>
 
} 
if(tours.length===0){
  return(
    <main>
<div>
  <h2> no tours left</h2>
  <button className="btn" onClick={()=>getTours()}>Refresh</button>
</div>

    </main>
  )
}
  return (
<>
<main>
<Tours tours={tours} handleDelete={handleDelete}/>

</main>


</>
  )
}

export default App
