import React, { useState, useEffect } from "react";
import { Image, Container, Row } from "react-bootstrap";
import NotFound from "../assets/404.gif";
import UserInfo from "../components/UserInfo";
import InputSearch from "../components/InputSearch";
import axios from "axios";

const Home = () => {
  //  https://api.github.com/users/mtapptech
  const [query, setQuery] = useState("mtapptech");
  const [dataAPI, setDataAPI] = useState("");
  const [error, setError] = useState(false);
  const url = `https://api.github.com/users/${query}`;

  const getData = async () => {
    try {
      const { data } = await axios.get(url);
      console.log(data.avatar_url);
      setDataAPI(data);  //setDataAPI(data.avatar_url);
      setError(false);
    } catch (error) {
      setError(true);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <InputSearch />
      <UserInfo />
      {error === true ? 
      (<Row className="justify-content-center h-25 w-100"><Image src={NotFound} className="h-25 w-50" alt="User not found" /></Row>) 
      : 
      (<Row className="justify-content-center h-25 w-100"><Image src={dataAPI.avatar_url} className="h-25 w-50" alt="User not found" /></Row>) 
      }
    </Container>
  );
};

export default Home;

//<Row className="justify-content-center h-25 w-100"><Image src={NotFound} className="h-25 w-50" alt="User not found" /></Row>
