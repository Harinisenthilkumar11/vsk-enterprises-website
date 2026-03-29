import { Card, Typography } from "antd";
const { Title, Paragraph } = Typography;
export default function ServiceCard({ icon, title, desc }) {
  return (
    <Card
      hoverable
      style={{
        height: "100%",
        textAlign: "center",
        borderRadius: "12px",
        transition: "0.3s"
      }}
      bodyStyle={{ padding: "30px" }}
    >
      <div style={{ fontSize: "40px", color: "#2e7d32", marginBottom: "15px" }}>
        {icon}
      </div>

      <Title level={4}>{title}</Title>

      <Paragraph style={{ color: "#666", fontSize: "14px" }}>
        {desc}
      </Paragraph>
    </Card>
  );
}