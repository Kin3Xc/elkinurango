import GetProfile from './getProfile';

let token = '';
const API_URL = 'person.json'; // url api

let get = new GetProfile(API_URL, token);
get.getProfile();