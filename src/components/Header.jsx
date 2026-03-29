import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import {
  PhoneOutlined,
  MailOutlined,
 
} from "@ant-design/icons";

export default function Header() {
  return (
    <>
      {/* Top Contact Bar */}
      <Box
        sx={{
          backgroundColor: "#1e3a8a",
          color: "#fff",
          px: 2,
          py: 0.5,
          display: "flex",
          justifyContent: "flex-end",
          gap: 3,
          fontSize: "14px",
          alignItems: "center"
        }}
      >
        <Typography sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <PhoneOutlined /> +91 97911 28296
        </Typography>

        <Typography sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <MailOutlined /> sales@vskenterprises.in
        </Typography>
      </Box>

      {/* Main Navbar */}
      <AppBar position="sticky" sx={{ backgroundColor: "#fff", color: "#000" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          
          {/* Logo + Company Name */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <BuildOutlined style={{ fontSize: "26px", color: "#1e3a8a" }} />

            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              VSK ENTERPRISES
            </Typography>
          </Box>

          {/* Navigation */}
          <Box sx={{ display: "flex", gap: 3 }}>
            <Typography sx={{ cursor: "pointer" }}>Home</Typography>
            <Typography sx={{ cursor: "pointer" }}>Owner</Typography>
            <Typography sx={{ cursor: "pointer" }}>Products</Typography>
            <Typography sx={{ cursor: "pointer" }}>Contact</Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}