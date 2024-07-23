import React from 'react'

const Issue = () => {
  return (
    <>
    <h1 className="font-extrabold text-3xl mt-8 ml-12 font-mono">Certificate Dapp</h1>
        <div className="w-10/12  mb-40 mx-auto bg-gray-300 mt-14 text-2xl">
            <br />
            <h1 className="text-center font-medium text-2xl mt-4 ">Issue New Certificate</h1>
            <form action="" className="ml-24 p-10">
                Select Course* <br />
                <select name="course" id="" className="w-9/12 h-10 border-2 border-slate-400">
                    <option value="Certified Blockchain Associate" selected>Certified Blockchain Associate</option>
                    <option value="Certified Ethereum Developer">Certified Ethereum Developer</option>
                    <option value="Certified Hyperledger Fabric Developer">Certified Hyperledger Fabric Developer</option>
                </select>
                <br /><br />
                Certificate Id: *<br />
                <input type="text" name="cer_id" className="w-9/12 h-10 border-2 border-slate-400" />
                <br /><br />
                Candidate name* <br />
                <input className="w-9/12 h-10 border-2 border-slate-400" type="text" name="name" /><br />
                <br />
                Select Grade* <br />
                <select className="w-9/12 h-10 border-2 border-slate-400" name="grade" id="">
                    <option value="S">S</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
    
                </select> <br /><br />
                Issue Date* <br />
                <input className="w-9/12 h-10 border-2 border-slate-400" type="date" />
                <br /><br/>
                <a href="/certificate"> <input type="button" name="Home" id="" value="Issue Certificate" className="w-48 h-10 bg-blue-500 text-sky-100 rounded-lg hover:bg-blue-400 float-right mr-96" /></a>
        
            </form>
            <br /><br /><br />
        </div>
    
    </>
  )
}

export default Issue