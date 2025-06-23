import { useState } from "react";
import {
  Typography,
  Button,
  Carousel,
  Card,
  Segmented,
  Row,
  Col,
  Avatar,
} from "antd";
import { UserOutlined } from "@ant-design/icons";
import RewardCarousel from "./RewardCarousel";

const { Title, Text } = Typography;

const items = [
  {
    img: "coin.png",
    type: "0.1 $MON",
    reward: "Diamond",
    user: "0x3b5...a7f9",
  },
  {
    img: "coin.png",
    type: "0.05 $MON",
    reward: "Moyaki",
    user: "0x3b5...a7f9",
  },
  {
    img: "monster.png",
    type: "0 $MON",
    reward: "Salmonad",
    user: "0x3b5...a7f9",
  },
];

const ChestPage = () => {
  const [quantity, setQuantity] = useState("1x");

  return (
    <div
      style={{
        backgroundColor: "#0f0f1f",
        padding: 24,
        color: "#fff",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 24 }}>
        <Title level={2} style={{ color: "#fff" }}>
          CHEST
        </Title>
        <Title level={1} style={{ color: "#fff", margin: 0 }}>
          GMONAD
        </Title>
        <Segmented
          options={["1x", "2x", "3x", "4x", "5x"]}
          value={quantity}
          onChange={setQuantity}
          style={{ marginTop: 12, background: "#1f1f2f" }}
        />
      </div>

      {/* Carousel */}
      <RewardCarousel />

      {/* Buy button */}
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <Button
          type="primary"
          size="large"
          style={{
            backgroundColor: "#8f00ff",
            border: "1px solid #e600ff",
            borderRadius: 8,
          }}
        >
          buy & open 💎 100.00
        </Button>
      </div>

      {/* Last Drops */}
      <div style={{ textAlign: "center", marginBottom: 24 }}>
        <Title
          level={3}
          style={{
            color: "#fff",
            borderBottom: "2px solid #8f00ff",
            display: "inline-block",
          }}
        >
          LAST DROPS
        </Title>
      </div>

      <Row gutter={[16, 16]} justify="center">
        {items.map((item, idx) => (
          <Col key={idx} xs={12} sm={8} md={6} lg={4}>
            <Card
              style={{
                background: "#1a1a2a",
                borderRadius: 12,
                textAlign: "center",
                color: "#fff",
                border:
                  item.reward === "Salmonad"
                    ? "2px solid #8f00ff"
                    : "1px solid #333",
              }}
            >
              <img
                src={`/${item.img}`}
                alt={item.reward}
                style={{ width: 48 }}
              />
              <div style={{ marginTop: 8 }}>
                <Text style={{ color: "#fff" }}>{item.reward}</Text>
                <br />
                <Text style={{ color: "#cc66ff" }}>0.01</Text>
                <br />
                <Avatar icon={<UserOutlined />} size="small" />{" "}
                <Text style={{ fontSize: 12, color: "#aaa" }}>{item.user}</Text>
                <br />
                <Text style={{ fontSize: 10, color: "#777" }}>9 min ago</Text>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ChestPage;
