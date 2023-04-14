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
                    <li>Mr. Shivam {results.C} </li>
                    </ul>
                </p> 
                <p className="category">
                    <h4>Vice President</h4>
                    <ul>
                    <li>Ms. Reetika : {results.D} </li>
                    <li>Mr. Shivam : {results.E} </li>
                    <li>Ms. Yashaswini Vajja : {results.F} </li>
                    <li>Mr. Pratham : {results.G} </li>
                    </ul>
                </p> 
                <p className="category">
                    <h4>Secretary 1</h4>
                    <ul>
                    <li>Ms. Yashaswini Vajja : {results.H} </li>
                    <li>Mr. Pratham: {results.I} </li>
                    <li>Mr. Nehal Sonkar: {results.J} </li>
                    </ul>
                </p> 
                <p className="category">
                    <h4>Secretary 2</h4>
                    <ul>
                    <li>Mr. Sugam Kumar : {results.K} </li>
                    <li>Mr. Aditya Mote : {results.L} </li>
                    <li>Mr. Nehal Sonkar : {results.M} </li>
                    <li>Mr. Shankar Lal : {results.N} </li>
                    </ul>
                </p>
                <p className="category">
                    <h4>Treasurer</h4>
                    <ul>
                    <li>Mr. Aditya Mote : {results.O} </li>
                    </ul>
                </p>  
            </div>
        }
    </>
  )
}

export default Results