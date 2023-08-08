import React, { useState } from 'react';
import Modal from 'react-modal';
import Form from './Form';

function Popup(props) {
  const [isOpen, setIsOpen] = useState(false);


  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div >
      <button onClick={openModal} className={props.className}>{props.button}</button>
      <Modal isOpen={isOpen} onRequestClose={closeModal} className='popupContainer'>
        <h2>{props.title}</h2>
       <Form className='imageInput'/>
        {/* <button onClick={closeModal}>Close Modal</button> */}
      </Modal>
    </div>
  );
}

export default Popup
