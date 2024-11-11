import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { username, password } = req.body;
      const response = await axios.post('http://localhost:5000/login', {
        username,
        password,
      });
      res.status(200).json(response.data);
    } catch (err) {
      res.status(401).json({ msg: 'Invalid username or password' });
    }
  } else {
    res.status(405).json({ msg: 'Method not allowed' });
  }
}
