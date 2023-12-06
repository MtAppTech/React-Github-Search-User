import React from "react";
import { Col, Card, Button, Row } from "react-bootstrap";

const UserInfo = ({ dataAPI }) => {

  const {name,html_url, avatar_url, login}=dataAPI
  return (
    <Row xs={2} md={3} lg={3} className="mt-4 justify-content-center">
      <Col>
        <Card>
          <Card.Img variant="top" src={avatar_url} />
          <Card.Body>
            <Card.Text> {`${login} (${name})`} </Card.Text>
            <Button
              href={html_url}
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
