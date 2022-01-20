import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CoffeeTwoToneIcon from "@mui/icons-material/CoffeeTwoTone";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import GroupIcon from "@mui/icons-material/Group";
import CoffeeMakerIcon from "@mui/icons-material/CoffeeMaker";
import { createTheme, ThemeProvider } from "@mui/material";
import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import { useContext } from "react";
import CoffeeContext from "../utils/CoffeeContext";

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  const { logout } = useContext(CoffeeContext);
  return (
    <ThemeProvider
      theme={createTheme({
        components: {
          MuiListItemButton: {
            defaultProps: {
              disableTouchRipple: true,
            },
          },
        },
        palette: {
          mode: "dark",
          primary: { main: "rgb(102, 157, 246)" },
          background: { paper: "rgb(5, 30, 52)" },
        },
      })}
    >
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          <ListItem>
            <ListItemIcon>
              <CoffeeTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary="MY COFFEESHOP DASHBOARAD" />
          </ListItem>
        </List>
        <List>
          <Link to="/cities">
            <ListItem button>
              <ListItemIcon>
                <LocationCityIcon />
              </ListItemIcon>
              <ListItemText
                primary="cities"
                sx={{ color: "white", textDecoration: "none" }}
              />
            </ListItem>
          </Link>
          <Link to="/coffeeshop">
            <ListItem button>
              <ListItemIcon>
                <CoffeeMakerIcon />
              </ListItemIcon>
              <ListItemText
                primary="coffeeshop"
                sx={{ color: "white", textDecoration: "none" }}
              />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          <Link to="/users">
            <ListItem button>
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText
                primary="users"
                sx={{ color: "white", textDecoration: "none" }}
              />
            </ListItem>
          </Link>
        </List>
        <List style={{ marginTop: "auto" }}>
          {localStorage.tokenDashboardcoffee ? (
            <Link to="/">
              <ListItem button>
                <ListItemIcon>
                  <LoginIcon />
                </ListItemIcon>
                <ListItemText
                  primary="logout"
                  sx={{ color: "white", textDecoration: "none" }}
                  onClick={logout}
                />
              </ListItem>
            </Link>
          ) : (
            <Link to="/login">
              <ListItem button>
                <ListItemIcon>
                  <LoginIcon />
                </ListItemIcon>
                <ListItemText
                  primary="login"
                  sx={{ color: "white", textDecoration: "none" }}
                />
              </ListItem>
            </Link>
          )}
        </List>
      </Drawer>
    </ThemeProvider>
  );
}
