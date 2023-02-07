import React from 'react'

const Radio = ({position, candidateName, checked, setChecked, formDetails, setFormDetails, isLast}) => {
  return (
    <>
    <input required="required" type="radio" id={candidateName.substring(0, candidateName.indexOf(' '))} name={position} value={candidateName} 
            checked={checked[0]}
            onChange={(e) => {
                let prev = {...formDetails}
                prev.president = "A"
                setFormDetails(prev)
                prev = [...checked]
                prev[0] = true 
                prev[1] = false
                setChecked(prev)
            }}
        />
        <label for="html">{candidateName}</label><br/>
        {isLast && <br/>}
    </>
  )
}

export default Radio
