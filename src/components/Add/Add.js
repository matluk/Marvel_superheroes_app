import React, { useState } from "react";
import { ResultCard } from "../ResultCard/ResultCard";
import axios from "axios"
import './add.css'

const hash = "e1cf74e369b546d4ba6a55c599a4f839"

export const Add = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (e) => {


    setQuery(e.target.value);
    e.preventDefault();
    axios.get(
      `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=1&apikey=77f08d57990863e7c6217cd3cefff891&hash=${hash}`
    ).then(({data}) => {
        if(!data.data.errors){
          setResults(data.data.results);
        } else {
          setResults([]);
        }
      });
  };

  return (
      <div className="container">
        <div className="sh__add_content">
          <div className="sh__add_content-input_wrapper">
            <input
              type="text"
              placeholder="Search for an item"
              value={query}
              onChange={onChange}
            />
          </div>

          {results.length > 0 && (
            <ul className="sh__add_content-results">
              {results.map((item) => (
                <li key={item.id}>
                  <ResultCard key={item.id} item={item} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
  );
};
