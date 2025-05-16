import React from 'react';

const QuoteBlock = ({ data, onChange }) => {
  return (
    <div className="border-l-4 pl-4 italic text-gray-700 bg-gray-50 p-3 rounded">
      <textarea
        className="w-full bg-transparent focus:outline-none"
        placeholder="Enter quote text..."
        value={data.text || ''}
        onChange={(e) => onChange({ ...data, text: e.target.value })}
      />
      <input
        className="mt-2 w-full text-sm text-gray-500 bg-transparent border-b border-dashed"
        placeholder="— Author or source"
        value={data.cite || ''}
        onChange={(e) => onChange({ ...data, cite: e.target.value })}
      />
    </div>
  );
};

export default QuoteBlock;
