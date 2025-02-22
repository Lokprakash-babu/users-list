import { GlobalOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";

const AddressFieldDisplay = ({ icon, value }) => {
  return (
    <div className="flex items-center gap-[10px] text-[rgba(0,0,0,0.65)] text-[14px] mb-[5px]">
      <div className="text-[18px] flex">{icon}</div>
      <span>{value}</span>
    </div>
  );
};
const Address = ({ user }) => {
  const email = user?.email;
  const website = user?.website;
  const phone = user?.phone;
  const name = user?.name;
  return (
    <div>
      <h3 className="font-bold mb-[0.5em] text-[16px]">{name}</h3>
      <AddressFieldDisplay
        icon={<MailOutlined width={"1em"} height={"1em"} />}
        value={email}
      />
      <AddressFieldDisplay
        icon={<PhoneOutlined width={"1em"} height={"1em"} />}
        value={phone}
      />
      <AddressFieldDisplay
        icon={<GlobalOutlined width={"1em"} height={"1em"} />}
        value={website}
      />
    </div>
  );
};

export default Address;
