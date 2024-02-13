// Home.js
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';

const Home = () => {
  const [shows, setShows] = useContext(UserContext);
  const [selectedShow, setSelectedShow] = useState(null);
  const defaultImageUrl = 'https://ik.imagekit.io/demo/medium_cafe_B1iTdD0C.jpg';

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://api.tvmaze.com/search/shows?q=all');
      const data = await res.json();
      setShows(data);
    };

    fetchData();
  }, [setShows]);

  const handleShowSummary = (show) => {
    setSelectedShow(show);
  };

  localStorage.setItem('shows', JSON.stringify(shows));

  return (
    <>
      <div>
        <h1 className='text-center font-bold center m-5 p-3 text-3xl'>TV Shows</h1>

        <div className='flex justify-center flex-wrap bg-white'>
          {shows.map((show) => (
            <div key={show.show.id} className='m-8 w-64 shadow-md bg-clip-border rounded-xl p-2'>
              <div className='flex justify-center'>
                {show.show.image ? (
                  <img className='w-[200px] h-[300px] rounded-lg' src={show.show.image.original} alt={show.show.name} />
                ) : (
                  <img className='w-[200px] h-[300px] rounded-lg' src={defaultImageUrl} alt={show.show.name} />
                )}
              </div>
              <div className='text-center m-1'>Name: {show.show.name}</div>
              <div className='text-center m-1'>Genres: {show.show.genres[0]}</div>
              <div className='text-center m-1'>Language: {show.show.language}</div>

              <div className='flex justify-center'>
                <Link to={`/summary/${show.show.id}`} target='_blank' onClick={() => handleShowSummary(show)}>
                  <button
                    className='flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20'
                    type='button'
                  >
                    Summary
                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' className='w-4 h-4'>
                      <path stroke-linecap='round' stroke-linejoin='round' d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'></path>
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
