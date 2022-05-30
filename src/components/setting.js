import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Spinner, Card, Button, Container } from "react-bootstrap";

export default function Edit() {
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios.get(`https://api.github.com/users/${id}`).then((res) => {
      setDetails(res?.data);
      setLoading(false);
    });
  }, []);
  if (loading) {
    return (
      <Spinner
        animation="border"
        variant="primary"
        style={{ margin: "100px" }}
      />
    );
  }
  return (
    <div>
      {/* <img src={details?.avatar_url} />
      <div>Repo URL: {details?.repos_url}</div> */}
      <Container>
        <Card>
          <center>
            <Card.Img
              variant="top"
              src={details?.avatar_url}
              style={{ width: "400px", height: "300px" }}
            />
          </center>

          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>ID:{details?.id}</Card.Text>
            <Card.Text>Name:{details?.name}</Card.Text>

            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
