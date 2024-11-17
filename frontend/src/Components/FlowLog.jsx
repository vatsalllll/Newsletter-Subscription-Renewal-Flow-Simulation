import React from 'react';

const FlowLog = ({ logs }) => {
  return (
    <div>
      <h3>Flow Logs:</h3>
      <ul>
        {logs.map((log, index) => (
          <li key={index}>{log}</li>
        ))}
      </ul>
    </div>
  );
};

export default FlowLog;
