import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { FormControl } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";
import { FormLabel } from "@material-ui/core";
import { useHistory } from "react-router";
import {format} from "date-fns";

const useStyles = makeStyles({
  btn: {
    color: "pink",
    backgroundColor: "blue",
    margin: "auto",
    "&:hover": {
      backgroundColor: "purple",
    },
  },
  title: {
    color: "blue",
    textDecoration: "underline",
  },
  field: {
    marginBottom: 21,
    marginLeft: 21,
  },
});

const defaultCategory = "Note"

export default function Create() {
  const classes = useStyles();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState(defaultCategory);

  const [titleError, setTitleError] = useState(false);
  const [descError, setDecsError] = useState(false);

  const history = useHistory();

  const clearText = () => {
    setTitle("");
    setDesc("");
    setCategory(defaultCategory);
    setTitleError(false);
    setDecsError(false);
  };

  const handleSubmitEvent = (e) => {
    e.preventDefault();

    setTitleError(false);
    setDecsError(false);

    if (title == "") {
      setTitleError(true);
    }

    if (desc == "") {
      setDecsError(true);
    }

    if (title && desc) {
      // console.log(title);
      // console.log(desc);

      // var settings = {
      //   method: "POST",
      //   headers: { "Content-type": "application/json" },
      //   body: JSON.stringify({ title, desc, category }),
      // };

      // fetch("http://localhost:8000/notes", settings).then(() =>
      //   history.push("/")
      // );

      let allNotes = JSON.parse(localStorage.getItem("notes"));
      let n = allNotes == null || allNotes == undefined ? 0 : allNotes.length;
      let date = format(new Date(), "do MMMM Y")
      let noteData = {
        id: n + 1,
        title: title,
        desc: desc,
        category: category,
        date: date,
      };

      let notesArray = [];
      if (allNotes == null || allNotes == undefined) {
        notesArray = [];
      } else {
        notesArray = allNotes;
      }
      notesArray.push(noteData);
      localStorage.setItem("notes", JSON.stringify(notesArray));
      // clearText();
      history.push("/");
    }
  };
  return (
    <Container>
      <Typography
        className={classes.field}
        variant="h5"
        align="left"
        component="h5"
        gutterBottom
        color="textSecondary"
      >
        Create a New Note
      </Typography>

      <form
        action=""
        noValidate
        autoComplete="off"
        onSubmit={handleSubmitEvent}
      >
        <TextField
          className={classes.field}
          onChange={(e) => setTitle(e.target.value)}
          label="Note Title"
          variant="outlined"
          fullWidth
          error={titleError}
          color="secondary"
          value={title}
          required
        />

        <TextField
          onChange={(e) => setDesc(e.target.value)}
          className={classes.field}
          label="Note Description"
          variant="outlined"
          fullWidth
          error={descError}
          multiline
          rows={6}
          color="secondary"
          value={desc}
          required
        />
        <FormLabel className={classes.field}>Note Category</FormLabel>
        <RadioGroup
          className={classes.field}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <FormControlLabel value="Note" control={<Radio />} label="Note" />
          <FormControlLabel value="Meeting" control={<Radio />} label="Meeting" />
          <FormControlLabel
            value="Task"
            control={<Radio />}
            label="Task"
          />
        </RadioGroup>

        <Button
          className={classes.field}
          type="submit"
          variant="contained"
          // disabled
          color="secondary"
        >
          Add Node
        </Button>
        <Button
          className={classes.field}
          // type="submit"
          onClick={clearText}
          variant="contained"
          // disabled
          color="secondary"
        >
          Reset Default
        </Button>
          <Button
          className={classes.field}
          type="button"
          onClick={clearText}
          variant="contained"
          // disabled
          color="secondary"
        >
          New Btn Added
        </Button>
      </form>
    </Container>
  );
}
