import Layout from '../components/Layout';
import axios from 'axios'
import React,{useEffect} from 'react'

export const HomePage = () => {
  const getUserData = async () => {
    try{
      // const res = 
      await axios.post("/api/v1/user/getUserData",
      {},
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
      );
    }
    catch(error){
      console.log(error)
    }
  };
  useEffect(() => {
    getUserData();
  },[]);
  return (
    <Layout>
        <h1>Home page</h1>
    </Layout>
  )
};
