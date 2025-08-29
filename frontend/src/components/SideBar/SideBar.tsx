import { useState } from "react";
import { Link } from "react-router-dom";
import {
    Drawer,
    IconButton,
    Stack,
    useMediaQuery,
    Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { sideBarLinks } from "../../data/sidebarLinks";
import SideBarLink from "./SideBarLink";
import { useTheme } from "@mui/material/styles";

function SideBar() {
    const [isOpen, setIsOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const toggleDrawer = (open: boolean) => () => {
        setIsOpen(open);
    };

    const drawerContent = (
        <Box
            sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
            }}
            role="presentation"
            onClick={toggleDrawer(!isOpen)}
        >
            <Box
                sx={{
                    fontSize: "2rem",
                    fontWeight: "bold",
                    color: "#2563eb",
                    marginBottom: "2rem",
                    textAlign: "center",
                    textDecoration:"none"
                }}
                component={Link}
                to="/"
            >
                Coligo
            </Box>
            <Stack spacing={1}>
                {sideBarLinks.map((item, index) => (
                    <SideBarLink key={index} link={item} />
                ))}
            </Stack>
        </Box>

    );

    return (
        <>
            {isMobile && (
                <IconButton
                    onClick={toggleDrawer(!isOpen)}
                    sx={{ position: "fixed", top: 16, left: 16, zIndex: 1300 }}
                    aria-label="Open menu"
                >
                    <MenuIcon />
                </IconButton>
            )}

            <Drawer
                variant={isMobile ? "temporary" : "permanent"}
                open={isMobile ? isOpen : true}
                onClose={toggleDrawer(false)}
               
                sx={{
                    zIndex: (theme) => theme.zIndex.modal + 1,
                    "& .MuiDrawer-paper": {
                        width: isMobile ? "75%" : "25%",
                        background: "linear-gradient(to bottom, #0f2b69, #2a60ac)",
                        color: "#eaecf0",
                        boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
                        padding: "1.5rem 0",
                        overflowY: "auto",
                    },
                }}
            >
                {drawerContent}
            </Drawer>

        </>
    );
}

export default SideBar;
