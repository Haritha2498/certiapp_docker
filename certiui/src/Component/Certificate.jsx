import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Certificate = () => {

  const [student,setStudent]=useState([]);

  const {id}=useParams();


  useEffect(()=>{
        const fetchstudentdetails=async ()=>
        {
          try{
            const res=await fetch(`/api/apim/form/${id}`);
            const data=await res.json()
            console.log(data);
            setStudent(data);
          }
          catch(error){
            console.log("error",error)
          }
          
        }
        fetchstudentdetails();
  
  
    },[])


  return (
    <>


<br />
<div className="text-center mt-10 ">
    <img src="../src/assets/images/im2.png" alt="" className="w-12 h-12 mx-auto" />
    <p className="text-4xl font-serif font-semibold h-14 text-red-800 mt-6">KERALA BLOCKCHAIN ACADEMY</p>
    </div>
    <div className="bg-slate-50 w-10/12 h-5/6 mx-auto mt-6 mb-40">
        <br />
        <img src="../src/assets/images/image.jpg" alt="" className="w-44 h-44 mx-auto " />
        <p  className="text-center mt-12 text-3xl mb-40 p-2"> This is to certify that <span id="name" className="text-3xl font-semibold text-violet-500 mx-2">{student.cname}</span> 
            has  successfully <br /> completed <span id="course" className="text-3xl font-semibold text-violet-500">{student.course}</span><br />
            course on <span id="date" className="text-3xl font-semibold text-violet-500">{student.date}</span> with grade <span id="grade" className="text-3xl font-semibold text-violet-500">{student.grade}</span> from  <b>KERALA BLOCKCHAIN ACADEMY</b>.</p>
            <br />
    </div>
    
    </>
  )
}

export default Certificate