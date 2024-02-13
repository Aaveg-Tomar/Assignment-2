// Summary.js
import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../App';

const Summary = () => {
  const { showId } = useParams();
  const [shows] = useContext(UserContext);


  // Find the selected show based on showId
  const storedUser = JSON.parse(localStorage.getItem('shows'));
  const selectedShow = storedUser.find((show) => show.show.id === parseInt(showId, 10)) ;
  console.log(selectedShow.show.name);
  localStorage.setItem('name', JSON.stringify(selectedShow.show.name));
 

  const defaultImageUrl = 'https://ik.imagekit.io/demo/medium_cafe_B1iTdD0C.jpg';

  return (
    <>
      <h1 className=' text-center m-4 text-3xl text-gray-800 font-bold font-serif'>Summary Page</h1>
      {selectedShow && (
        <div className=' flex justify-center'>

          <div className='m-8 w-4/5 shadow-md bg-clip-border rounded-xl '>
          <div className='flex justify-center'>
              {selectedShow.show.image ? (
                <img className='w-[400px] h-[300px] rounded-lg' src={selectedShow.show.image.original} alt={selectedShow.show.name} />
              ) : (
                <img className=' w-[400px] h-[300px] rounded-lg' src={defaultImageUrl} alt={selectedShow.show.name} />
              )}
            </div>
            <div className=' m-3 text-center text-xl font-semibold '>{selectedShow.show.name}</div>
            <div className=' m-5'>{selectedShow.show.summary.replace(/<[^>]*>/g, '')}</div>
            <div className=' flex justify-center m-3'>
              <Link to={`/booking/${selectedShow.show.id}`}>
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  Book Ticket
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Summary;
