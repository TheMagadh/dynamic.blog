import React from 'react';

const TextBlock = ({ data, onChange }) => {
  return (
    <textarea
      className="w-full p-3 border rounded resize-y"
      rows={4}
      placeholder="Write text..."
      value={data.text || ''}
      onChange={(e) => onChange({ ...data, text: e.target.value })}
    />
  );
};

export default TextBlock;
