import React from 'react';
import './Filter.css';

const Filter = ({optimisedSearchHandler, checked, handleCheck}) => {
  return (
    <div className="filter">
        <input id="filter" type="text" placeholder="Search a name" onChange={optimisedSearchHandler}/> 
        <label>
        <input className="checkbox" type="checkbox" checked={checked} onChange={handleCheck}/>
          Not Voted
        </label>
    </div>
  )
}

export default Filter