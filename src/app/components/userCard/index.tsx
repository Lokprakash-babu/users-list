"use client";
import Address from "./Address";
import { Card } from "antd";
import Edit from "./ActionContainer/Edit";
import Remove from "./ActionContainer/Remove";
import Like from "./ActionContainer/Like";
import Avatar from "./Avatar";

const UserCard = ({ id }) => {
  return (
    <Card
      style={{
        margin: "15px",
        border: "1px solid #e8e8e8",
      }}
      cover={<Avatar id={id} />}
      className="rounded-none"
      actions={[
        <div key="like" className="text-[20px]">
          <Like id={id} />
        </div>,
        <div key="edit" className="text-[20px]">
          <Edit id={id} />
        </div>,
        <div key="remove" className="text-[20px]">
          <Remove id={id} />
        </div>,
      ]}
    >
      <Address id={id} />
    </Card>
  );
};

export default UserCard;
