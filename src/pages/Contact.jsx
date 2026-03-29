import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Box,
  Paper
} from "@mui/material";

import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  GlobalOutlined
} from "@ant-design/icons";

export default function Contact() {
  return (
    <Box sx={{ background: "#f5f5f5", py: 10 }}>

      <Container maxWidth="lg">

        {/* Page Title */}

        <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
          sx={{ color: "#003366", mb: 1 }}
        >
          Contact Us
        </Typography>

        {/* Underline */}

        <Box
          sx={{
            width: 70,
            height: 4,
            background: "#2e7d32",
            margin: "0 auto 60px auto",
            borderRadius: "2px"
          }}
        />

        {/* GRID LAYOUT */}

        <Grid container spacing={6}>

          {/* CONTACT FORM */}

          <Grid item xs={12} md={4}>
            <Paper
              sx={{
                p: 4,
                borderRadius: 3,
                height: "100%",
                boxShadow: "0 8px 25px rgba(0,0,0,0.08)"
              }}
            >

              <Typography
                variant="h6"
                mb={2}
                fontWeight="bold"
                sx={{ color: "#003366" }}
              >
                Send Message
              </Typography>

              <TextField
                fullWidth
                label="Name"
                margin="normal"
              />

              <TextField
                fullWidth
                label="Email"
                margin="normal"
              />

              <TextField
                fullWidth
                label="Message"
                multiline
                rows={4}
                margin="normal"
              />

              <Button
                variant="contained"
                sx={{
                  mt: 2,
                  background: "#2e7d32",
                  px: 4,
                  "&:hover": {
                    background: "#256528"
                  }
                }}
              >
                Submit
              </Button>

            </Paper>
          </Grid>

          {/* COMPANY DETAILS */}

          <Grid item xs={12} md={4}>
            <Paper
              sx={{
                p: 4,
                borderRadius: 3,
                height: "100%",
                boxShadow: "0 8px 25px rgba(0,0,0,0.08)"
              }}
            >

              <Typography
                variant="h6"
                mb={3}
                fontWeight="bold"
                sx={{ color: "#003366" }}
              >
                Company Details
              </Typography>

              <Typography sx={{ mb: 2, display: "flex", alignItems: "center" }}>
                <PhoneOutlined style={{ marginRight: 10, color: "#003366" }} />
                +91 97911 28296
              </Typography>

              <Typography sx={{ mb: 2, display: "flex", alignItems: "center" }}>
                <PhoneOutlined style={{ marginRight: 10, color: "#003366" }} />
                +91 73051 28296
              </Typography>

              <Typography sx={{ mb: 2, display: "flex", alignItems: "center" }}>
                <MailOutlined style={{ marginRight: 10, color: "#003366" }} />
                varun@vskenterprises.in
              </Typography>

              <Typography sx={{ mb: 2, display: "flex", alignItems: "center" }}>
                <GlobalOutlined style={{ marginRight: 10, color: "#003366" }} />
                www.vskenterprises.in
              </Typography>

              <Typography sx={{ display: "flex", alignItems: "flex-start" }}>
                <EnvironmentOutlined style={{ marginRight: 10, color: "#003366", marginTop: 4 }} />
                S.No 1134/1A1B Malayambakkam (South),
                Kanchipuram District,
                Chennai – 600069
              </Typography>

            </Paper>
          </Grid>

          {/* GOOGLE MAP */}

          <Grid item xs={12} md={4}>
            <Paper
              sx={{
                borderRadius: 3,
                overflow: "hidden",
                height: "100%",
                minHeight: 420,
                boxShadow: "0 8px 25px rgba(0,0,0,0.08)"
              }}
            >

              <iframe
                title="company-location"
                src="https://www.google.com/maps?q=Malayambakkam%20Chennai&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />

            </Paper>
          </Grid>

        </Grid>

      </Container>

    </Box>
  );
}

