import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const InputSearch = ({ getData }) => {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    getData(inputValue);
    console.log("Gönderilen Değer: ", inputValue);
  };

 

 
  
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div className="row">
      <div className="col-md-4 mx-auto">
      <InputGroup className="mb-3 w-100">
            <Form.Control
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Github's username"
              aria-label="Github's username"
              aria-describedby="basic-addon2"
            />
            <Button
              variant="outline-secondary"
              id="button-addon2"
              type="submit"
              onClick={()=>{
                getData(inputValue)
              }}
            >
              Search
            </Button>
          </InputGroup>
      </div>
    </div>
  );
};

export default InputSearch;
