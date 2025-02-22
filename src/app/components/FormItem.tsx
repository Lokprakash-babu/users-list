import { Form, Input } from "antd";

const FormItem = ({ label, name, rules }) => {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={rules}
      labelCol={{
        xs: { span: 24 },
        sm: { span: 8 },
      }}
      wrapperCol={{
        xs: { span: 24 },
        sm: { span: 16 },
      }}
    >
      <Input />
    </Form.Item>
  );
};

export default FormItem;
