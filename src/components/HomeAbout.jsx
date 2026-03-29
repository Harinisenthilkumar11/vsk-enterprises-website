import { Box, Container, Grid, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const features = [
  "Economy of space",
  "Economy of Load",
  "Reduced installation time",
  "Neatness of installation",
  "Easy to Maintain",
  "Cost effective"
];

export default function HomeAbout() {
  return (
    <Box sx={{ py: 10, backgroundColor: "#f8fafc" }}>
      <Container>

        <Grid container spacing={6} alignItems="center">

          {/* LEFT TEXT */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ color: "#1e3a8a", mb: 3 }}
            >
              About VSK ENTERPRISES
            </Typography>

            <Typography sx={{ mb: 3 }}>
              VSK Enterprises modular restroom cubicles are one of the most
              cost-efficient, space saving and modern concepts in restroom
              design. These cubicles are made from high pressure compact
              laminates to suit various specifications.
            </Typography>

            {features.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 1.5
                }}
              >
                <CheckCircleIcon sx={{ color: "#4ade80", mr: 1 }} />
                <Typography>{item}</Typography>
              </Box>
            ))}
          </Grid>

          {/* RIGHT IMAGE */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/images/about-cubicle.jpg"
              alt="Restroom Cubicle"
              sx={{
                width: "100%",
                borderRadius: 2,
                boxShadow: 5
              }}
            />
          </Grid>

        </Grid>

      </Container>
    </Box>
  );
}