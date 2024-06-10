import React, { useState } from 'react';
import './post.css';
import ax from '../axios.js';



const Post = () => {

    const userId= "660b170df00fffca9933298a";
    const[title, setTitle]=useState('');
    const[description, setDescription]=useState('');
    const[requirements, setRequirements]=useState('');
    const[duration, setDuration]=useState('');
    const[neededWorkers, setNeededWorkers]=useState('');
    const[budget, setBudget]=useState('');
    const city= "659bdd18f24951cb0d24eaef";
    const profession =  "65af8f447a2624ca9baf86db";
    const[experienceLevel, setExperienceLevel]=useState('');
    const[expiresAt, setExpiresAt]=useState('');
    const[state,setState]=useState('');

   
    
    const handleSubmit=()=>{
        const data={
            userId,
            title,
            description,
            requirements,
            duration,
            neededWorkers,
            budget,
            city,
            profession,
            experienceLevel,
            expiresAt,
            state
        }
        ax.post('/posts',data)
   .then((res)=>{
        console.log('te dhenat me sukses jane insertuar',res);
    }).catch((err)=>console.log(err));
    }

    








  return (
    <div className='PostWrapper'>
        <input placeholder='title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <input placeholder='description' value={description} onChange={(e)=>setDescription(e.target.value)}/>
        <input placeholder='requirements' value={requirements} onChange={(e)=>setRequirements(e.target.value)}/>
        <input placeholder='duration' value={duration} onChange={(e)=>setDuration(e.target.value)}/>
        <input placeholder='neededWorkers' value={neededWorkers} onChange={(e)=>setNeededWorkers(e.target.value)}/>
        <input placeholder='budget' value={budget} onChange={(e)=>setBudget(e.target.value)}/>
        <input placeholder='experienceLevel' value={experienceLevel} onChange={(e)=>setExperienceLevel(e.target.value)}/>
        <input placeholder='expiresAt' value={expiresAt} onChange={(e)=>setExpiresAt(e.target.value)}/>
        <input placeholder='state' value={state} onChange={(e)=>setState(e.target.value)}/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Post