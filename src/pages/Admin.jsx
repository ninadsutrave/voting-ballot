import React, { useState, useEffect } from 'react';
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
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
    F: 0,
    G: 0,
    H: 0,
    I: 0,
    J: 0,
    K: 0,
    L: 0,
    M: 0,
    N: 0,
    O: 0
  })

  useEffect(() => {

    axios.get(import.meta.env.VITE_BASE_URL + 'admin/viewVoters')
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

    setShow(true);

    axios.get(import.meta.env.VITE_BASE_URL + 'admin/viewResults')
    .then(res => {
      console.log(res.data[0])
      setResults({
        A: res.data[0].A,
        B: res.data[0].B,
        C: res.data[0].C,
        D: res.data[0].D,
        E: res.data[0].E,
        F: res.data[0].F,
        G: res.data[0].G,
        H: res.data[0].H,
        I: res.data[0].I,
        J: res.data[0].J,
        K: res.data[0].K,
        L: res.data[0].L,
        M: res.data[0].M,
        N: res.data[0].N,
        O: res.data[0].O
      })
    })
    .catch(err => console.log(err))
  }

  const handleChange = (e) => {
    axios.get(import.meta.env.VITE_BASE_URL + 'admin/viewVoters?searchItem='+e.target.value)
    .then(res => setList(res.data))
    .catch(err => console.log(err))
  }

  const optimisedSearchHandler = debounceFunc(handleChange, 500)

  return (
    <div className="admin-page">
        <Results show={show} showResults={showResults} results={results} />
        <Filter optimisedSearchHandler={optimisedSearchHandler} checked={checked} handleCheck={handleCheck} />
        <Data list={list} checked={checked} />
    </div>
  );
};

export default Admin;
