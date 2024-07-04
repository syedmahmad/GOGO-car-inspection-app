import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import React, { useState } from 'react';
import BasicModal from '../../components/Modal';

const ItemReportsList = (props) => {
  const {
    listToShow
  } = props;
  const [itemToShowInModal, setItemToShowInModal] = useState();
  return(
    <>
      {
        listToShow.map((item, index) => (
          <ListItem
            key={index}
            component="div"
            disablePadding
            sx={{
              backgroundColor: 'rgba(0, 0, 0, 0.04)',
              borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
              display: 'flex',
              alignItems: 'center'
            }}
            onClick={() => setItemToShowInModal(item)}
          >
            <ListItemButton>
              <ListItemText
                primary={item.name}
                sx={{ '& .MuiTypography-root': {
                  fontSize: '12px',
                  color: 'green'
                }}}
              />
            </ListItemButton>
          </ListItem>
        ))
      }

      {itemToShowInModal && (
        <BasicModal item={itemToShowInModal} setItemToShowInModal={setItemToShowInModal} />
      )}
    </>
  )
}

export default ItemReportsList;