import React from "react";
import { Link, useNavigate } from "react-router";



const Comment = ({ comment }) => {
  const {id, name, email, body } = comment;
  const navigate = useNavigate();

const handleNavigate = () => {
  navigate(`/comments/${id}`);
};

  return (
    <div className="max-w-md mx-auto mt-2 p-4 bg-white shadow-lg rounded-2xl border border-gray-200">
  <h2 className="text-lg font-semibold text-gray-800 mb-2">{name}</h2>
  <p className="text-sm text-gray-600 mb-1">
    <span className="font-medium">Email:</span> {email}
  </p>
  <p className="text-gray-700 mt-2 text-sm">{body}</p>
  <Link className="text-sm text-black" to={`/comments/${id}`}>show full comment</Link>
  <button className="btn" onClick={handleNavigate}>show of :{id}</button>
</div>

  );
};

export default Comment;
