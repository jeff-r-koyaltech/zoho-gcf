import jwt from 'jsonwebtoken';
import functions from '@google-cloud/functions-framework'

const JWT_KEY = process.env.JWT_KEY || '3H8A0mWN3O39OH0M9/YXvMysp1Z81JkRMcz6s9ouAHWhZSdtoQjz7p57MU0g03HTonh+KGYHyg+hIkJvT2pOaXV2Ei6ASXYCRK9OUHaFw1oNWoUyU/WQPdl5TS6cs37ztYf742rGuYPMtgoJ1C8vuf5FHh0c91CtVEW/Vlj9Izc=';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const paramFromAnywhere = (req, key) => req.body[key] || req.params[key] || req.query[key];

const validateToken = async (req) => {
  // const SECONDS_THRESHOLD = 60; // 1 minute = 60 seconds
  const SECONDS_THRESHOLD = 86400; // 1 day = 86400 seconds
  const token = paramFromAnywhere(req, 'token');
  const iatRef = paramFromAnywhere(req, 'iat');
    if(!token) {
      throw new Error('no token');
    }
    console.info({
      token,
      iatRef,
    });
    const decoded = await jwt.verify(token, JWT_KEY);
    if (!decoded) {
      throw new Error('Invalid token');
    }
    const { iat } = decoded;
    const nowIsh = Math.round(new Date().getTime() / 1000);
    const secondsElapsed = (nowIsh - iat);
    if (secondsElapsed > SECONDS_THRESHOLD) {
      throw new Error('Expired token');
    }
};

functions.http('zohoSample', async (req, res) => {
  try {
    await validateToken(req);

    const data = paramFromAnywhere(req, 'data');
    res.status(200).send({
      status: 'success',
      didStuff: true,
    });
  } catch (err) {
    await sleep(500);
    console.error('something blew up', err);
    res.status(500).send(`Unable to complete request: ${err?.message || ''}`);
  }
});
