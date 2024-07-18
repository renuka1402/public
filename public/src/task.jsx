import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography, Paper } from '@mui/material';
import SkeletonComments from './SkeletonComments';

function Comments({ postId }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then(response => {
        setComments(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching comments:', error);
        setLoading(false);
      });
  }, [postId]);

  if (loading) {
    return <SkeletonComments />;
  }

  return (
    <Box>
      {comments.map(comment => (
        <Paper key={comment.id} elevation={3} style={{ padding: '16px', margin: '16px 0' }}>
          <Typography variant="subtitle1"><strong>{comment.email}</strong></Typography>
          <Typography variant="body1">{comment.body}</Typography>
        </Paper>
      ))}
    </Box>
  );
}

export default Comments;
