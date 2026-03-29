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
        height: "90vh",
        backgroundImage: `url(${slides[index].img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        textAlign: "center",
        transition: "0.8s ease-in-out"
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          animation: "zoomIn 1.5s ease"
        }}
      >
        {slides[index].title}
      </Typography>
    </Box>
  );
}