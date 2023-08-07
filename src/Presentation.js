import React from 'react';
import { Row, Card } from 'antd';
import { useNavigate } from 'react-router-dom';

const Presentation = () => {
  const navigate = useNavigate();
  const cardWith = 300;
  const marginLeft = 10;

  return (
    <div className="background">
      <Row>
        <h1 style={{ marginLeft: 10 }}>Presentations</h1>
      </Row>
      <Row>
        <Card hoverable 
          style={{ width: cardWith, marginLeft, marginBottom: 10 }} 
          cover={<img style={{ width: cardWith, height: 200 }} alt="example" src="./dashboard-tutorial.png"/>} 
          onClick={() => navigate('/dashboard-tutorial')} 
        >
          <Card.Meta title="Dashboard Tutorial" description="How to contribute to the Dashboard development?" />
        </Card>
      </Row>
    </div>
  );
};

export default Presentation;
