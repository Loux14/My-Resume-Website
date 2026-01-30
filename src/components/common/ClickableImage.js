import React from 'react';

function ClickableImage({ src, alt, onClick }) {
  const handleClick = () => {
    if (onClick) {
      onClick(src);
    } else {
      window.open(src, "_blank");
    }
  };

  return (
    <img
      src={src}
      alt={alt}
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    />
  );
}

export default ClickableImage;
