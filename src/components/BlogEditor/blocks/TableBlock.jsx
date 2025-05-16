import React, { useState, useEffect } from 'react';

const TableBlock = ({ data, onChange }) => {
  const [rows, setRows] = useState(data.rows || [['']]);

  useEffect(() => {
    onChange({ rows });
  }, [rows]);

  const handleChange = (rIdx, cIdx, value) => {
    const newRows = [...rows];
    newRows[rIdx][cIdx] = value;
    setRows(newRows);
  };

  const addRow = () => setRows([...rows, Array(rows[0]?.length || 1).fill('')]);
  const addColumn = () => setRows(rows.map(row => [...row, '']));

  return (
    <div className="border rounded p-2 overflow-auto">
      <table className="table-auto border-collapse w-full mb-2">
        <tbody>
          {rows.map((row, rIdx) => (
            <tr key={rIdx}>
              {row.map((cell, cIdx) => (
                <td key={cIdx} className="border p-1">
                  <input
                    className="w-full border p-1"
                    value={cell}
                    onChange={(e) => handleChange(rIdx, cIdx, e.target.value)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn mr-2" onClick={addRow}>+ Row</button>
      <button className="btn" onClick={addColumn}>+ Column</button>
    </div>
  );
};

export default TableBlock;
