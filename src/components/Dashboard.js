import React from "react";
import "./dashboard.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Table, Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [modalShow, setModalShow] = React.useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://api.github.com/users").then((res) => setData(res.data));
  }, []);
  console.log("ghfjgh", data);
  const goTOEdit = (id) => {
    navigate(`/edit/${id}`);
  };
  return (
    <div>
      <Container>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>sn</th>
              <th>name </th>
              <th>reposurl </th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => {
              return (
                <tr>
                  <td>{i}</td>
                  <td>{item.login}</td>
                  <td>{item.repos_url}</td>
                  <td key={item.id}>
                    <Button variant="primary" onClick={() => goTOEdit(i)}>
                      View
                    </Button>
                    {/* <Button onClick={() => editHandler(i)}>Edit</Button> */}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Dashboard;
