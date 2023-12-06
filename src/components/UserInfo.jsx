import React from "react";
import { Col, Card, Button, Row } from "react-bootstrap";

const UserInfo = ({ dataAPI }) => {

  const {name, avatar_url}=dataAPI
  return (
    <Row xs={2} md={3} lg={3} className="mt-4 justify-content-center">
      <Col>
        <Card>
          <Card.Img variant="top" src={avatar_url} />
          <Card.Body>
            <Card.Text> {`${dataAPI.login} (${name})`} </Card.Text>
            <Button
              href={dataAPI.html_url}
              target="true"
              style={{ borderRadius: "50px" }}
              variant="primary"
            >
              VIEW PROFILE
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default UserInfo;
