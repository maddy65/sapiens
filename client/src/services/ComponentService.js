import axios from 'axios';

const baseUrl =  'http://localhost:3000/api'


class ComponentService{
    getAllStates(){
        return axios.get(baseUrl +'/states')
    }
}

export default new ComponentService()