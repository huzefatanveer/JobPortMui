import React from 'react';
import styled from '@emotion/styled';
import { Box, Paper } from '@mui/material';
import headerImage from '../images/no-jobs.jpg';

const StyledPaper = styled(Paper)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: 500,
  backgroundImage: `url(${headerImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundColor: theme.palette.secondary.main,
  zIndex: 1,
  overflow: 'hidden',  // Ensures ::before content does not overflow

  // Apply a box shadow to the Paper component for a lifted effect
  boxShadow: theme.shadows[5],  // MUI's predefined shadow levels

  '::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: `linear-gradient(to top, rgba(80, 150, 225, 0.8), rgba(0, 0, 0, 0.3))`,  // Light blue gradient
    zIndex: 2,  // Keep the gradient overlay above the image
  },
}));

const Header = () => {
  return (
    <StyledPaper elevation={3}>  {/* Apply Paper with some elevation */}
      <Box sx={{ zIndex: 3, color: 'white' }}>
        
      </Box>
    </StyledPaper>
  );
};

export default Header;
