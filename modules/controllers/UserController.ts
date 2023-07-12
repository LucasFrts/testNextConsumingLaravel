import { NextApiRequest, NextApiResponse } from 'next';
import UserConnectors from '../connectors/api/UserConnectors';
const getUsersService = async (req:NextApiRequest, res:NextApiResponse) => {
  try {
    const data = await UserConnectors.getUsers();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
};

export {getUsersService};