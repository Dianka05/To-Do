import axios from 'axios'

export const TodoService = {
    async getAll(){
        const response = await axios.get('http://localhost:3000/todobase');

        return response.data;
    },
    async create(data, id){
        return axios.post('http://localhost:3000/todobase', data);
    },
}