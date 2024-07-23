import React from 'react'
import Issue from '../Component/Issue'
import { useState } from "react"
import { useNavigate } from 'react-router-dom';

const Issuepage = () => {

    const [course,setCourse]=useState('');
    const [cerid,setCerid]=useState('');
    const [cname,setCname]=useState('');
    const [grade,setGrade]=useState('');
    const [date,setDate]=useState('');


    const navigate=useNavigate();


    const submitForm=(e)=>{
        e.preventDefault();
        const newcerti={
          course,              
          cerid,
          cname,
          grade,
          date
        }
        console.log(newcerti);
        const res=addCertificate(newcerti);

        navigate("/")
    }


    const addCertificate= async(newcerti)=>{
        const res=await fetch('/api/submitform',{
                        method:'POST',
                        headers:{
                        'Content-Type':'application/json',
                        },
                        body:JSON.stringify(newcerti)
    })
    console.log("msgg",res);
      return res;
    }



  return (
    <>
    <h1 className="font-extrabold text-3xl mt-8 ml-12 font-mono">Certificate Dapp</h1>
        <div className="w-10/12  mb-40 mx-auto bg-gray-300 mt-14 text-2xl">
            <br />
            <h1 className="text-center font-medium text-2xl mt-4 ">Issue New Certificate</h1>
            
            
            <form onSubmit={submitForm} className="ml-24 p-10">
                Select Course* <br />
                <select name="course" 
                        id="course" 
                        className="w-9/12 h-10 border-2 border-slate-400"
                        
                        value={course}
                        onChange={(e)=>setCourse(e.target.value)}
                        >
                    <option value="cba" >Certified Blockchain Associate</option>
                    <option value="CED">Certified Ethereum Developer</option>
                    <option value="CHF">Certified Hyperledger Fabric Developer</option>
                </select>
                <br /><br />
                Certificate Id: *<br />
                <input type="text" 
                        name="cerid" 
                        id="cerid" 
                        className="w-9/12 h-10 border-2 border-slate-400" 
                        
                        value={cerid}
                        onChange={(e)=>setCerid(e.target.value)}
                        
                        />
                <br /><br />
                Candidate name* <br />
                <input className="w-9/12 h-10 border-2 border-slate-400" 
                        type="text" 
                        name="cname" 
                        id="cname"
                        
                        value={cname}
                        onChange={(e)=>setCname(e.target.value)}
                        
                        
                        /><br />
                <br />
                Select Grade* <br />
                <select className="w-9/12 h-10 border-2 border-slate-400" 
                        name="grade" 
                        id="grade"
                        
                        value={grade}
                        onChange={(e)=>setGrade(e.target.value)}
                        
                        
                        >
                    <option value="s">S</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
    
                </select> <br /><br />
                Issue Date* <br />
                <input className="w-9/12 h-10 border-2 border-slate-400" 
                        type="date" 
                        name='date' 
                        id='date' 
                        
                        
                        value={date}
                        onChange={(e)=>setDate(e.target.value)}
                        
                        
                        
                        />
                <br /><br/>
                {/* <a href="/certificate"> <input type="button" name="Home" id="" value="Issue Certificate" className="w-48 h-10 bg-blue-500 text-sky-100 rounded-lg hover:bg-blue-400 float-right mr-96" /></a> */}
                <button type="submit" className='w-48 h-10 bg-blue-500 text-sky-100 rounded-lg hover:bg-blue-400 float-right mr-96 '>Issue certificate</button>
            </form>
            <br /><br /><br />
        </div>
    </>
  )
}

export default Issuepage