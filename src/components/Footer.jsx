import { Box, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { EnvironmentOutlined, PhoneOutlined, MailOutlined } from "@ant-design/icons";

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "#1e3a8a", color: "#fff", pt: 6, pb: 3 }}>
      <Container>
        <Grid container spacing={4}>
          
          {/* Company */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold">
              VSK ENTERPRISES
            </Typography>
            <Typography mt={2}>
              “2000000+ people in India use our washrooms everyday.”
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold">
              Quick Links
            </Typography>

            <Typography component={Link} to="/" sx={linkStyle}>
              Home
            </Typography>
            <Typography component={Link} to="/services" sx={linkStyle}>
              Services
            </Typography>
            <Typography component={Link} to="/projects" sx={linkStyle}>
              Projects
            </Typography>
            <Typography component={Link} to="/owner" sx={linkStyle}>
              Owner Profile
            </Typography>
            <Typography component={Link} to="/contact" sx={linkStyle}>
              Contact Us
            </Typography>
          </Grid>

          {/* Contact */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold">
              Contact Info
            </Typography>

            <Typography mt={2}>
              <EnvironmentOutlined style={{ marginRight: 8 }} />
               S.No 1134/1A1B Malayambakkam (South),
               Kanchipuram District,
               Chennai – 600069

            </Typography>

            <Typography>
              <PhoneOutlined style={{ marginRight: 8 }} />
              +91 97911 28296 
              
            </Typography>

            <Typography>
              <MailOutlined style={{ marginRight: 8 }} />
              sales@vskenterprises.in
            </Typography>
          </Grid>

        </Grid>

        <Typography textAlign="center" mt={4} fontSize="14px">
          VSK ENTERPRISES © 2025. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
}

const linkStyle = {
  display: "block",
  mt: 1,
  color: "#fff",
  textDecoration: "none",
  "&:hover": { textDecoration: "underline" }
};