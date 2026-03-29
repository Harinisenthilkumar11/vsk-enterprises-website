import { Row, Col, Typography, Card, Avatar } from "antd";
import {
  UserOutlined,
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  GlobalOutlined,
  TrophyOutlined
} from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;

export default function Owner() {
  return (
    <div style={{ padding: "90px 20px", background: "#f5f5f5"}}>
      <div style={{ maxWidth: "1200px", margin: "auto" }}>

        {/* PAGE HEADING */}

        <Title
          level={2}
          style={{
            textAlign: "center",
            marginBottom: "10px",
            color: "#003366",
            fontSize: "36px"
          }}
        >
          <UserOutlined style={{ marginRight: 10 }} />
          Founder & Leadership
        </Title>

        {/* Underline */}
        <div
          style={{
            width: "70px",
            height: "4px",
            background: "#2e7d32",
            margin: "0 auto 70px auto",
            borderRadius: "3px"
          }}
        ></div>

        <Row gutter={[60, 40]} align="middle">

          {/* LEFT SIDE CONTENT */}

          <Col xs={24} md={14}>

            <Title
              level={2}
              style={{
                color: "#1f2937",
                fontSize: "32px",
                marginBottom: "8px"
              }}
            >
              N. Varuna Pandi
            </Title>

            {/* Underline */}
            <div
              style={{
                width: "60px",
                height: "2px",
                background: "#2e7d32",
                marginBottom: "20px",
                borderRadius: "2px",
                
              }}
            ></div>

            <Text
              strong
              style={{
                color: "#1e3a8a",
                fontSize: "18px"
              }}
            >
              Founder & Managing Director – VSK Enterprises
            </Text>

            {/* PROFESSIONAL SUMMARY */}

            <Title
              level={4}
              style={{
                color: "#003366",
                fontSize: "22px",
                marginTop: "30px",
                marginBottom: "8px"
              }}
            >
              Professional Summary
            </Title>

            {/* Underline */}
            <div
              style={{
                width: "60px",
                height: "2px",
                background: "#2e7d32",
                marginBottom: "20px",
                borderRadius: "2px"
              }}
            ></div>

            <Paragraph
              style={{
                fontSize: "17px",
                lineHeight: 1.9,
                color: "#374151"
              }}
            >
              N. Varuna Pandi is the founder of VSK Enterprises, a company
              specializing in high-quality modular restroom cubicle systems
              and compact laminate solutions. With a strong vision for
              modern infrastructure development, he has successfully
              delivered durable and aesthetically advanced restroom
              installations across multiple sectors.
            </Paragraph>

            <Paragraph
              style={{
                fontSize: "17px",
                lineHeight: 1.9,
                color: "#374151"
              }}
            >
              Under his leadership, the company has expanded its presence
              in commercial buildings, hospitals, educational institutions,
              shopping malls, and public facilities by providing
              reliable, hygienic, and long-lasting restroom partition
              systems.
            </Paragraph>

            {/* CONTACT INFORMATION */}

            <Title
              level={4}
              style={{
                color: "#003366",
                fontSize: "22px",
                marginTop: "30px",
                marginBottom: "8px"
              }}
            >
              <TrophyOutlined style={{ marginRight: 8 }} />
              Contact Information
            </Title>

            {/* Underline */}
            <div
              style={{
                width: "60px",
                height: "2px",
                background: "#2e7d32",
                marginBottom: "20px",
                borderRadius: "2px"
                
                
              }}
            ></div>

            <Row gutter={[20, 20]}>

              <Col xs={24} sm={12}>
                <Card bordered={false} style={{ background: "#fafafa", fontSize: "16px" }}>
                  <PhoneOutlined style={{ color: "#1e3a8a", marginRight: 10 }} />
                  +91 97911 28296
                </Card>
              </Col>

              <Col xs={24} sm={12}>
                <Card bordered={false} style={{ background: "#fafafa", fontSize: "16px" }}>
                  <PhoneOutlined style={{ color: "#1e3a8a", marginRight: 10 }} />
                  +91 73051 28296
                </Card>
              </Col>

              <Col xs={24} sm={12}>
                <Card bordered={false} style={{ background: "#fafafa", fontSize: "16px" }}>
                  <MailOutlined style={{ color: "#1e3a8a", marginRight: 10 }} />
                  Varun.vskenterprises.in
                </Card>
              </Col>

              <Col xs={24} sm={12}>
                <Card bordered={false} style={{ background: "#fafafa", fontSize: "16px" }}>
                  <GlobalOutlined style={{ color: "#1e3a8a", marginRight: 10 }} />
                  www.vskenterprises.in
                </Card>
              </Col>

              <Col span={24}>
                <Card bordered={false} style={{ background: "#fafafa", fontSize: "16px" }}>
                  <EnvironmentOutlined style={{ color: "#1e3a8a", marginRight: 10 }} />
                  S.No 1134/1A1B Malayambakkam (South), Kanchipuram District,
                  Chennai – 600069
                </Card>
              </Col>

            </Row>

          </Col>

          {/* RIGHT SIDE IMAGE */}

          <Col xs={24} md={10} style={{ textAlign: "center" }}>

            <Card
              bordered={false}
              style={{
                borderRadius: "12px",
                boxShadow: "0 12px 35px rgba(0,0,0,0.1)"
              }}
            >

              <Avatar
                shape="square"
                size={340}
                src="/images/owner.jpg"
                icon={<UserOutlined />}
              />

              <Title level={3} style={{ marginTop: 20, color: "#1f2937" }}>
                N. Varuna Pandi
              </Title>

              <Text style={{ fontSize: "16px", color: "#6b7280" }}>
                Founder – VSK Enterprises
              </Text>

            </Card>

          </Col>

        </Row>

      </div>
    </div>
  );
}