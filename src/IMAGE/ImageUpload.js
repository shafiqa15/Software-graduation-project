import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
 

  const usdzURL = "/Users/shafiqaabdat/Downloads/client-main/src/images/SESSION_1709059176_2562448_preview.usdz"; // Replace with your USDZ file URL

  // Simple device detection for demonstration purposes
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  return (
    <div>
      {isIOS ? (
        <a href={usdzURL} rel="ar">
          View in AR
        </a>
      ) : (
        <a href={usdzURL} rel="ar">
          View in AR
        </a>
      )}
    </div>
  );
};

export default ImageUpload;
