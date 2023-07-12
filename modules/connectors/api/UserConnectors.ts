import axios from 'axios';
export default class UserConnectors{
    static async getUsers(){
        const response = await axios.get('https://dry-field-444.fly.dev/api/user/get-all');
        const data = response.data
        return data;
    }
}