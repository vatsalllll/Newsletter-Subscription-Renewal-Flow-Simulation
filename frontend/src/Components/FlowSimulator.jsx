import React, { useState } from 'react';
import axios from 'axios';

const FlowSimulator = ({ setFlowId, setLogs }) => {
  const [isFlowRunning, setIsFlowRunning] = useState(false);

  const startFlow = async () => {
    setIsFlowRunning(true);
    try {
      const { data } = await axios.post('http://localhost:5000/api/flows/start');
      setFlowId(data._id);
      setLogs(data.log);

      let renewed = false;

      // Simulate Step 1: Initial Reminder
      await wait(10000); // 10 seconds
      if (randomRenew()) {
        renewed = true;
        await updateFlow(data._id, 'Thank You', 'User renewed after first email.');
      } else {
        await updateFlow(data._id, 'Waiting', 'Sending second reminder...');
        await wait(5000); // 5 seconds

        if (randomRenew()) {
          renewed = true;
          await updateFlow(data._id, 'Thank You', 'User renewed after second email.');
        } else {
          await updateFlow(data._id, 'No Further Action', 'No response after second email.');
        }
      }

      setIsFlowRunning(false);
    } catch (err) {
      console.error(err);
    }
  };

  const updateFlow = async (id, status, message) => {
    await axios.put(`http://localhost:5000/api/flows/update/${id}`, { status, message });
    const { data } = await axios.get(`http://localhost:5000/api/flows/${id}`);
    setLogs(data.log);
  };

  const randomRenew = () => Math.random() > 0.5; // 50% chance of renewal
  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  return (
    <div>
      <button onClick={startFlow} disabled={isFlowRunning}>
        {isFlowRunning ? 'Running...' : 'Start Flow'}
      </button>
    </div>
  );
};

export default FlowSimulator;
