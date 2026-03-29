import { AppBar, Toolbar, Typography, Button, Drawer } from "@mui/material";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="sticky" sx={{ background: "#fff", color: "#000" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>

          {/* Logo */}
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "green" }}>
            VSK ENTERPRISES
          </Typography>

          {/* Desktop Menu */}
          <div className="desktop-menu">
            <Button component={Link} to="/">Home</Button>
            <Button component={Link} to="/services">Services</Button>
            <Button component={Link} to="/projects">Projects</Button>
            <Button component={Link} to="/owner">Owner</Button>

            <Button
              component={Link}
              to="/contact"
              variant="contained"
              sx={{ background: "green", ml: 1 }}
            >
              Contact
            </Button>
          </div>

          {/* Mobile Menu Icon */}
          <div
            className="mobile-menu"
            onClick={() => setOpen(true)}
          >
            <MenuOutlined />
          </div>

        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <div style={{ width: "250px", padding: "20px" }}>

          <Button fullWidth component={Link} to="/" onClick={()=>setOpen(false)}>Home</Button>

          <Button fullWidth component={Link} to="/services" onClick={()=>setOpen(false)}>Services</Button>

          <Button fullWidth component={Link} to="/projects" onClick={()=>setOpen(false)}>Projects</Button>

          <Button fullWidth component={Link} to="/owner" onClick={()=>setOpen(false)}>Owner</Button>

          <Button
            fullWidth
            component={Link}
            to="/contact"
            variant="contained"
            sx={{ background: "green", mt: 2 }}
            onClick={()=>setOpen(false)}
          >
            Contact
          </Button>

        </div>
      </Drawer>
    </>
  );
}