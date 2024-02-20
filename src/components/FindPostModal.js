import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { filterPost } from '../redux/PostSlice';

function FindPostModal() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [findPost, setfindPost] = useState({
    departCity: '',
    destination: ''
    }); 

    const searchPost = (e) => {
      setfindPost({ ...findPost, [e.target.name]: e.target.value });
    };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleFind = () => {
    dispatch(filterPost(findPost));
    handleClose();
    setfindPost({
      departCity: '',
      destination: ''
      });
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Find a Post
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
            <Form.Control name='departCity' type="text" placeholder="Depart" onChange={searchPost}/>
            <hr />
            <Form.Control name='destination' type="text" placeholder="Destination" onChange={searchPost}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleFind}>Find</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FindPostModal;