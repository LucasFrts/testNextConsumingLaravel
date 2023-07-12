import { NextApiRequest, NextApiResponse } from 'next';
import { getUsersService } from '@/modules/controllers/UserController';
const getUsers = (req:NextApiRequest, res:NextApiResponse) => {
    if(req.method == 'GET'){
        return getUsersService(req, res);
    }
    res.status(405).json({ error: 'Method Not Allowed' });
};
export default getUsers;