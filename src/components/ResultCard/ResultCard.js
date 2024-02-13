import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItemToFavorites, selectFavorites } from '../../redux/favoritesSlice';
import './resultcard.css';

export const ResultCard = ({ item }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const storedItem = favorites.find((o) => o.id === item.id);
  const favoritesDisabled = storedItem ? true : false;

  const handleAddToFavorites = () => {
    dispatch(addItemToFavorites(item));
  };

  return (
    <div className='sh__result_card'>
      <div className='sh__result_card-poster_wrapper'>
        {item.thumbnail.path ? (
          <img src={item.thumbnail.path + '/portrait_xlarge.jpg'} alt={`${item.name} Poster`} />
        ) : (
          <div className='sh__result_card-filter_poster'></div>
        )}
      </div>

      <div className='sh__result_card-info'>
        <div className='sh__result_card-info-header'>
          <h3 className='sh__result_card-info-header-title'>{item.name}</h3>
        </div>
        <div className='sh__result_card-info-controls'>
          <button className='btn' disabled={favoritesDisabled} onClick={handleAddToFavorites}>
            Add to favorites
          </button>
        </div>
      </div>
    </div>
  );
};
