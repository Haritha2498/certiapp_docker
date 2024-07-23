import React, { useState } from 'react';

const Home = () => {
  const [idno, setIdno] = useState('');

  const formSubmit = (event) => {
    event.preventDefault(); 

    const link = `/certificate/${idno}`;
    console.log(idno);
    window.location.href = link; 
  };

  return (
    <>
      <div className="text-center mt-20 w-8/12 mr-20 ml-56">
        <h1 className="mt-100 text-4xl font-semibold">CERTIFICATE DAPP</h1>
        <img src="./src/assets/images/image.jpg" alt="" className="w-72 h-72 mx-auto mt-10" />
        <div className="mx-auto mt-10 gap-10">
          <form onSubmit={formSubmit}>
            <input
              type="text"
              name="idno"
              id="idno"
              placeholder="Enter certificate id:"
              className="w-4/12 h-12 border-gray-400 border-2 rounded-3xl text-xl p-4 shadow-xl"
              value={idno}
              onChange={(e) => setIdno(e.target.value)}
            />
            <button type="submit" className="w-36 h-10 bg-blue-500 text-sky-100 rounded-lg">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
