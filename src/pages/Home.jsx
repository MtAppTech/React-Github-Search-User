import React, { useState, useEffect } from "react";
import { Image, Container, Row } from "react-bootstrap";
import NotFound from "../assets/404.gif";
import UserInfo from "../components/UserInfo";
import InputSearch from "../components/InputSearch";
import axios from "axios";

const Home = () => {
  //  https://api.github.com/users/mtapptech
  //const [query, setQuery] = useState("mtapptech");
  const [dataAPI, setDataAPI] = useState("");
  const [error, setError] = useState(false);
  //const url = `https://api.github.com/users/${query}`;

  const getData = async (query) => {
    try {
      const { data } = await axios.get(`https://api.github.com/users/${query}`);
      console.log(data);
      setDataAPI(data);  //setDataAPI(data.avatar_url);
      setError(false);
    } catch (error) {
      setError(true);
    }
  };
  useEffect(() => {
   // getData("mtapptech");
  }, []);

  return (
    <Container>
      <InputSearch getData={getData} />
      
      {error === true ? 
      (<Row className="justify-content-center h-25 w-100"><Image src={NotFound} className="h-25 w-50" alt="User not found" /></Row>) 
      : 
      (<UserInfo dataAPI={dataAPI} />) 
      }
    </Container>
  );
};

export default Home;

//<Row className="justify-content-center h-25 w-100"><Image src={NotFound} className="h-25 w-50" alt="User not found" /></Row>
