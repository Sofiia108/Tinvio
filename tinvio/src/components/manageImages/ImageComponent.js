import React, { useState, useEffect } from 'react';

function ImageComponent({ }) {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setImageUrl('/path/to/large/image.jpg');
    } else {
      setImageUrl('/path/to/small/image.jpg');
    }
  }, []);

  return (
    <img src={imageUrl} alt="example" />
  );
}

export default ImageComponent;