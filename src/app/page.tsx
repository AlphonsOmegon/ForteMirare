'use client';

import { Button, Typography, Box, Container } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

export default function Home() {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to ForteMirare
        </Typography>
        
        <Typography variant="h5" component="h2" gutterBottom>
          MUI is installed and working!
        </Typography>

        <Box sx={{ mt: 3, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <Button variant="contained" startIcon={<HomeIcon />}>
            Home
          </Button>
          
          <Button variant="outlined" startIcon={<DeleteIcon />}>
            Delete
          </Button>
          
          <Button variant="text" endIcon={<SendIcon />}>
            Send
          </Button>
        </Box>
      </Box>
    </Container>
  );
}