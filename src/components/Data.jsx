import React from 'react';
import './Data.css';

const Data = ({list, checked}) => {

    const generateToken = (voter) => (e) => {
        e.preventDefault()
        console.log(voter)
    
        axios.post(import.meta.env.VITE_BASE_URL + 'admin/createPassword', {
          name: voter.name,
          pehchaanId: voter.pehchaanId
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

  return (
    <div className="table-wrapper">
    {
        list && 
        <table striped bordered hover>
            <thead>
                <tr>
                <th>Sr. No.</th>
                <th>Name</th>
                <th>Send Token</th>
                <th>Status</th>
                </tr>
            </thead>
            
            <tbody>
                {
                    list.map((voter, index) => {
                        if(checked) {
                            if(!voter.voted) {
                                return <tr>
                                <td className={"data"+index}>{index+1}</td>
                                <td className={"data"+index}>{voter.name}</td>
                                <td className={"data"+index}><button className="mail-button" onClick={generateToken(voter)}>Send Token</button></td>
                                <td className={"data"+index}><strong>{(voter.voted)?"Voted":"-"}</strong></td>
                                </tr>
                            }
                        }
                        else {        
                            return <tr>
                                <td className={"data"+index}>{index+1}</td>
                                <td className={"data"+index}>{voter.name}</td>
                                <td className={"data"+index+" buttons"}><button className="mail-button" onClick={generateToken(voter)}>Send Token</button></td>
                                <td><strong>{(voter.voted)?"Voted":"-"}</strong></td>
                            </tr>
                        }
                    })
                }
            </tbody>
        </table>
    }
    </div>
  )
}

export default Data