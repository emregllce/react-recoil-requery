import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function HalfRating(rating) {


  return (
  
    <Stack spacing={1}>
      <Rating name="half-rating-read"  value={rating.rating} precision={0.1} readOnly />
    </Stack>
  );
}