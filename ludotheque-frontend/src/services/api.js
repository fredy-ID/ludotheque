import axios from 'axios'

const baseURL = 'http://localhost:8000/api'; 

const GameService = {
  getGames() {
    return axios.get(baseURL + '/game')
  },
  getGame(id) {
    return axios.get(baseURL + '/game/' + id)
  },
  createGame(game) {
    return axios.post(baseURL + '/games', game)
  },
  updateGame(id, game) {
    return axios.put(baseURL + '/game/' + id, game)
  },
  deleteGame(id) {
    return axios.delete(baseURL + '/game/' + id)
  }
}

export default GameService;