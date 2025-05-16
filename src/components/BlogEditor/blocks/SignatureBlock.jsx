import React from 'react';

const SignatureBlock = ({ data, onChange }) => {
  return (
    <div className="border-t pt-4 mt-6 text-sm text-gray-800">
      <h3 className="text-base font-semibold mb-3">Author Signature</h3>

      <input
        className="input w-full mb-2 border p-2 rounded"
        placeholder="Full Name"
        value={data.name || ''}
        onChange={(e) => onChange({ ...data, name: e.target.value })}
      />
      <input
        className="input w-full mb-2 border p-2 rounded"
        placeholder="Email Address"
        value={data.email || ''}
        onChange={(e) => onChange({ ...data, email: e.target.value })}
      />
      <input
        className="input w-full mb-2 border p-2 rounded"
        placeholder="LinkedIn URL"
        value={data.linkedin || ''}
        onChange={(e) => onChange({ ...data, linkedin: e.target.value })}
      />
      <input
        className="input w-full border p-2 rounded"
        placeholder="Designation"
        value={data.designation || ''}
        onChange={(e) => onChange({ ...data, designation: e.target.value })}
      />
    </div>
  );
};

export default SignatureBlock;
