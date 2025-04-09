import { Form, Input, Button } from "antd";
import axios from "axios";
import { api } from "../common/http-common";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

const { TextArea } = Input;

const NewArticle = () => {
  const handleFormSubmit = async (values: any) => {
    const { title, context, username, password } = values;
    const credentials = btoa(username + ":" + password);
    const basicAuth = "Basic " + credentials;

    console.log(basicAuth)
    
    await axios.post(`${api.uri}/articles`, {
      headers: { Authorization: basicAuth },
      body: {
        title: title,
        allText: context,
        authorID: 1,
      },
    });
  };

  return (
    <Form name="article" onFinish={(values) => handleFormSubmit(values)}>
      <Form.Item name="username" label="Username">
        <Input />
      </Form.Item>
      <Form.Item name="password" label="Password">
        <Input.Password
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      </Form.Item>

      <Form.Item name="title" label="Title">
        <Input />
      </Form.Item>
      <Form.Item name="context" label="Context">
        <TextArea rows={4} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default NewArticle;
