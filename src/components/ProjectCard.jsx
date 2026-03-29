import { Card, Typography, Image } from "antd";
import { EyeOutlined } from "@ant-design/icons";

const { Title } = Typography;

export default function ProjectCard({ img, title }) {
  return (
    <Card
      hoverable
      style={{
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 8px 24px rgba(0,0,0,0.08)"
      }}
      bodyStyle={{ padding: "16px" }}
      cover={
        <div
          style={{
            height: "260px",
            width: "100%",
            overflow: "hidden"
          }}
        >
          <Image
            src={img}
            preview={true}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "0.4s"
            }}
          />
        </div>
      }
    >
      <Title
        level={5}
        style={{
          textAlign: "center",
          margin: 0
        }}
      >
        <EyeOutlined style={{ marginRight: 8, color: "#1e3a8a" }} />
        {title}
      </Title>
    </Card>
  );
}