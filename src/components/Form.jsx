import React, { useState } from 'react';
import axios from 'axios';
import votingImage from '../assets/castvote.png';
import './Form.css'

const Form = () => {

  const [formDetails, setFormDetails] = useState({
    secretToken: "",
    president: "",
    vice: "",
    secretary1: "",
    secretary2: "",
    treasurer: ""
})

const [checked, setChecked] = useState(new Array(15).fill(false))
  
  const handleSubmit = (e) => {

    console.log(formDetails)

    e.preventDefault()
    axios.patch(import.meta.env.VITE_BASE_URL + 'admin/updateVote', formDetails)
    .then(res => {
        console.log(res)
      if(res.data === "Successful") {
        setFormDetails({
          secretToken: "",
          president: "",
          vice: "",
          secretary1: "",
          secretary2: "",
          treasurer: ""
        })
        setChecked(new Array(15).fill(false))
        alert("Successfully Submitted")
      }
      else if(res.data === "Voted") {
        setFormDetails({
          secretToken: "",
          president: "",
          vice: "",
          secretary1: "",
          secretary2: "",
          treasurer: ""
        })
        setChecked(new Array(15).fill(false))
        alert("You can only vote once!")
      }
      else {
        alert("Invalid token")
      }
    })
    .catch(err => {
      alert("Invalid token")
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
                    <input required={true} type="radio" id="A" name="president" value="Mr. Sugam Kumar" 
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
                    <label for="html">Mr. Sugam Kumar</label><br/>
                </div>

                <div className="radio-button">
                    <input required={true} type="radio" id="B" name="president" value="Ms. Reetika" 
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
                    <label for="css">Ms. Reetika</label><br/>
                </div>

                <div className="radio-button">
                    <input required={true} type="radio" id="C" name="president" value="Mr. Shivam" 
                        checked={checked[2]}
                        onChange={(e) => {
                            let prev = {...formDetails}
                            prev.president = "C"
                            setFormDetails(prev)
                            prev = [...checked]
                            prev[0] = false 
                            prev[1] = false
                            prev[2] = true
                            setChecked(prev)
                        }}
                    />
                    <label for="html">Mr. Shivam</label><br/><br/>
                </div>
                
                <label>Contesting candidates for <strong>Vice President</strong> <span className="mandatory">*</span></label><br/>
                    <input required={true} type="radio" id="D" name="vicepresident" value="Ms. Reetika" 
                        checked={checked[3]}
                        onChange={(e) => {
                            let prev = {...formDetails}
                            prev.vice = "D"
                            setFormDetails(prev)
                            prev = [...checked]
                            prev[3] = true
                            prev[4] = false
                            prev[5] = false
                            prev[6] = false
                            setChecked(prev)
                        }}
                    />
                    <label for="css">Ms. Reetika</label><br/>
                    <input required={true} type="radio" id="E" name="vicepresident" value="Mr. Shivam" 
                        checked={checked[4]}
                        onChange={(e) => {
                            let prev = {...formDetails}
                            prev.vice = "E"
                            setFormDetails(prev)
                            prev = [...checked]
                            prev[3] = false 
                            prev[4] = true
                            prev[5] = false
                            prev[6] = false
                            setChecked(prev)
                        }}
                    />
                    <label for="css">Mr. Shivam</label><br/>
                    <input required={true} type="radio" id="F" name="vicepresident" value="Ms. Yashaswini Vajja" 
                        checked={checked[5]}
                        onChange={(e) => {
                            let prev = {...formDetails}
                            prev.vice = "F"
                            setFormDetails(prev)
                            prev = [...checked]
                            prev[3] = false 
                            prev[4] = false
                            prev[5] = true
                            prev[6] = false
                            setChecked(prev)
                        }}
                    />
                    <label for="css">Ms. Yashaswini Vajja</label><br/>
                    <input required={true} type="radio" id="G" name="vicepresident" value="Mr. Pratham" 
                        checked={checked[6]}
                        onChange={(e) => {
                            let prev = {...formDetails}
                            prev.vice = "G"
                            setFormDetails(prev)
                            prev = [...checked]
                            prev[3] = false 
                            prev[4] = false
                            prev[5] = false
                            prev[6] = true
                            setChecked(prev)
                        }}
                    />
                    <label for="css">Mr. Pratham</label><br/><br/>


                <label>Contesting candidates for <strong>Secretary 1</strong> <span className="mandatory">*</span></label><br/>
                    <input required={true} type="radio" id="H" name="secretary1" value="Ms. Yashaswini Vajja" 
                        checked={checked[7]}
                        onChange={(e) => {
                            let prev = {...formDetails}
                            prev.secretary1 = "H"
                            setFormDetails(prev)
                            prev = [...checked]
                            prev[7] = true 
                            prev[8] = false
                            prev[9] = false
                            setChecked(prev)
                        }}
                    />
                    <label for="html">Ms. Yashaswini Vajja</label><br/>
                    <input required={true} type="radio" id="I" name="secretary1" value="Mr. Pratham" 
                        checked={checked[8]}
                        onChange={(e) => {
                            let prev = {...formDetails}
                            prev.secretary1 = "I"
                            setFormDetails(prev)
                            prev = [...checked]
                            prev[7] = false 
                            prev[8] = true
                            prev[9] = false
                            setChecked(prev)
                        }}
                    />
                    <label for="css">Mr. Pratham</label><br/>
                    <input required={true} type="radio" id="J" name="secretary1" value="Mr. Nehal Sonkar" 
                        checked={checked[9]}
                        onChange={(e) => {
                            let prev = {...formDetails}
                            prev.secretary1 = "J"
                            setFormDetails(prev)
                            prev = [...checked]
                            prev[7] = false 
                            prev[8] = false
                            prev[9] = true
                            setChecked(prev)
                        }}
                    />
                    <label for="css">Mr. Nehal Sonkar</label><br/><br/>

                    <label>Contesting candidates for <strong>Secretary 2</strong> <span className="mandatory">*</span></label><br/>
                    <input required={true} type="radio" id="K" name="secretary2" value="Mr. Sugam Kumar" 
                        checked={checked[10]}
                        onChange={(e) => {
                            let prev = {...formDetails}
                            prev.secretary2 = "K"
                            setFormDetails(prev)
                            prev = [...checked]
                            prev[10] = true 
                            prev[11] = false
                            prev[12] = false
                            prev[13] = false
                            setChecked(prev)
                        }}
                    />
                    <label for="html">Mr. Sugam Kumar</label><br/>
                    <input required={true} type="radio" id="L" name="secretary2" value="Mr. Aditya Mote" 
                        checked={checked[11]}
                        onChange={(e) => {
                            let prev = {...formDetails}
                            prev.secretary2 = "L"
                            setFormDetails(prev)
                            prev = [...checked]
                            prev[10] = false 
                            prev[11] = true
                            prev[12] = false
                            prev[13] = false
                            setChecked(prev)
                        }}
                    />
                    <label for="css">Mr. Aditya Mote</label><br/>
                    <input required={true} type="radio" id="M" name="secretary2" value="Mr. Nehal Sonkar" 
                        checked={checked[12]}
                        onChange={(e) => {
                            let prev = {...formDetails}
                            prev.secretary2 = "M"
                            setFormDetails(prev)
                            prev = [...checked]
                            prev[10] = false 
                            prev[11] = false
                            prev[12] = true
                            prev[13] = false
                            setChecked(prev)
                        }}
                    />
                    <label for="css">Mr. Nehal Sonkar</label><br/>
                    <input required={true} type="radio" id="N" name="secretary2" value="Mr. Shankar Lal" 
                        checked={checked[13]}
                        onChange={(e) => {
                            let prev = {...formDetails}
                            prev.secretary2 = "N"
                            setFormDetails(prev)
                            prev = [...checked]
                            prev[10] = false 
                            prev[11] = false
                            prev[12] = false
                            prev[13] = true
                            setChecked(prev)
                        }}
                    />
                    <label for="css">Mr. Shankar Lal</label><br/><br/>

                    <label>Contesting candidates for <strong>Treasurer</strong> <span className="mandatory">*</span></label><br/>
                    <input required={true} type="radio" id="O" name="treasurer" value="Mr. Aditya Mote" 
                        checked={checked[14]}
                        onChange={(e) => {
                            let prev = {...formDetails}
                            prev.treasurer = "O"
                            setFormDetails(prev)
                            prev = [...checked]
                            prev[14] = true 
                            setChecked(prev)
                        }}
                    />
                    <label for="html">Mr. Aditya Mote</label><br/><br/>
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