import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const ShowComment = () => {

    const navigetor=useNavigate();
    const comments=useLoaderData();
    const {name,email,body}=comments;
    return (
        <div className="max-w-md mx-auto mt-2 p-4 bg-white shadow-lg rounded-2xl border border-gray-200">
  <h2 className="text-lg font-semibold text-gray-800 mb-2">{name}</h2>
  <p className="text-sm text-gray-600 mb-1">
    <span className="font-medium">Email:</span> {email}
  </p>
  <p className="text-gray-700 mt-2 text-sm">{body}</p>
  <button className='btn' onClick={()=>navigetor(-1)}> Back </button>
</div>
    );
};

export default ShowComment;