import React, { useState, useEffect } from "react";
// import Card from "@material-ui/core/Card";
// import Grid from "@material-ui/core/Grid";
import { Container, Typography } from "@material-ui/core";
import { NoteCard } from "../Components/NoteCard";
import Masonry from "react-masonry-css";
// import Typography from "@material-ui/core/Typography"

// Getting the data from the JSON file.
export default function Notes() {
  const [data, setData] = useState([]);
  useEffect(() => {
    // var todos = await fetch("http://localhost:8000/notes");
    // var todos_json = await todos.json();
    // console.log(todos_json);
    // setData(todos_json);
    let localData = JSON.parse(localStorage.getItem("notes"));
    // localData =

    // console.log(localData);
    // localData = JSON.parse(localData);
    setData(localData == undefined || localData == null ? [] : localData);
  }, []);

  // console.log(data);
  const handleDelete = (id) => {
    // await fetch("http://localhost:8000/notes/" + id, {
    //   method: "DELETE",
    // });
    const newNotes = data.filter((note) => note.id != id);
    localStorage.setItem("notes", JSON.stringify(newNotes));
    setData(newNotes);
  };

  const masonaryBreakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  // data.map((note) => console.log(note));

  return (
    <Container>
      <Masonry
        breakpointCols={masonaryBreakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {(data.length==0) ? <Typography >Currently No Work To Do!</Typography> : null}

        {data.map((note) => (
          <div key={note.id}>
            <NoteCard note={note} handleDelete={handleDelete} />
          </div>
        ))}
      </Masonry>
    </Container>
  );
}
