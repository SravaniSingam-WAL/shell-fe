import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { getTenantId, getToken,getBrandName, getName } from "./utils";
import { API_URL } from "./config";
import { getBaseUrl } from "./config";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const navigate = useNavigate();
    const [data,setData] = useState([])
    const brandName=getBrandName()
    const name = getName()
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
    <h4 className="welcomeText">Welcome {name}! welcome to the tenant management app.</h4>
      <p className="homeHeading">Explore Available Applications, click on cards below to to access specific applications.</p>    
     <div className="container">
      <div className="row">
        {data.map((app, index) => (
          app.isAccess && (
            <div key={index} className="col-md-3 mb-3">
              <div className="card custom-card" style={{ cursor: 'pointer' }} onClick={() => { console.log(`Clicked Helo on ${app.application.name} url ${app.application}`);
              const baseUrl = getBaseUrl(app.application.name);
              console.log(baseUrl, 'Base Url,----------');
              window.location.replace(`${baseUrl}${app.application.url}`)
              }}>
                <div className="card-body">
                <span
                className="app-name"
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  console.log(`Clicked Helo on ${app.application.name} url ${app.application}`);
                  const baseUrl = getBaseUrl(app.application.name);
                  console.log(baseUrl, 'Base Url,----------');
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

