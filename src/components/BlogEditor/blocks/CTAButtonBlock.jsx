import React from 'react';

const CTAButtonBlock = ({ data, onChange }) => {
  return (
    <div className="my-4">
      <input
        className="input w-full mb-2 border p-2 rounded"
        placeholder="Button Label"
        value={data.label || ''}
        onChange={(e) => onChange({ ...data, label: e.target.value })}
      />
      <input
        className="input w-full mb-2 border p-2 rounded"
        placeholder="Button URL"
        value={data.url || ''}
        onChange={(e) => onChange({ ...data, url: e.target.value })}
      />
      {data.label && data.url && (
        <a
          href={data.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded shadow"
        >
          {data.label}
        </a>
      )}
    </div>
  );
};

export default CTAButtonBlock;
