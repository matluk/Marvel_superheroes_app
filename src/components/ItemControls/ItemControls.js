import React from "react";
import { useDispatch } from "react-redux";
import { removeItemFromFavorites } from "../../redux/favoritesSlice";
import "./itemcontrols.css";

export const ItemControls = ({ item, type }) => {
  const dispatch = useDispatch();

  const handleRemoveFromFavorites = () => {
    dispatch(removeItemFromFavorites(item.id));
  };

  return (
    <div className="sh__inner_card_controls">
      {type === "favorites" && (
        <>
          <button
            className="sh__inner_card_controls-ctrl_btn"
            onClick={handleRemoveFromFavorites}
          >
            Remove from favorites
          </button>
        </>
      )}
    </div>
  );
};
