import { Button, Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { Link } from "react-router-dom";
import timeTable from "../images/TimeTable.png";

const useStyles = makeStyles({
  timetable: {
    width: "90%",
    height: "90%",
  },
  buttonGrid: {
    padding: 30,
  },
});

const classLinks = [
  {
    name: "Electrical Machines - C",
    link: "https://classroom.google.com/u/0/c/Mzc2MTE1MTY5OTM4",
  },
  {
    name: "Communication Systems - B",
    link: "https://classroom.google.com/u/0/c/MzcyMjM2NjczMzM3",
  },
  {
    name: "Control Systems - A",
    link: "https://classroom.google.com/u/0/c/Mzc0NDI1OTM1MTQ2",
  },
  {
    name: "Analog Circuits - D",
    link: "https://classroom.google.com/u/0/c/MzE5MTcxNjA2NjEx",
  },
  {
    name: "Analog Circuits Lab",
    link: "https://classroom.google.com/u/0/c/MzE5MTcxNjA2NjEx",
  },
  {
    name: "Computer Architecture - E",
    link: "https://classroom.google.com/u/0/c/Mzc0Mzc2MTYzMzM5",
  },
  {
    name: "Youth Studies - K",
    link: "https://classroom.google.com/u/0/c/MzcyMzI4NzEzNjQ1",
  },
  {
    name: "Professional Ethics Main",
    link: "https://classroom.google.com/u/0/c/MzcyMzM0MTc2MTg3",
  },
  {
    name: "Professional Ethics - 2",
    link: "https://classroom.google.com/u/0/c/MzgxMDU2NDA4NDY1",
  },
];

export const TimeTable = () => {
  const classes = useStyles();
  return (
    <div>
      <Container>
        <Typography variant="h5">Time Table</Typography>
        <img src={timeTable} alt="timetableimg" className={classes.timetable} />
        <Grid container spacing={3} className={classes.buttonGrid}>
          {classLinks.map((data) => (
            <Grid item xs={12} md={6} lg={4}>
              <Button color="secondary" variant="contained" href={data.link} target="_blank">
                {data.name}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};
