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
    name: "Data Communication Networks - A",
    link: "https://classroom.google.com/u/0/c/NDUwNTI3NjQwODQ0",
  },
  {
    name: "Power Engineering - B",
    link: "https://classroom.google.com/u/0/c/NDUwNjQ2OTg4MTQ4",
  },
  {
    name: "Digital Signal Processing - C",
    link: "https://classroom.google.com/u/0/c/NDUwMzQ3MDIwNjk3",
  },
  {
    name: "Embedded Systems - D",
    link: "https://classroom.google.com/u/0/c/NDUwMzk3NzQ5ODY3",
  },
  {
    name: "Digital Systems Lab - M7",
    link: "https://classroom.google.com/u/0/c/NDUwMzk3OTI2OTI4",
  },
  {
    name: "Communication Systems Lab - M2",
    link: "#",
  },
  {
    name: "Electrical Machines Lab - M3",
    link: "https://classroom.google.com/u/0/c/NDUwNTUwOTYzODkx",
  },
  {
    name: "SDE - Q",
    link: "https://classroom.google.com/u/0/c/NDQzOTAwNTUwNjI5",
  },
  {
    name: "Professional Ethics - 2 - NG1",
    link: "#",
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
