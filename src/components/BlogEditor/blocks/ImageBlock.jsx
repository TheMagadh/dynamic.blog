import React from 'react';

const ImageBlock = ({ data, onChange }) => {
  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      onChange({ ...data, url: reader.result });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="my-2">
      {data.url && (
        <img
          src={data.url}
          alt="Uploaded"
          className="max-w-full mb-2 rounded shadow"
        />
      )}
      <input type="file" accept="image/*" onChange={handleUpload} />
    </div>
  );
};

export default ImageBlock;
