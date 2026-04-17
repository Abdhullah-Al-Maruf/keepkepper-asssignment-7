import React from 'react';
import { Link } from 'react-router';

const FriendCard = ({ friend }) => {
  const { id, picture, name, days_since_contact, tags, status } = friend;
  return (
    <div>
      <Link to={`/details/${id}`} className="card bg-base-100  border border-gray-200 shadow">
        <figure className="px-10 pt-10">
          <img
            src={picture}
            alt={name}
            className="rounded-full" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p className='text-2xl font-semibold'>{days_since_contact}d ago</p>
          <div className="card-actions">
            {
              tags.map(tag => <div className="badge font-semibold badge-soft badge-success">{tag}</div>)
            }
          </div>
          <div className={`badge  p-4 text-white font-bold ${status === "overdue" ? " bg-red-500" :
            status === "almost due" ? "bg-amber-500" : "bg-green-500"
            }`}>
            {status}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FriendCard;