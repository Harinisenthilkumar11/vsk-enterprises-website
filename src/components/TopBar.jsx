import { Box, Typography } from "@mui/material";
import { PhoneOutlined, MailOutlined } from "@ant-design/icons";

export default function TopBar() {
  return (
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
  );
}