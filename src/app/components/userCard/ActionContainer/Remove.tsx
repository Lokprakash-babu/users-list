import { useUserContext } from "@/app/context/UserContext";
import { DeleteFilled } from "@ant-design/icons";

const Remove = ({ id }) => {
  const { handleRemove } = useUserContext();
  return <DeleteFilled key="delete" onClick={() => handleRemove(id)} />;
};

export default Remove;
