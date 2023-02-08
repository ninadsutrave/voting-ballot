import React from 'react'

const Results = ({show, showResults, results, time}) => {
  return (
    <>
        <button className="view-results button-color" variant="primary" onClick={showResults}>View Results</button>
        {show &&
            <div className="results">
                <p><h4>Results as of now ({time}): </h4></p>
                <p>
                    <h5>President</h5>
                    <ul>
                    <li>Katyayani Tiwari : {results.president.tiwari} </li>
                    <li>Chenaram Kumawat : {results.president.chenaram} </li>
                    </ul>
                </p> 
                <p>
                    <h5>Vice President</h5>
                    <ul>
                    <li>Katyayani Tiwari : {results.vicePresident.tiwari} </li>
                    <li>Chenaram Kumawat : {results.vicePresident.chenaram} </li>
                    </ul>
                </p> 
                <p>
                    <h5>Secretary 1</h5>
                    <ul>
                    <li>Chandan Kumar Yadav : {results.secretary1.chandan} </li>
                    <li>Vinit Kujur : {results.secretary1.vinit} </li>
                    </ul>
                </p> 
            </div>
        }
    </>
  )
}

export default Results