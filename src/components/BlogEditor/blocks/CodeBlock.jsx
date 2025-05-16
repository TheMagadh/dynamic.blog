import React from 'react';

const CodeBlock = ({ data, onChange }) => {
  return (
    <div className="bg-gray-900 text-white p-3 rounded">
      <select
        className="mb-2 p-1 rounded text-black"
        value={data.language || 'javascript'}
        onChange={(e) => onChange({ ...data, language: e.target.value })}
      >
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
        <option value="java">Java</option>
        <option value="html">HTML</option>
        <option value="css">CSS</option>
      </select>
      <textarea
        className="w-full p-2 bg-gray-800 text-white rounded"
        placeholder="Enter code..."
        rows={6}
        value={data.code || ''}
        onChange={(e) => onChange({ ...data, code: e.target.value })}
      />
    </div>
  );
};

export default CodeBlock;
