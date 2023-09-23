import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog'; 
import ReasonMasterModal from '../modals/ReasonMasterModal';
import { FaEdit, FaTrash,FaPlus, FaCartPlus } from 'react-icons/fa';

const HeaderContainer = styled('div')(({ theme }) => ({
  width: '100%',
  borderBottom: `1px solid ${theme.palette.divider}`,
  margin: '0 -24px',
}));

const HeaderBox = styled(Box)(({ theme }) => ({
  margin: '0 auto',
  padding: `${theme.spacing(2)} 0`, 
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

const CustomTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'transparent',
    },
    '&:hover fieldset': {
      borderColor: 'transparent',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'transparent',
    },
  },
});

const NameTypography = styled(Typography)(({ theme }) => ({
  fontFamily: 'Croissant One, cursive',
}));

const SearchTextField = styled(CustomTextField)(({ theme }) => ({
  '& .MuiInputBase-input::placeholder': {
    fontFamily: 'Croissant One, cursive !important',
    fontStyle: 'italic !important',
  },
}));

const AddButton = styled(Button)(({ theme }) => ({
  fontFamily: 'Work Sans, sans-serif',
}));

export default function Header(props) {
  
  const [isModalOpen, setIsModalOpen] = useState(false);

 
  const openModal = () => {
    setIsModalOpen(true);
  };

  
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <HeaderContainer>
      <HeaderBox>
        <NameTypography variant="h6" style={{ color: '#43302e' }}>
          {props.pageTitle}
        </NameTypography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <SearchTextField label="Search" fullWidth />
       
          <AddButton
            variant="contained"
            color="primary"
            sx={{ marginLeft: '8px' }}
            onClick={openModal} 
          >
            <FaPlus style={{ cursor: 'pointer', marginRight: '8px' }} />
          </AddButton>

         
          <Dialog open={isModalOpen} onClose={closeModal}>
            
            <ReasonMasterModal closeModal={closeModal} />
          </Dialog>
        </Box>
      </HeaderBox>
    </HeaderContainer>
  );
}

