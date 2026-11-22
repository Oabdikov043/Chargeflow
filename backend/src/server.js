import express from 'express';
const app = express();
app.use(express.json());
app.get('/api/health', (_req,res) => res.json({status:'ok',service:'chargeflow-backend',phase:'starter'}));
const port = Number(process.env.PORT || 3001);
app.listen(port, ()=>console.log(`ChargeFlow API started on http://localhost:${port}`));
