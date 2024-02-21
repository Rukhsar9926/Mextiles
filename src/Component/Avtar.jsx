import React, { useRef } from 'react';
import AvatarEditor from 'react-avatar-editor';
import slider1 from '../Assets/slider1.webp'


const ImageEditor = () => {
  const editorRef = useRef(null);

  const handleSave = () => {
    // Access the edited image data using the editorRef
    const canvasScaled = editorRef.current.getImageScaledToCanvas().toDataURL();
    console.log('Edited Image Data:', canvasScaled);
  
  };

  return (
    <div>
      <AvatarEditor
        ref={editorRef}
        image={slider1}
        width={250}
        height={250}
        border={50}
        borderRadius={125}
        scale={1.2}
        rotate={0}
      />
      <button onClick={handleSave}>Save Edited Image</button>
    </div>
  );
};

export default ImageEditor;