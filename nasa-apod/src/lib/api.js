import axios from 'axios';

export function getAPOD(date = '') { //date가 비어있을때는 공백을 넣음
    return axios.get(`https://api.nasa.gov/planetary/apod?api_key=2GoP4ViL1QV6kWVJuTPfjKhe5jwzmCnc3WhhH5nU&date=${date}`);
}
