"use client";
import Address from "./Address";
import { Card } from "antd";
import Edit from "./ActionContainer/Edit";
import Remove from "./ActionContainer/Remove";
import Like from "./ActionContainer/Like";
import Avatar from "./Avatar";

const UserCard = ({ user }) => {
  return (
    <Card
      style={{
        margin: "15px",
        border: "1px solid #e8e8e8",
      }}
      cover={<Avatar user={user} />}
      className="rounded-none"
      actions={[
        <div key="like" className="text-[20px]">
          <Like user={user} />
        </div>,
        <div key="edit" className="text-[20px]">
          <Edit user={user} />
        </div>,
        <div key="remove" className="text-[20px]">
          <Remove id={user.id} />
        </div>,
      ]}
    >
      <Address user={user} />
    </Card>
  );
};

export default UserCard;
