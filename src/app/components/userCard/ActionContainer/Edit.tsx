"use client";
import { useUserContext } from "@/app/context/UserContext";
import { useState } from "react";
import { Form, Modal, Row } from "antd";
import { EditOutlined } from "@ant-design/icons";
import FormItem from "../../FormItem";
const Edit = ({ id }) => {
  const [form] = Form.useForm();
  const { users, editUser } = useUserContext();
  const user = users.find((user) => user.id === id);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleEditUser = (values) => {
    editUser(id, values);
    setIsModalOpen(false);
  };

  const initialValues = {
    name: user?.name,
    email: user?.email,
    website: user?.website,
    phone: user?.phone,
  };
  const handleCancel = () => {
    form.setFieldsValue(initialValues);
    setIsModalOpen(false);
  };

  return (
    <div>
      <EditOutlined key="edit" onClick={showModal} />
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        okText="OK"
        cancelText="Cancel"
        okButtonProps={{ autoFocus: true, htmlType: "submit" }}
        onCancel={() => handleCancel()}
        destroyOnClose
        modalRender={(modal) => {
          return (
            <Form
              form={form}
              name="form_in_modal"
              initialValues={initialValues}
              onFinish={(values) => {
                handleEditUser(values);
              }}
            >
              <Row>
                <div className="w-full p-0">{modal}</div>
              </Row>
            </Form>
          );
        }}
        styles={{
          header: {
            padding: "16px 24px",
            borderBottom: "1px solid #e8e8e8",
            borderRadius: "4px 4px 0 0",
          },
          body: {
            padding: "24px",
          },
          content: {
            padding: 0,
          },
          footer: {
            borderTop: "1px solid #e8e8e8",
            borderRadius: "0 0 4px 4px",
            padding: "10px 16px",
          },
        }}
      >
        <FormItem
          label="Name"
          name="name"
          rules={[{ required: true, message: "This field is required" }]}
        />
        <FormItem
          label="Email"
          name="email"
          rules={[
            { required: true },
            {
              type: "email",
              message: "Invalid email",
            },
          ]}
        />
        <FormItem
          label="Phone"
          name="phone"
          rules={[{ required: true, message: "This field is required" }]}
        />
        <FormItem
          label="Website"
          name="website"
          rules={[{ required: true, message: "This field is required" }]}
        />
      </Modal>
    </div>
  );
};

export default Edit;
