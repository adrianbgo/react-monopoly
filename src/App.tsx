import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import ProTip from './ProTip';

const Copyright = () => (
  <Typography variant='body2' color='text.secondary' align='center'>
    {'Copyright © '}
    <Link color='inherit' href='https://adrianbgo.github.com'>
      Adrian Go
    </Link>
    {new Date().getFullYear()}.
  </Typography>
);

const App = () => (
  <Container maxWidth='sm'>
    <Box sx={{ my: 4 }}>
      <Typography variant='h4' component='h1' gutterBottom>
        Create React App example with styled-components and TypeScript
      </Typography>
      <ProTip />
      <Copyright />
    </Box>
  </Container>
);

export default App;