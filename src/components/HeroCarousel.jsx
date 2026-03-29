
import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";

const slides = [
  {
    img: "/images/slide1.jpg.jpg",
    title: "INDUS RESTROOM CUBICLE"
  },
  {
    img: "/images/slide2.jpg.jpg",
    title: "MODERN RESTROOM DESIGN"
  },
  {
    img: "/images/slide3.jpg.jpg",
    title: "HIGH QUALITY MATERIAL"
  }
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "55vh", sm: "65vh", md: "80vh", lg: "90vh" }, // responsive height
        backgroundImage: `url(${slides[index].img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        textAlign: "center",
        transition: "0.8s ease-in-out",
        backgroundBlendMode: "darken",
backgroundColor: "rgba(0,0,0,0.1)",
      }}
    >
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "26px", sm: "34px", md: "48px" }, // responsive text
          px: 2
        }}
      >
        {slides[index].title}
      </Typography>
    </Box>
  );
}