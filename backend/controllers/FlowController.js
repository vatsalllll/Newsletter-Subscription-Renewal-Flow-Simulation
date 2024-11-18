const Flow = require('../models/Flow');

//to sttart a new flow
const startFlow = async (req, res) => {
  try {
    const flow = new Flow({ log: ['Flow started. Sending initial email...'] });
    await flow.save();
    res.status(201).json(flow);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//update flow status and log the message
const updateFlow = async (req, res) => {
  const { id } = req.params;
  const { status, message } = req.body;
  try {
    const flow = await Flow.findById(id);
    if (!flow) return res.status(404).json({ error: 'Flow not found' });

    flow.status = status || flow.status;
    if (message) flow.log.push(message);

    await flow.save();
    res.status(200).json(flow);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//get flow by id 
const getFlow = async (req, res) => {
  const { id } = req.params;
  try {
    const flow = await Flow.findById(id);
    if (!flow) return res.status(404).json({ error: 'Flow not found' });
    res.status(200).json(flow);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { startFlow, updateFlow, getFlow };
