import axios from 'axios'

export const baseURL = 'http://localhost:8000/api';
export const PATH_TO_GAME_API = '/game';

const GameService = {
  async getGames() {
    return await axios.get(baseURL + PATH_TO_GAME_API)
    .then((response) => response.data)
    .catch((err) => err)
  },
  async getGame(id) {
    return await axios.get(baseURL + PATH_TO_GAME_API + '/' + id)
    .then((response) => response.data)
    .catch((err) => err)
  },
  async createGame(game) {
    return await axios.post(baseURL + PATH_TO_GAME_API, game)
    .then((response) => response.data)
    .catch((err) => err)
  },
  async updateGame(id, game) {
    return await axios.patch(baseURL + PATH_TO_GAME_API + '/' + id, game)
    .then((response) => response.data)
    .catch((err) => err)
  },
  async deleteGame(id) {
    return await axios.delete(baseURL + PATH_TO_GAME_API + '/' + id)
    .then((response) => response)
    .catch((err) => err)
  }
}

export default GameService;