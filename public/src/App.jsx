import React, { useState } from 'react';
import { Button, Container, Typography } from '@mui/material';
import Comments from './Comments';

function App() {
  const [postId, setPostId] = useState(1);

  const generateRandomPostId = () => {
    const randomId = Math.floor(Math.random() * 10) + 1;
    setPostId(randomId);
  };

  return (
    <Container>
      <Button variant="contained" color="primary" onClick={generateRandomPostId}>
        Generate Random Post ID
      </Button>
      <Typography variant="h4" gutterBottom>
        Comments for Post ID: {postId}
      </Typography>
      <Comments postId={postId} />
    </Container>
  );
}

export default App;
