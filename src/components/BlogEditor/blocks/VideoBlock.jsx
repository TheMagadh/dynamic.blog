import React from 'react';

const VideoBlock = ({ data, onChange }) => {
  return (
    <div className="my-4">
      <input
        className="input w-full mb-2 border p-2 rounded"
        placeholder="Paste YouTube or embed video URL"
        value={data.url || ''}
        onChange={(e) => onChange({ ...data, url: e.target.value })}
      />
      {data.url && (
        <div className="aspect-video">
          <iframe
            src={data.url}
            title="Embedded Video"
            className="w-full h-full border rounded"
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
};

export default VideoBlock;
