import { Form, Input, Button, notification } from "antd";
import axios from "axios";
import { api } from "../common/http-common";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  ExclamationCircleOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
const { TextArea } = Input;

const NewArticle = () => {
  // const handleFormSubmit = async (values: any) => {
  //   const { title, context, username, password } = values;
  //   const credentials = btoa(username + ":" + password);
  //   const basicAuth = "Basic " + credentials;

  //   console.log(basicAuth)

  //   await axios.post(`${api.uri}/articles`, {
  //     headers: { Authorization: basicAuth },
  //     body: {
  //       title: title,
  //       allText: context,
  //       authorID: 1,
  //     },
  //   });
  // };

  const [form] = Form.useForm();

  const [success, contextHolder] = notification.useNotification();
  const [error, errorContextHolder] = notification.useNotification();

  const handleFormSubmit = (values: any) => {
    const articleBody = {
      title: values.title,
      allText: values.context,
      authorid: 1,
    };

    // call API
    //const access_token = Buffer.from(`${values.username}:${values.password}`,'utf8').toString('base64');
    //console.log(articleBody, access_token);
    //React.useEffect(()=>{
    axios
      .post(`${api.uri}/articles`, articleBody, {
        auth: {
          username: values.username,
          password: values.password,
        },
      })
      .then((res) => {
        form.resetFields();
        success.open({
          message: "System Response",
          description: "Article Created",
          icon: <CheckCircleOutlined style={{ color: "green" }} />,
        });
      })
      .catch((res) => {
        let detail = "Unknown Error";
        if (res.status == 401) detail = "Unauthorizated Error";
        else if (res.status == 400) detail = "The article contain errors";

        error.open({
          message: "Error",
          description: detail,
          icon: <ExclamationCircleOutlined style={{ color: "red" }} />,
        });
      });
  };

  return (
    <Form name="article" onFinish={(values) => handleFormSubmit(values)}>
      {contextHolder}
      {errorContextHolder}
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
