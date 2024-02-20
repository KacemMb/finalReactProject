import React from 'react';
import '../style/Navbar.css';
import AddPostModal from '../components/AddPostModal';
import FindPostModal from '../components/FindPostModal';
const Navbar = () => {
    
  return (
    <nav className='Navbar'>
      <div className="logo">Travel Now</div>
      <div className="buttons">
        <FindPostModal />
        <AddPostModal />
      </div>
    </nav>
  );
};

export default Navbar;
