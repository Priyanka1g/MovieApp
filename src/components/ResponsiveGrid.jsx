import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MediaCard from "./Card/Card";

export default function ResponsiveGrid(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(props.movies).map((movie, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
          <MediaCard
          name={movie.name}
          posterPath={movie.posterPath}
          desc={movie.desc}
          backdropPath={movie.backdropPath}
        />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

