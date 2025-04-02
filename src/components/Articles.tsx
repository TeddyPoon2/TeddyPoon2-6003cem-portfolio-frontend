import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Col, Row, Spin } from "antd";
// import articles from "./articles.json";
import { api } from "../common/http-common";
import axios from "axios";

const Article = () => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${api.uri}/articles`).then((res) => {
      setArticles(res.data);
      setLoading(false)
    });
  }, []);

  if (loading) {
    return <Spin size="large"/>
    // return <div>There is no article available now.</div>;
  } else {
    return (
      <Row justify="space-around">
        {articles &&
          articles.map(({ id, title, alltext }) => (
            <Col span={8} key={id}>
              <Card title={title} style={{ width: 300 }}>
                <p>{alltext}</p>
                <p></p>
                <Link to={`/articles/${id}`}>Details</Link>
              </Card>
            </Col>
          ))}
      </Row>
    );
  }
};
export default Article;
