import React, { useState } from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useSnackbar } from 'notistack'

const DeleteBook = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { enqueueSnackBar } = useSnackbar();
    const { id } = useParams();
    const handleDeleteBook = () => {
        setLoading(true);
        axios
            .delete(`http://Localhost:5555/books/${id}`)
            .then(() => {
                setLoading(false);
                enqueueSnackBar(`Book Edited Successfully`, { varient: 'success'}); 
                navigate('/');
            })
            .catch((error) => {
                setLoading(false);
                //alert('An error occured. Please check console');
                enqueueSnackBar(`Error`, { varient: 'error'}); 
                console.log(error);
            });
    };

  return (
    <div className='p-4'>
        <BackButton />
        <h1 className='text-3x1 my-4'>Delete Book</h1>
        {loading ? <Spinner /> : ''}
        <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
            <h3 className='text-2x1'> Are You Sure You Want to Delete This Book?</h3>
            <button className='p-4 bg-red-600 text-white m-8 w-full' onClick={handleDeleteBook}> Yes, Delete It</button>
        </div>
    </div>
  )
}

export default DeleteBook