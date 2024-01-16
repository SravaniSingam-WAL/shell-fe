import React, { useState, useEffect } from "react";
import axios from "axios";
import { getBrandName, getTenantId, getToken } from "./utils";

const Home = () => {

    const [data,setData] = useState([])
    const [brandName, setBrandName]=useState(getBrandName())
 
  useEffect(()=>{
      fetchData()
  },[]);
  const fetchData = async () =>{
    try{
      const token=getToken()
      const tenantId = getTenantId()
      console.log(tenantId,'tenantId')
      const result = await axios.get(
        `http://localhost:3030/api/tenant/${tenantId}/permissions`,
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
      <h2>Home Page</h2>
      <h2>Click on Below links to open particular app</h2>
      BrandName : <strong>{brandName}</strong>
      <br/>
      <br/>
      <br/>
      <div>
        {data.map((app, index) => (
          app.isAccess && (
            <div key={index}>
              <span
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  console.log(`Clicked on ${app.appName}`);
                }}
              >
                {app.appName}
              </span>
              <br />
              <br />
            </div>
          )
        ))}
      </div>
     </div>
  );
};

export default Home;

