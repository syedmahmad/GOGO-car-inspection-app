import React, { useRef } from 'react';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

const CameraInput = () => {

  /* #region to open camera on mobile devices and files folder on desktop */

  const fileInputRef = useRef(null);
  const handleCameraAndImage = () => {
    fileInputRef.current.click();
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Handle the file (e.g., upload it, display it, etc.)
      console.log(file);
    }
  };
  // #endregion

  console.log("fasfasdf");
  return(
    <>
        <PhotoCameraIcon sx={{ marginTop: '24px'}} htmlColor='#004494' onClick={handleCameraAndImage}/>
        {/* this hidden field is only to take iamges. */}
        <input
            type="file"
            accept="image/*"
            capture="environment"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: 'none' }}
        />
    </>
  )
}

export default CameraInput;