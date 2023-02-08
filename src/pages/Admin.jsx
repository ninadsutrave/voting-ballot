import React, { useState } from 'react';
import axios from 'axios';
import Filter from "../components/Filter";
import Results from "../components/Results";
import Data from "../components/Data";
import './Admin.css';

const Admin = () => {

  const [list, setList] = useState();
  const [checked, setChecked] = useState(false);
  const [show, setShow] = useState(false);
  const [results, setResults] = useState({
    president: {
      candidateA: 0,
      candidateB: 0
    }, 
    vicePresident: {
      candidateC: 0,
      candidateD: 0
    }, 
    secretary1: {
      candidateE: 0,
      candidateF: 0
    },
    secretary2: {
      candidateG: 0,
      candidateH: 0
    },
    treasurer: {
      candidateI: 0,
      candidateJ: 0
    }
  })

  useEffect(() => {

    axios.get(process.env.REACT_APP_BACKEND_URL + 'admin/viewVoters')
    .then(res => setList(res.data))
    .catch(err => console.log(err))

  }, [])

  const debounceFunc = (func, delay) => {
    let timer;
     return function(...args) {
        const context = this;
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(context, args);
        }, delay)
      }
 }

 const handleCheck = () => {
    setChecked(!checked)
  }

  const showResults = () => {

    const date = new Date();
    const last = new Date(localStorage.getItem('Last'));

    if(last) { 
      if((date.getTime() - last.getTime()) < 300000)
        return;
    }

    localStorage.setItem('Last', date);
    const time = date.toTimeString();

    setShow(true);
    setTime(time.substr(0, time.indexOf(' ')));

    axios.get(process.env.REACT_APP_BACKEND_URL + 'admin/viewResults')
    .then(res => {
      console.log(res.data[0])
      setResults({
        
        president: {
          candidateA: res.data[0].candidateA,
          candidateB: res.data[0].candidateB
        }, 
        vicePresident: {
          candidateC: res.data[0].candidateC,
          candidateD: res.data[0].candidateD
        }, 
        secretary1: {
          candidateE: res.data[0].candidateE,
          candidateF: res.data[0].candidateF
        },
        secretary2: {
          candidateG: res.data[0].candidateG,
          candidateH: res.data[0].candidateH
        },
        treasurer: {
          candidateI: res.data[0].candidateI,
          candidateJ: res.data[0].candidateJ
        }
      })
    })
    .catch(err => console.log(err))

}

  const handleChange = (e) => {
    
    axios.get(process.env.REACT_APP_BACKEND_URL + 'admin/viewVoters?searchItem='+e.target.value)
    .then(res => setList(res.data))
    .catch(err => console.log(err))

  }

  const optimisedSearchHandler = debounceFunc(handleChange, 500)

  return (
    <div className="admin-page">
      <Results show={show} showResults={showResults} results={results} time={time} />
      <Filter optimisedSearchHandler={optimisedSearchHandler} checked={checked} handleCheck={handleCheck} />
      <Data list={list} checked={checked} />
    </div>
  );
};

export default Admin;
