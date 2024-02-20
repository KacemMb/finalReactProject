import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { addPost } from '../redux/PostSlice';

function AddPostModal() {

  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
    const [newPost, setnewMovie] = useState({
        id : Math.random(),
        departCity: 'unknown',
        destination: ' unknown',
        date: 'unknown',
        time: 0,
        price: 0,
        placeNumber:0
    });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAdd = () => {
    dispatch(addPost(newPost));
    handleClose();
  };
  const addNewPost = (e) => {
    setnewMovie({ ...newPost, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add a Post
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Control name='departCity' type="text" placeholder="Depart" onChange={addNewPost}/>
        <hr />
        <Form.Control name='destination' type="text" placeholder="Destination" onChange={addNewPost}/>
        <hr />
        <Form.Control name='date' type="Date" placeholder="Date" onChange={addNewPost}/>
        <hr />
        <Form.Control name='time' type="time" placeholder="Time" onChange={addNewPost}/>
        <hr />
        <Form.Control name='price' type="number" placeholder="Price (Dollar)" onChange={addNewPost}/>
        <hr />
        <Form.Control name='placeNumber' type="number" placeholder="Place number" min={1} onChange={addNewPost}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddPostModal;