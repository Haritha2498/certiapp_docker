import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className="flex gap-12 text-right float-right mt-10 mr-10">
        <a href="/"> <input type="button" name="Home" id="" value="Home" className="w-32 h-10 bg-blue-500 text-sky-100 rounded-lg hover:bg-blue-400 " /></a>
        <a href="/issue"><input type="button" name="Home" id="" value="Issue Certificate" className="w-36 h-10 bg-blue-500 text-sky-100 rounded-lg " /> </a>
        <br />
    </div>
    <br/>
    </>
  )
}

export default Navbar