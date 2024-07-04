import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Divider } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  borderRadius: '12px',
  boxShadow: 24,
  p: 2,
};

export default function BasicModal(props) {
  const { item, setItemToShowInModal } = props;
  const open = Boolean(item);
  const handleClose = () => setItemToShowInModal(undefined);

  return (
    <Modal
      open={open}
      onClose={handleClose}
    >
      <Box sx={style}>
        <Typography align='center' variant="body1" fontWeight={700} fontSize="14px">
          {item?.name}
        </Typography>
        <Box
          sx={{
            marginTop: '12px'
          }}
        >
          <Typography sx={{ cursor: 'pointer' }} onClick={handleClose} margin="10px 0px" color="#4287f5" align='center' variant="body1" fontWeight={500} fontSize="12px">
            Pass
          </Typography>
          <Divider />
          <Typography sx={{ cursor: 'pointer' }} onClick={handleClose} margin="10px 0px" color="#4287f5" align='center' variant="body1" fontWeight={500} fontSize="12px">
            Need Attention
          </Typography>
          <Divider />
          <Typography sx={{ cursor: 'pointer' }} onClick={handleClose} margin="10px 0px" color="#4287f5" align='center' variant="body1" fontWeight={500} fontSize="12px">
            N/A
          </Typography>
        </Box>
        <Box
          sx={{
            marginTop: '24px'
          }}
        >
          <Typography sx={{ cursor: 'pointer' }} onClick={handleClose} margin="10px 0px" color="#4287f5" align='center' variant="body1" fontWeight={500} fontSize="12px">
            Cancel
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
}
