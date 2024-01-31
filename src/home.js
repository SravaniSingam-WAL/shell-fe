import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { getTenantId, getToken,getBrandName } from "./utils";
import { API_URL } from "./config";
import { getBaseUrl } from "./config";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const navigate = useNavigate();
    const [data,setData] = useState([])
    const brandName=getBrandName()
    
  useEffect(()=>{
      fetchData()
  },[]);
  const fetchData = async () =>{
    try{
      const token=getToken()
      const tenantId = getTenantId()
      console.log(tenantId,'tenantId')
      const result = await axios.get(
        `${API_URL}/api/tenant/${tenantId}/permissions`,
        {
          headers: {
            Authorization: token,
          },
        
        }
      );
      console.log(result,'result data')
      console.log(result.data.data,'result data')
      setData(result.data.data)
     }
    catch(error){
      console.log('Error fetching data: ',error)
    }
  }
  return (
    <div>
    <br></br>
      <h2>{brandName}</h2>
      <h4>Click on Below links to open particular app</h4>
      <br/>
      <br/>
      <br/>
      <div className="container">
      <div className="row">
        {data.map((app, index) => (
          app.isAccess && (
            <div key={index} className="col-md-3 mb-3">
              <div className="card" style={{ cursor: 'pointer' }} onClick={() => console.log(`Clicked on ${app.application.name}`)}>
                <div className="card-body">
                <span
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  console.log(`Clicked on ${app.application.name}`);
                  const baseUrl = getBaseUrl(app.application.name);
                  console.log(baseUrl, 'Base Url');
                  window.location.replace(`${baseUrl}${app.application.url}`)
                }}
              >
                {app.application.name}
              </span>
            </div>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
     </div>
  );
};

export default Home;

