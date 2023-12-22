import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import './resultcard.css'

export const ResultCard = ({ item }) => {
  const { addItemToFavorites, favorites } = useContext(GlobalContext);

  let storedItem = favorites.find((o) => o.id === item.id);

  const favoritesDisabled = storedItem ? true : false;

  return (
    <div className="sh__result_card">
      <div className="sh__result_card-poster_wrapper">
        {item.thumbnail.path ? (
          <img
            src={item.thumbnail.path + "/portrait_xlarge.jpg"}
            alt={`${item.name} Poster`}
          />
        ) : (
          <div className="sh__result_card-filter_poster"></div>
        )}
      </div>

      <div className="sh__result_card-info">
        <div className="sh__result_card-info-header">
          <h3 className="sh__result_card-info-header-title">{item.name}</h3>
        </div>
        <div className="sh__result_card-info-controls">
          <button
            className="btn"
            disabled={favoritesDisabled}
            onClick={() => addItemToFavorites(item)}
          >
            Add to favorites
          </button>
        </div>
      </div>
    </div>
  );
};
