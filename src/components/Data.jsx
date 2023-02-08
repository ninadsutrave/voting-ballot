import React from 'react';
import Table from 'react-bootstrap/Table';

const Data = ({list, checked}) => {

    const generateToken = (voter) => (e) => {
        e.preventDefault()
        console.log(voter)
    
        axios.post(process.env.REACT_APP_BACKEND_URL + 'admin/createPassword', {
          name: voter.name,
          pehchaanId: voter.pehchaanId
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

  return (
    <div>
    {
        list && 
        <Table striped bordered hover>
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
                                <td>{index+1}</td>
                                <td>{voter.name}</td>
                                <td><button className="mail-button" onClick={generateToken(voter)}>Send Token</button></td>
                                <td><strong>{(voter.voted)?"Voted":"-"}</strong></td>
                                </tr>
                            }
                        }
                        else {        
                            return <tr>
                                <td>{index+1}</td>
                                <td>{voter.name}</td>
                                <td><button className="mail-button" onClick={generateToken(voter)}>Send Token</button></td>
                                <td><strong>{(voter.voted)?"Voted":"-"}</strong></td>
                            </tr>
                        }
                    })
                }
            </tbody>
        </Table>
    }
    </div>
  )
}

export default Data