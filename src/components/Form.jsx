import React, { useState } from 'react';
import axios from 'axios';
import votingImage from '../assets/castvote.png';
import './Form.css'

const Form = () => {

  const [formDetails, setFormDetails] = useState({
    secretToken: "",
    president: "",
    vice: "",
    secretary: ""
})

const [checked, setChecked] = useState(new Array(15).fill(false))
  

  const handleSubmit = (e) => {

    e.preventDefault()
    axios.patch(process.env.REACT_APP_BACKEND_URL + 'admin/updateVote', formDetails)
    .then(res => {
      if(res.data === "Successful") {
        setFormDetails({
          secretToken: "",
          president: "",
          vice: "",
          secretary: ""
        })
        setChecked(new Array(15).fill(false))
        alert("Successfully Submitted")
      }
      else if(res.data === "Voted") {
        setFormDetails({
          secretToken: "",
          president: "",
          vice: "",
          secretary: ""
        })
        setChecked(new Array(15).fill(false))
        alert("You can only vote once!")
      }
      else {
        alert("Invalid credentials")
      }
    })
    .catch(err => {
      alert("Something went wrong")
    })

  }

  return (
    <div className="voting-section" id="voting-section">
        <div className="img-wrapper">
            <img alt="Voting Image" src={votingImage} />
        </div>
        <div className="form-wrapper">
            <h2 className="form-heading">VOTING BALLOT</h2>
            <form action="submit" className="voter-form" onSubmit={handleSubmit}>
            <div className="contents">

                <label for="fname">Secret Token <span className="mandatory">*</span></label><br/>
                <input 
                className="key-input"
                required={true} 
                type="text" 
                id="secretToken" 
                name="secretToken" 
                placeholder="Enter the Secret Token" 
                value={formDetails.secretToken}
                onChange={(e) => {
                    let prev = {...formDetails}
                    prev.secretToken = e.target.value
                    setFormDetails(prev)
                }}
                /><br/><br/>

                <label>Contesting candidates for <strong>President</strong> <span className="mandatory">*</span></label><br/>

                <div className="radio-button">

                    <input required={true} type="radio" id="A" name="president" value="Candidate A" 
                        checked={checked[0]}
                        onChange={(e) => {
                            let prev = {...formDetails}
                            prev.president = "A"
                            setFormDetails(prev)
                            prev = [...checked]
                            prev[0] = true 
                            prev[1] = false
                            prev[2] = false
                            setChecked(prev)
                        }}
                    />
                    <label for="html">Candidate A</label><br/>
                </div>

                <div className="radio-button">
                    <input required={true} type="radio" id="B" name="president" value="Candidate B" 
                        checked={checked[1]}
                        onChange={(e) => {
                            let prev = {...formDetails}
                            prev.president = "B"
                            setFormDetails(prev)
                            prev = [...checked]
                            prev[0] = false
                            prev[1] = true
                            prev[2] = false
                            setChecked(prev)
                        }}
                    />
                    <label for="css">Candidate B</label><br/>
                </div>

                <div className="radio-button">
                    <input required={true} type="radio" id="nota" name="president" value="NOTA" 
                        checked={checked[2]}
                        onChange={(e) => {
                            let prev = {...formDetails}
                            prev.president = "NOTA"
                            setFormDetails(prev)
                            prev = [...checked]
                            prev[0] = false 
                            prev[1] = false
                            prev[2] = true
                            setChecked(prev)
                        }}
                    />
                    <label for="html">NOTA</label><br/><br/>
                </div>
                
                <label>Contesting candidates for <strong>Vice President</strong> <span className="mandatory">*</span></label><br/>
                    <input required={true} type="radio" id="C" name="vicepresident" value="Candidate C"
                        checked={checked[3]}
                        onChange={(e) => {
                            let prev = {...formDetails}
                            prev.vice = "C"
                            setFormDetails(prev)
                            prev = [...checked]
                            prev[3] = true 
                            prev[4] = false
                            prev[5] = false
                            setChecked(prev)
                        }}
                    />
                    <label for="html">Candidate C</label><br/>
                    <input required={true} type="radio" id="D" name="vicepresident" value="Candidate D" 
                        checked={checked[4]}
                        onChange={(e) => {
                            let prev = {...formDetails}
                            prev.vice = "D"
                            setFormDetails(prev)
                            prev = [...checked]
                            prev[3] = false 
                            prev[4] = true
                            prev[5] = false
                            setChecked(prev)
                        }}
                    />
                    <label for="css">Candidate D</label><br/>
                    <input required={true} type="radio" id="nota" name="vicepresident" value="NOTA" 
                        checked={checked[5]}
                        onChange={(e) => {
                            let prev = {...formDetails}
                            prev.vice = "NOTA"
                            setFormDetails(prev)
                            prev = [...checked]
                            prev[3] = false 
                            prev[4] = false
                            prev[5] = true
                            setChecked(prev)
                        }}
                    />
                    <label for="css">NOTA</label><br/><br/>


                <label>Contesting candidates for <strong>Secretary 1</strong> <span className="mandatory">*</span></label><br/>
                    <input required={true} type="radio" id="E" name="secretary1" value="Candidate E" 
                        checked={checked[6]}
                        onChange={(e) => {
                            let prev = {...formDetails}
                            prev.secretary = "E"
                            setFormDetails(prev)
                            prev = [...checked]
                            prev[6] = true 
                            prev[7] = false
                            prev[8] = false
                            setChecked(prev)
                        }}
                    />
                    <label for="html">Candidate E</label><br/>
                    <input required={true} type="radio" id="F" name="secretary1" value="Candidate F" 
                        checked={checked[7]}
                        onChange={(e) => {
                            let prev = {...formDetails}
                            prev.secretary = "F"
                            setFormDetails(prev)
                            prev = [...checked]
                            prev[6] = false 
                            prev[7] = true
                            prev[8] = false
                            setChecked(prev)
                        }}
                    />
                    <label for="css">Candidate F</label><br/>
                    <input required={true} type="radio" id="nota" name="secretary1" value="NOTA" 
                        checked={checked[8]}
                        onChange={(e) => {
                            let prev = {...formDetails}
                            prev.secretary = "NOTA"
                            setFormDetails(prev)
                            prev = [...checked]
                            prev[6] = false 
                            prev[7] = false
                            prev[8] = true
                            setChecked(prev)
                        }}
                    />
                    <label for="css">NOTA</label><br/><br/>

                    <label>Contesting candidates for <strong>Secretary 2</strong> <span className="mandatory">*</span></label><br/>
                    <input required={true} type="radio" id="G" name="secretary2" value="Candidate G" 
                        checked={checked[9]}
                        onChange={(e) => {
                            let prev = {...formDetails}
                            prev.secretary = "G"
                            setFormDetails(prev)
                            prev = [...checked]
                            prev[9] = true 
                            prev[10] = false
                            prev[11] = false
                            setChecked(prev)
                        }}
                    />
                    <label for="html">Candidate G</label><br/>
                    <input required={true} type="radio" id="H" name="secretary2" value="Candidate H" 
                        checked={checked[10]}
                        onChange={(e) => {
                            let prev = {...formDetails}
                            prev.secretary = "H"
                            setFormDetails(prev)
                            prev = [...checked]
                            prev[9] = false 
                            prev[10] = true
                            prev[11] = false
                            setChecked(prev)
                        }}
                    />
                    <label for="css">Candidate H</label><br/>
                    <input required={true} type="radio" id="nota" name="secretary2" value="NOTA" 
                        checked={checked[11]}
                        onChange={(e) => {
                            let prev = {...formDetails}
                            prev.secretary = "NOTA"
                            setFormDetails(prev)
                            prev = [...checked]
                            prev[9] = false
                            prev[10] = false
                            prev[11] = true
                            setChecked(prev)
                        }}
                    />
                    <label for="css">NOTA</label><br/><br/>

                    <label>Contesting candidates for <strong>Treasurer</strong> <span className="mandatory">*</span></label><br/>
                    <input required={true} type="radio" id="I" name="treasurer" value="Candidate I" 
                        checked={checked[12]}
                        onChange={(e) => {
                            let prev = {...formDetails}
                            prev.secretary = "I"
                            setFormDetails(prev)
                            prev = [...checked]
                            prev[12] = true 
                            prev[13] = false
                            prev[14] = false
                            setChecked(prev)
                        }}
                    />
                    <label for="html">Candidate I</label><br/>
                    <input required={true} type="radio" id="J" name="treasurer" value="Candidate J" 
                        checked={checked[13]}
                        onChange={(e) => {
                            let prev = {...formDetails}
                            prev.secretary = "I"
                            setFormDetails(prev)
                            prev = [...checked]
                            prev[12] = false
                            prev[13] = true
                            prev[14] = false
                            setChecked(prev)
                        }}
                    />
                    <label for="css">Candidate J</label><br/>
                    <input required={true} type="radio" id="nota" name="treasurer" value="NOTA" 
                        checked={checked[14]}
                        onChange={(e) => {
                            let prev = {...formDetails}
                            prev.secretary = "NOTA"
                            setFormDetails(prev)
                            prev = [...checked]
                            prev[12] = false
                            prev[13] = false
                            prev[14] = true
                            setChecked(prev)
                        }}
                    />
                    <label for="css">NOTA</label><br/><br/>

            </div>
            <div className="submitButton">
                <input className="submit-button" type="submit" value="Submit" />
            </div>
            </form>
        </div>
    </div>

  )
}

export default Form