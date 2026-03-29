import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <AppBar position="sticky" sx={{ background: "#fff", color: "#000" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "green" }}>
          VSK ENTERPRISES
        </Typography>

        <div>
          <Button component={Link} to="/">Home</Button>
          <Button component={Link} to="/services">Services</Button>
          <Button component={Link} to="/projects">Projects</Button>
          <Button component={Link} to="/owner">Owner</Button>
          <Button
            component={Link}
            to="/contact"
            variant="contained"
            sx={{ background: "green", ml: 2 }}
          >
            Contact
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}