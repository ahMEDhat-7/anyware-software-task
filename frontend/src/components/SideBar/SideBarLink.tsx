import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import type { SideBarLinkType } from "../../utils/types";

function SideBarLink({link}:{link:SideBarLinkType}) {

    return (
        <Box
            component={Link}
            to={link.link}
            sx={{
                textDecoration: "none",
                padding: "0.75rem",
                display: "block",
                transition: "all 0.2s ease",
                backgroundColor : "transparent",
                color: "#eaecf0",
                "&:hover": {
                    backgroundColor: "#f3f4f6",
                    color: "#0f2b69",
                },
            }}
        >
            <Box sx={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
                <Box sx={{ fontSize: "1.5rem" }}>{link.icon}</Box>
                <Typography variant="h6" sx={{ fontSize: "1rem", margin: 0, fontWeight: 500 }}>
                    {link.title}
                </Typography>
            </Box>
        </Box>
    );
}

export default SideBarLink;
