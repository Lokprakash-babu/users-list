import { useUserContext } from "@/app/context/UserContext";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";

const Like = ({ user }) => {
  const { handleLike } = useUserContext();
  const currentUser = user;

  const OnClickLike = () => handleLike(user.id);
  if (currentUser?.isLiked) {
    return (
      <HeartFilled key="like" style={{ color: "red" }} onClick={OnClickLike} />
    );
  }
  return (
    <HeartOutlined key="like" style={{ color: "red" }} onClick={OnClickLike} />
  );
};

export default Like;
