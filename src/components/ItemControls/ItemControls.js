import React, {useContext} from 'react';
import { GlobalContext } from '../../context/GlobalState';
import './itemcontrols.css'

export const ItemControls = ({item, type}) => {

  const {removeItemFromFavorites } = useContext(GlobalContext);

  return (
    <div className='sh__inner_card_controls'>
        {type === 'favorites' && (
            <>
            <button className='sh__inner_card_controls-ctrl_btn'
            onClick={() => removeItemFromFavorites(item.id)}>
             Remove from favorites
            </button>
            </>
        )}

    </div>
  )
}
