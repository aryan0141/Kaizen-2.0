import {
  AppBar,
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import {
  AddCircleOutlineOutlined,
  SubjectOutlined,
  LibraryBooksOutlined,
} from "@material-ui/icons";
import React from "react";
import { useHistory, useLocation } from "react-router";
import { format } from "date-fns";
import logo from "../images/avatar.png";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
  return {
    page: {
      backgroundColor: "#f9f9f9",
      width: "100%",
      padding: theme.spacing(3),
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    root: {
      display: "flex",
    },
    textStyle: {
      padding: theme.spacing(3),
    },
    active: {
      backgroundColor: "#f4f4f4",
    },
    appbar: {
      width: "calc(100% - " + drawerWidth + "px)",
    },
    toolbar: theme.mixins.toolbar,
    dateTime: {
      flexGrow: 1,
    },
    avatarImg: {
      marginLeft: theme.spacing(2),
    },
  };
});

const listItems = [
  {
    text: "My Notes",
    icon: <SubjectOutlined color="secondary" />,
    path: "/",
  },
  {
    text: "Create Note",
    icon: <AddCircleOutlineOutlined color="secondary" />,
    path: "/create",
  },
  {
    text: "Time Table",
    icon: <LibraryBooksOutlined color="secondary" />,
    path: "/timeTable",
  },
];

const days = {
  0:"Sunday",
  1:"Monday",
  2:"Tuesday",
  3:"Thursday",
  4:"Friday",
  5:"Saturday",
  6:"Sunday",
}
var date = new Date();
var day = days[date.getDay()];


export const Layout = ({ children }) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  return (
    <div className={classes.root}>
      {/* App bar */}
      <AppBar className={classes.appbar} elevation={0} color="secondary">
        <Toolbar>
          <Typography className={classes.dateTime}>
            {format(new Date(), "do MMMM Y") + " | " + day}
          </Typography>
          <Typography>Aryan</Typography>
          <Avatar src={logo} className={classes.avatarImg} />
        </Toolbar>
      </AppBar>

      {/* Side Drawer */}
      <div>
        <Drawer
          variant="permanent"
          anchor="left"
          className={classes.drawer}
          classes={{ paper: classes.drawerPaper }}
        >
          <div>
            <Typography variant="h5" className={classes.textStyle}>
              Kaizen 2.0
            </Typography>
          </div>

          {/* List / Links */}
          <List>
            {listItems.map((item) => (
              <ListItem
                key={item.text}
                button
                onClick={() => history.push(item.path)}
                className={
                  location.pathname == item.path ? classes.active : null
                }
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </div>
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
};
