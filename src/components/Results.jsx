import React from 'react';
import './Results.css';

const Results = ({show, showResults, results}) => {
    
    const time = new Date().toTimeString();
    
  return (
    <>
        <button className="view-results button-color" variant="primary" onClick={showResults}>View Results</button>
        {show &&
            <div className="results">
                <p className="results-heading"><h3>Results as of now ({time.substring(0, time.indexOf(' '))}): </h3></p>
                <p className="category">
                    <h4>President</h4>
                    <ul>
                    <li>Mr. Sugam Kumar : {results.A} </li>
                    <li>Ms. Reetika {results.B} </li>
                    <li>Ms. Reetika {results.C} </li>
                    </ul>
                </p> 
                <p className="category">
                    <h4>Vice President</h4>
                    <ul>
                    <li>Ms. Dipika Rajendra Kanchan : {results.D} </li>
                    <li>Ms. Reetika : {results.E} </li>
                    <li>Mr. Shivam : {results.F} </li>
                    <li>Ms. Yashaswini Vajja : {results.G} </li>
                    <li>Mr. Pratham : {results.H} </li>
                    </ul>
                </p> 
                <p className="category">
                    <h4>Secretary 1</h4>
                    <ul>
                    <li>Ms. Yashaswini Vajja : {results.I} </li>
                    <li>Mr. Pratham: {results.J} </li>
                    <li>Mr. Nehal Sonkar: {results.K} </li>
                    </ul>
                </p> 
                <p className="category">
                    <h4>Secretary 2</h4>
                    <ul>
                    <li>Mr. Sugam Kumar : {results.L} </li>
                    <li>Mr. Aditya Mote : {results.M} </li>
                    <li>Mr. Nehal Sonkar : {results.N} </li>
                    <li>Mr. Shankar Lal : {results.O} </li>
                    </ul>
                </p>
                <p className="category">
                    <h4>Treasurer</h4>
                    <ul>
                    <li>Ms. Dipika Rajendra Kanchan : {results.P} </li>
                    <li>Mr. Aditya Mote : {results.Q} </li>
                    </ul>
                </p>  
            </div>
        }
    </>
  )
}

export default Results