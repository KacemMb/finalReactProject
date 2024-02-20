import React from 'react';
import PostCard from '../components/PostCard';
import { useSelector } from 'react-redux';
import '../style/Posts.css';

const Posts = () => {
  const data = useSelector((state) => state.post.value);

  return (
    <div className='Posts'>
      {data.map((post) => (
        <PostCard
          key={post.id}
          id={post.id}
          departCity={post.departCity} // Assuming Depart is the property name in your Redux state
          destination={post.destination} // Assuming Destination is the property name in your Redux state
          date={post.date}
          time={post.time}
          price={post.price}
          placeNumber={post.placeNumber}
        />
      ))}
    </div>
  );
};

export default Posts;
