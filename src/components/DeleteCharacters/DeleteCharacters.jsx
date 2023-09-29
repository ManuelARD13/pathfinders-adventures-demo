import React from 'react';

function DeleteCharacters({ setModalOpen, handler, message }) {
  return (
    <>
      <div>
        <h3>You sure you want to delete {message}?</h3>
      </div>
      <div>
        <button onClick={() => setModalOpen(false)}>CANCEL</button>
        <button onClick={() => {
            handler()
            setModalOpen(false)
          }}>DELETE</button>
      </div>
    </>
  );
}

export default DeleteCharacters;