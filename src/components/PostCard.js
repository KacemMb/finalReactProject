import React from 'react';
import '../style/PostCard.css';
import { useDispatch } from 'react-redux';
import { getPlace, removePost } from '../redux/PostSlice';


const PostCard = ({ id,departCity, destination, date, time, price, placeNumber }) => {
    const dispatch = useDispatch()
    const handleRemove = () => {
        dispatch(removePost(id))
    }
    const handleGetPlace = () => {
        dispatch(getPlace(id))
    }
    return (
        <div className="card">
                <h5 className="card-title">Details</h5>
                <p className="card-text">Depart City: {departCity}</p>
                <p className="card-text">Destination: {destination}</p>
                <p className="card-text">Date: {date}</p>
                <p className="card-text">Time: {time}</p>
                <p className="card-text">Price: {price} DT</p>
                <p className="card-text">Place Number: {placeNumber}</p>
                <button className="btn btn-primary" onClick={handleGetPlace}>Get Place</button>
                <button className="btn btn-primary" onClick={handleRemove}>Remove</button>
        </div>
    );
};

PostCard.defaultProps = {
    departCity: 'Unknown',
    destination: 'Unknown',
    date: 'Unknown',
    time: 'Unknown',
    price: 'Unknown',
    placeNumber: 'Unknown',
};

export default PostCard;
