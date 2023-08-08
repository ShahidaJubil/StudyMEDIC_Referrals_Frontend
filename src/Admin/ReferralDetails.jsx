import axios from 'axios';
import React, { useEffect, useState } from 'react'

function ReferralDetails() {
    const [user, setUser] = useState([]);
    const url = `${process.env.REACT_APP_BASE_URL}/api/admin/referrals`;
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(url);
          setUser(response.data);
          console.log("Referral informations", response);
        } catch (error) {
          console.log(error.response.data);
        }
      };
      fetchData();
    }, []);
    console.log("array",user?.allReferrals)
  return (
    <div>
 <div>
        <h3><b> All Referrals </b></h3>
        <table className="uk-table uk-table-striped referTable">
    <thead>
        <tr className='tableHeading'>
            <th>Sl No</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Status</th>
        </tr>
    </thead>
    <tbody>
          {user?.allReferrals?.map((item,index) => (
            <tr key={item.id}>
               <td>{index + 1}</td>
               
              <td>{item?.fname ? item.fname : 'null'}</td>
              <td>{item?.lname ? item.lname : 'null'}</td>
              <td>{item?.email ? item.email : 'null'}</td>
              <td>
                 
                   
                        <thead>
                        <tr>
                        <th>Email</th>
                        <th> Course</th>
                        <th>Duration</th>
                        </tr>
                        </thead>
                        {item.refers.map((refer, referIndex) => (
                      <div key={referIndex}>
                        <tbody>
                            <td>{refer.rfname}</td>
                            <td>{refer.rlname}</td>
                            <td> {refer.remail}</td>
                            <td>{refer.rcourse}</td>
                            <td>{refer.rduration}</td>
                        </tbody>
                         
                      </div>
                    ))}
                
                </td>
            </tr>
          ))}
        </tbody>
</table>

    </div>
    </div>
  )
}

export default ReferralDetails