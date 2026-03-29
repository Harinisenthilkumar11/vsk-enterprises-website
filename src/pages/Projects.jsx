import { Row, Col, Typography } from "antd";
import { AppstoreOutlined } from "@ant-design/icons";
import ProjectCard from "../components/ProjectCard";

const { Title, Text } = Typography;

const projects = [
  { img: "/images/project1.jpg", title: "Corporate Office Restroom" },
  { img: "/images/project2.jpg", title: "Shopping Mall Washroom" },
  { img: "/images/project3.jpg", title: "Hospital Restroom Cubicles" },
  { img: "/images/project4.jpg", title: "School Sanitary Cubicles" },
  { img: "/images/project5.jpg", title: "Airport Restroom Installation" },
  { img: "/images/project6.jpg", title: "IT Park Washroom Project" },
  { img: "/images/project7.jpg", title: "Hotel Restroom Design" },
  { img: "/images/project8.jpg", title: "Metro Station Washroom" },
  { img: "/images/project9.jpg", title: "Commercial Complex Restroom" },
  { img: "/images/project10.jpg", title: "Industrial Facility Restroom" },
  { img: "/images/project11.jpg", title: "University Campus Washroom" },
  { img: "/images/project12.jpg", title: "Luxury Resort Restroom" },
  { img: "/images/project13.jpg", title: "Convention Center Washroom" },
  { img: "/images/project14.jpg", title: "Public Park Restroom" },
  { img: "/images/project15.jpg", title: "Corporate IT Tower Washroom" }
];

export default function Projects() {
  return (
    <div
      style={{
        padding: "100px 20px",
        background: "#f5f5f5"
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "auto"
        }}
      >

        {/* Section Title */}
        <Text
          style={{
            display: "block",
            textAlign: "center",
            color: "#2e7d32",
            fontWeight: 700,
            letterSpacing: 3,
            fontSize: 14
          }}
        >
          PORTFOLIO
        </Text>

        <Title
          level={2}
          style={{
            textAlign: "center",
            marginBottom: "10px",
            color: "#003366"
          }}
        >
          <AppstoreOutlined style={{ marginRight: 10 }} />
          Recent Projects
        </Title>

        {/* Underline */}
        <div
          style={{
            width: "70px",
            height: "4px",
            background: "#2e7d32",
            margin: "0 auto 70px auto",
            borderRadius: "2px"
          }}
        ></div>

        {/* Projects Grid */}
        <Row gutter={[40, 50]}>
          {projects.map((project, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
              <div style={{ padding: "5px" }}>
                <ProjectCard
                  img={project.img}
                  title={project.title}
                />
              </div>
            </Col>
          ))}
        </Row>

      </div>
    </div>
  );
}

