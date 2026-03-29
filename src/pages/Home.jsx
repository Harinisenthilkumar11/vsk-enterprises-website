import HeroCarousel from "../components/HeroCarousel";
import { Container, Typography, Grid, Box, Dialog } from "@mui/material";
import { useState } from "react";
import {
  ToolOutlined,
  ExperimentOutlined,
  SafetyOutlined,
  CloudOutlined,
  ThunderboltOutlined,
  FireOutlined,
  CheckCircleOutlined
} from "@ant-design/icons";

export default function Home() {

  const [open, setOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState("");

  const images = [
    "/images/restroom1.jpg",
    "/images/restroom2.jpg",
    "/images/restroom3.jpg"
  ];

  const handleOpen = (img) => {
    setSelectedImg(img);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <HeroCarousel />

      {/* ABOUT SECTION */}

      <Box sx={{ backgroundColor: "#f5f5f5", py: 12 }}>
        <Container>

          <Grid container spacing={10} alignItems="center">

            {/* LEFT CONTENT */}

            <Grid item xs={12} md={6}>

              <Typography
                variant="h4"
                fontWeight="bold"
                sx={{ color: "#003366", mb: 2 }}
              >
                About VSK ENTERPRISES
              </Typography>

              {/* green line */}
              <Box
                sx={{
                  width: 60,
                  height: 4,
                  backgroundColor: "#2e7d32",
                  mb: 3
                }}
              />

              <Typography
                color="text.secondary"
                fontSize="17px"
                lineHeight={1.8}
                mb={3}
              >
                VSK Enterprises modular restroom cubicles are one of the most
                cost-efficient, space saving and modern concepts in restroom
                design. These cubicles are made from high pressure compact
                laminates to suit various specifications and provide durability,
                hygiene and long service life.
              </Typography>

              {/* FEATURES */}

              {[
                "Economy of space: 12–35mm board partition compared to traditional walls.",
                "Economy of load: Cubicle systems add negligible load on the floor.",
                "Reduced installation time: Up to 8 cubicles can be installed in a day.",
                "Neat installation: No wet work involved.",
                "Easy to maintain: Easy cleaning with 150mm gap from FFL.",
                "Cost effective: Faster modular installation saves time and materials."
              ].map((text, index) => (

                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    mb: 2
                  }}
                >

                  <CheckCircleOutlined
                    style={{
                      color: "#2e7d32",
                      fontSize: 18,
                      marginRight: 12,
                      marginTop: 4
                    }}
                  />

                  <Typography
                    color="text.secondary"
                    fontSize="16px"
                    lineHeight={1.7}
                  >
                    {text}
                  </Typography>

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
                  height: "440px",
                  objectFit: "cover",
                  borderRadius: 3,
                  boxShadow: "0 12px 35px rgba(0,0,0,0.15)"
                }}
              />

            </Grid>

          </Grid>

        </Container>
      </Box>



      {/* INTRODUCTION SECTION */}

      <Container sx={{ color: "#003366", py: 10 }}>

        <Typography
          variant="h4"
          textAlign="center"
          fontWeight="bold"
          mb={3}
        >
          Modern Restroom Cubicle Solutions
        </Typography>
        <Box
                sx={{
                  width: 100,
                  height: 4,
                  backgroundColor: "#2e7d32",
                  mx:"auto",
                  mb: 3
                }}
              />

        <Typography
          textAlign="center"
          color="text.secondary"
          maxWidth="720px"
          mx="auto"
          mb={7}
          fontSize="17px"
        >
          VSK Enterprises provides high quality modular restroom cubicles
          designed for durability, hygiene and modern aesthetics for offices,
          malls, schools and public spaces.
        </Typography>

        {/* IMAGES */}

        <Grid container spacing={5} justifyContent="center">

          {images.map((img, i) => (

            <Grid item xs={12} md={4} key={i}>

              <Box
                component="img"
                src={img}
                alt="Restroom Cubicle"
                onClick={() => handleOpen(img)}
                sx={{
                  width: "100%",
                  height: "340px",
                  objectFit: "cover",
                  borderRadius: 3,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                  cursor: "pointer",
                  transition: "all 0.4s ease",
                  "&:hover": {
                    transform: "scale(1.05)"
                  }
                }}
              />

            </Grid>

          ))}

        </Grid>

      </Container>



      {/* IMAGE POPUP */}

      <Dialog open={open} onClose={handleClose} maxWidth="md">

        <Box
          component="img"
          src={selectedImg}
          sx={{
            width: "100%",
            height: "auto"
          }}
        />

      </Dialog>



      {/* AESTHETIC FEATURES */}

      <Box sx={{ py: 9, backgroundColor: "#f8fafc" }}>

        <Container>

          <Typography
            variant="h4"
            textAlign="center"
            fontWeight="bold"
            mb={2}
            sx={{ color: "#003366" }}
            
          >
            Aesthetic Features
          </Typography>
           <Box
                sx={{
                  width: 70,
                  height: 4,
                  backgroundColor: "#2e7d32",
                  mx:"auto",
                  mb: 6,
                
                }}
              />


          <Grid container spacing={4} >

            {[
              { icon: <ToolOutlined />, text: "Maintenance-free" },
              { icon: <ExperimentOutlined />, text: "Chemical resistant" },
              { icon: <SafetyOutlined />, text: "Hygienic and easy to clean" },
              { icon: <CloudOutlined />, text: "Water and moisture resistant" },
              { icon: <ThunderboltOutlined />, text: "Impact & scratch resistant" },
              { icon: <FireOutlined />, text: "Fire resistant" }
            ].map((item, i) => (

              <Grid item xs={12} sm={6} md={4} key={i}>

                <Box
                  sx={{
          
                    p: 4,
                    borderRadius: 3,
                    backgroundColor: "#fff",
                    textAlign: "center",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 12px 35px rgba(0,0,0,0.15)"
                    }
                  }}
                >

                  <Box
                    sx={{
                      width: 70,
                      height: 70,
                      borderRadius: "50%",
                      backgroundColor: "#e0f2fe",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 20px auto",
                      fontSize: 32,
                      color: "#1e3a8a",
                      
                    }}
                  >
                    {item.icon}
                  </Box>

                  <Typography fontWeight="bold" fontSize="18px">
                    {item.text}
                  </Typography>

                </Box>

              </Grid>

            ))}

          </Grid>

        </Container>

      </Box>

    </>
  );
}