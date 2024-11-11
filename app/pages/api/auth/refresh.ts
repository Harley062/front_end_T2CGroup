import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { refresh_token } = req.body;
      const response = await axios.post('http://localhost:5000/refresh', {
        refresh_token,
      });
      res.status(200).json(response.data);
    } catch (err) {
      res.status(401).json({ msg: 'Unauthorized' });
    }
  } else {
    res.status(405).json({ msg: 'Method not allowed' });
  }
}
