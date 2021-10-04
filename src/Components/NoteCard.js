import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { blue, green, pink, yellow } from "@material-ui/core/colors";
import { DeleteOutlined } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles({
  title: {
    color: "blue",
    textDecoration: "underline",
  },
  avatarImg: {
    backgroundColor: (note) => {
      if (note.category == "Note") {
        return yellow[700];
      }
      if (note.category == "Task") {
        return green[500];
      }
      if (note.category == "Meeting") {
        return pink[500];
      }
      return blue[500];
    },
  },
});

export const NoteCard = ({ note, handleDelete }) => {
  const classes = useStyles(note);
  return (
    <Card elevation={1} className={classes.test}>
      <CardHeader
        title={note.title}
        subheader={note.date + " | " + note.category}
        avatar={<Avatar className={classes.avatarImg}>{note.category[0].toUpperCase()}</Avatar>}
        action={
          <IconButton onClick={() => handleDelete(note.id)}>
            <DeleteOutlined />
          </IconButton>
        }
      ></CardHeader>
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          {note.desc}
        </Typography>
      </CardContent>
    </Card>
  );
};
