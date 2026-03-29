import { Row, Col, Typography } from "antd";
import {
  AppstoreOutlined,
  BuildOutlined,
  ToolOutlined,
  CheckCircleOutlined,
  LayoutOutlined,
  SettingOutlined,
  ApartmentOutlined,
  SafetyOutlined,
  ThunderboltOutlined,
  ExperimentOutlined,
  SkinOutlined,
  ControlOutlined
} from "@ant-design/icons";

import ServiceCard from "../components/ServiceCard";

const { Title, Text } = Typography;

const services = [
  {
    icon: <AppstoreOutlined />,
    title: "Restroom Cubicles",
    desc: "Modular toilet partitions made from high-pressure compact laminates."
  },
  {
    icon: <LayoutOutlined />,
    title: "Compact Laminate Panels",
    desc: "Premium laminate panels available in multiple colors and textures."
  },
  {
    icon: <BuildOutlined />,
    title: "Custom Design & Planning",
    desc: "Architectural planning and layout design for restroom partitions."
  },
  {
    icon: <ToolOutlined />,
    title: "Installation Services",
    desc: "Professional installation ensuring clean and precise fitting."
  },
  {
    icon: <SettingOutlined />,
    title: "Maintenance & Repair",
    desc: "After-sales maintenance including hardware repairs and panel replacement."
  },
  {
    icon: <CheckCircleOutlined />,
    title: "Quality Assurance",
    desc: "Strict quality checks and industry-standard materials."
  },
  {
    icon: <ApartmentOutlined />,
    title: "Commercial Washroom Solutions",
    desc: "Complete restroom cubicle solutions for offices, malls, and public spaces."
  },
  {
    icon: <SafetyOutlined />,
    title: "Safety & Durability",
    desc: "Panels designed to be fire-resistant, impact-resistant, and long-lasting."
  },
  {
    icon: <ThunderboltOutlined />,
    title: "Fast Project Delivery",
    desc: "Quick installation and project completion without disrupting operations."
  },
  {
    icon: <ExperimentOutlined />,
    title: "Chemical Resistant Panels",
    desc: "High-quality materials resistant to chemicals and harsh cleaning agents."
  },
  {
    icon: <SkinOutlined />,
    title: "Stylish Finishes",
    desc: "Modern colors, textures, and finishes to enhance restroom aesthetics."
  },
  {
    icon: <ControlOutlined />,
    title: "Hardware & Accessories",
    desc: "Premium stainless steel hardware and accessories for restroom cubicles."
  }
];

export default function Services() {
  return (
   
      <div style={{ padding: "80px 20px", background: "#f5f5f5" }}>
      <div style={{ maxWidth: "1100px", margin: "auto" }}>

        <Text
          style={{
            display: "block",
            textAlign: "center",
            color: "#2e7d32",
            fontWeight: 700,
            letterSpacing: 2
          }}
        >
          WHAT WE OFFER
        </Text>

        <Title
          level={2}
          style={{
            textAlign: "center",
            color: "#003366",
            marginBottom: "10px"
          }}
        >
          Our Services
        </Title>

        {/* Underline */}
        <div
          style={{
            width: "70px",
            height: "4px",
            background: "#2e7d32",
            margin: "0 auto 50px auto",
            borderRadius: "2px"
          }}
        ></div>

        <Row gutter={[24, 24]}>
          {services.map((service, i) => (
            <Col xs={24} sm={12} md={8} key={i}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                desc={service.desc}
              />
            </Col>
          ))}
        </Row>

      </div>
    </div>
  );
}