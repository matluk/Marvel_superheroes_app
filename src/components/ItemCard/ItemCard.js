// Update your ItemCard component
import React, { useState } from 'react';
import { ItemControls } from '../ItemControls/ItemControls';
import Modal from '../Modal/Modal'; // Import a Modal component
import DOMPurify from 'dompurify';
import './itemcard.css';

export const ItemCard = ({ item, type }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    if (item.description && item.description.trim() !== '') {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const sanitizedDescription = DOMPurify.sanitize(item.description);

  return (
    <div className='sh__item_card'>
      {item.thumbnail.path && (
        <>
          <div className='sh__item_card-overlay'></div>
          <img
            src={item.thumbnail.path + '/portrait_xlarge.jpg'}
            alt={`${item.name} Poster`}
            onClick={openModal}
            style={{ cursor: item.description && item.description.trim() !== '' ? 'pointer' : 'default' }}
          />
        </>
      )}
      <div className='sh__item_content'>
        {item.description && item.description.trim() !== '' ? (
          <h4 style={{ cursor: 'pointer', textDecoration: 'underline', color: 'blue' }} onClick={openModal}>
            {item.name}
          </h4>
        ) : (
          <h4>{item.name}</h4>
        )}
        <ItemControls type={type} item={item} />
      </div>

      {isModalOpen && (
        <Modal closeModal={closeModal}>
          <p dangerouslySetInnerHTML={{ __html: sanitizedDescription }} />
        </Modal>
      )}
    </div>
  );
};
