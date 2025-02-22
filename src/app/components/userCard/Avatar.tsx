import { useUserContext } from "@/app/context/UserContext";
import Image from "next/image";

const Avatar = ({ id }) => {
  const { users } = useUserContext();
  const user = users.find((user) => user.id === id);
  const userName = user?.username;
  return (
    <div className="bg-[#f5f5f5] w-full !flex justify-center">
      <Image
        src={`https://api.dicebear.com/9.x/adventurer/svg?seed=${userName}`}
        alt={user?.name || "avatar"}
        width={200}
        height={200}
      />
    </div>
  );
};

export default Avatar;
