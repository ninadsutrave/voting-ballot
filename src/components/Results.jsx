import React from 'react';
import './Results.css';

const Results = ({show, showResults, results}) => {
    
    const time = new Date().toTimeString();
    
  return (
    <>
        <button className="view-results button-color" variant="primary" onClick={showResults}>View Results</button>
        {show &&
            <div className="results">
                <p><h4>Results as of now ({time.substring(0, time.indexOf(' '))}): </h4></p>
                <p>
                    <h5>President</h5>
                    <ul>
                    <li>Candidate A : {results.president.candidateA} </li>
                    <li>Candidate B : {results.president.candidateB} </li>
                    </ul>
                </p> 
                <p>
                    <h5>Vice President</h5>
                    <ul>
                    <li>Candidate C : {results.vicePresident.candidateC} </li>
                    <li>Candidate D : {results.vicePresident.candidateD} </li>
                    </ul>
                </p> 
                <p>
                    <h5>Secretary 1</h5>
                    <ul>
                    <li>Candidate E : {results.secretary1.candidateE} </li>
                    <li>Candidate F : {results.secretary1.candidateF} </li>
                    </ul>
                </p> 
                <p>
                    <h5>Secretary 2</h5>
                    <ul>
                    <li>Candidate G : {results.secretary2.candidateG} </li>
                    <li>Candidate H : {results.secretary2.candidateH} </li>
                    </ul>
                </p>
                <p>
                    <h5>Treasurer</h5>
                    <ul>
                    <li>Candidate I : {results.treasurer.candidateI} </li>
                    <li>Candidate J : {results.treasurer.candidateJ} </li>
                    </ul>
                </p>  
            </div>
        }
    </>
  )
}

export default Results