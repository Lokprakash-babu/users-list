"use client";

import { Row, Col } from "antd";
import { useUserContext } from "../context/UserContext";
import UserCard from "./userCard";

const DisplayUserCards = () => {
  const { users } = useUserContext();
  return (
    <Row>
      {users.map((user) => (
        <Col key={user.id} xs={24} sm={24} md={8} lg={8} xl={6}>
          <UserCard user={user} />
        </Col>
      ))}
    </Row>
  );
};

export default DisplayUserCards;
