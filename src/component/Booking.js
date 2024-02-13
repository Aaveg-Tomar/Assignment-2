import React, { useState } from 'react';
import { useParams } from 'react-router-dom';



const Booking = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [bookingDate, setBookingDate] = useState('');
    const [price, setPrice] = useState(120);
    const [numberOfPersons, setNumberOfPersons] = useState(1);

   const { showId } = useParams();
  // Find the selected show based on showId
  const stored = JSON.parse(localStorage.getItem('name'));
  
  


    const handleIncrement = () => {
        setNumberOfPersons(prevCount => prevCount + 1);
        setPrice(prevPrice => prevPrice + 120);
    };

    const handleDecrement = () => {
        setNumberOfPersons((prevCount) => {
            if (prevCount > 1) {
                setPrice((prevPrice) => prevPrice - 120);
                return prevCount - 1;
            } else {
                return prevCount;
            }
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();

    };

    

    return (
        <>
            <div className='m-3 text-center font-bold text-3xl'>
                {
                    
                    <div>
                        {stored}
                    </div>
                }
            </div>
            <div className=' flex justify-center'>

                <form className=' m-4 w-3/4 shadow-md bg-clip-border rounded-xl ' onSubmit={handleSubmit}>
                    <div className='m-2'>
                        <label className='block text-gray-700 text-lg font-bold mb-2'>
                            <div className='m-2'>First Name:</div>
                            <input className=' m-2 block w-1/2 rounded-md  py-1.5 pl-7 pr-20  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6' type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                        </label>
                    </div>
                    <br />
                    <div className='m-2'>
                        <label className='block text-gray-700 text-lg font-bold mb-2'>
                            <div className='m-2'>First Name:</div>
                            <input className=' m-2 block w-1/2 rounded-md  py-1.5 pl-7 pr-20  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6' type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                        </label>
                    </div>
                    <br />
                    <div className='m-2'>
                        <label className='block text-gray-700 text-lg font-bold mb-2'>
                            <div className='m-2'>  Date of Booking:</div>
                            <input className='border-spacing-3 m-2' type="date" value={bookingDate} onChange={(e) => setBookingDate(e.target.value)} required />
                        </label>
                    </div>
                    <div className='m-2'>
                        <label className='m-2'>
                            <div className='block text-gray-700 text-sm font-bold mb-2 ml-2'>One Person Ticket Price: 120</div>
                        </label>
                    </div>
                    <br />
                    <div className='m-2'>
                        <label className='flex'>
                            Number of Persons :
                            <button className='flex' type="button" onClick={handleIncrement}><div className='flex font-bold text-3xl -mt-2 mx-1'>+</div></button>
                            <div className='flex  text-blue-500 text-2xl -mt-1 mx-2'>{numberOfPersons}</div>
                            <button className='flex' type='button' onClick={handleDecrement}><div className='flex font-bold text-3xl -mt-2 mx-1'>-</div></button>
                        </label>
                    </div>
                    <div className='flex m-2'>
                        <div className='flex'>
                            Total Price :
                        </div>
                        <div className='flex text-blue-500 mx-2 text-lg'>
                            ${price}
                        </div>
                    </div>
                    <br />
                    <div className='flex justify-center'>
                        <button className=" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mb-4" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Booking;
