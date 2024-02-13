import React from "react";
import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/favoritesSlice";
import { ItemCard } from "../ItemCard/ItemCard";
import "./favorites.css";

export const Favorites = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <div className="sh__item_page">
      <div className="container">
        <div className="sh__item_page-header">
          <h1 className="sh__item_page-header-heading">My favorites</h1>

          <span className="sh__item_page-header-count_pill">
            {favorites.length} {favorites.length === 1 ? "Item" : "Items"}
          </span>
        </div>

        {favorites.length > 0 ? (
          <div className="sh__item_page-item_grid">
            {favorites.map((item) => (
              <ItemCard key={item.id} item={item} type="favorites" />
            ))}
          </div>
        ) : (
          <h2 className="sh__item_page-no_items">
            No items in your list, add some!
          </h2>
        )}
      </div>
    </div>
  );
};
