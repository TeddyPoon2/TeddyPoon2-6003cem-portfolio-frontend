import { Card } from "antd";

const { Meta } = Card;

const DetailCard = (props) => {
  return (
    <>
      <Card
        style={{ width: "auto" }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
      >
        <Meta
          title="Card title"
          description="This is the description"
        />
      </Card>
    </>
  );
};
export default DetailCard;
