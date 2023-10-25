import jwt from 'jsonwebtoken';

const JWT_KEY = process.env.JWT_KEY || '3H8A0mWN3O39OH0M9/YXvMysp1Z81JkRMcz6s9ouAHWhZSdtoQjz7p57MU0g03HTonh+KGYHyg+hIkJvT2pOaXV2Ei6ASXYCRK9OUHaFw1oNWoUyU/WQPdl5TS6cs37ztYf742rGuYPMtgoJ1C8vuf5FHh0c91CtVEW/Vlj9Izc=';

const main = async () => {
  const nowIsh = Math.round(new Date().getTime() / 1000);
  const data = {
    "source": "Zoho",
    "iat": nowIsh,
  };

  const result = await jwt.sign(data, JWT_KEY);
  console.log({
    result,
  });
  
};

main();