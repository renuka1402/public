import React from 'react';
import { Box, Paper, Skeleton } from '@mui/material';

function SkeletonComments() {
  return (
    <Box>
      {[1, 2, 3, 4, 5].map((item) => (
        <Paper key={item} elevation={3} style={{ padding: '16px', margin: '16px 0' }}>
          <Skeleton variant="text" width={200} />
          <Skeleton variant="text" width="100%" />
        </Paper>
      ))}
    </Box>
  );
}

export default SkeletonComments;
