import { useUserContext } from "@/app/context/UserContext";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";

const Like = ({ id }) => {
  const { handleLike, users } = useUserContext();
  const currentUser = users.find((user) => user.id === id);
  if (currentUser?.isLiked) {
    return (
      <HeartFilled
        key="like"
        style={{ color: "red" }}
        onClick={() => handleLike(id)}
      />
    );
  }
  return (
    <HeartOutlined
      key="like"
      style={{ color: "red" }}
      onClick={() => handleLike(id)}
    />
  );
};

export default Like;
