import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import "antd/dist/reset.css";
import { Card, Button, DatePicker, Flex, Col, Row } from "antd";
import Hello from "./components/hello";
import DetailCard from "./components/DetailCard";

function App() {
  const [count, setCount] = useState(0);

  let counter = 0;
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };
  const onClick = (event: any) => {
    console.log(counter++);
  };

  const add = () => setCount((count) => count + 1);

  return (
    <>
      <div>
        <Hello name="Good Bye" />
        <div style={{maxWidth: "80%"}}>
          <Row gutter={[16, 24]}>
            {Array.from({ length: 6 }, (_, i) => (
              <Col className="gutter-row" span={24} md={8}>
                <DetailCard />
              </Col>
            ))}
          </Row>
        </div>
        <br />

        <Button type="primary" onClick={add}>
          {count}
        </Button>
        <Button type="primary" danger>
          Button
        </Button>

        <br />
        <DatePicker onChange={onChange} />
      </div>
    </>
  );
}

export default App;
