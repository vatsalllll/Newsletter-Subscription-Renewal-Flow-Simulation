import React, { useState } from 'react';
import FlowSimulator from './Components/FlowSimulator';
import FlowLog from './Components/FlowLog';

const App = () => {
  const [logs, setLogs] = useState([]);
  const [flowId, setFlowId] = useState(null);

  return (
    <div>
      <h1>Newsletter Subscription Renewal Flow</h1>
      <FlowSimulator setFlowId={setFlowId} setLogs={setLogs} />
      <FlowLog logs={logs} />
    </div>
  );
};

export default App;
