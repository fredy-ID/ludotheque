import axios from 'axios'

// Création d'une instance d'axios avec l'URL de base de votre API
const apiClient = axios.create({
  baseURL: 'http://localhost:8000/api', // remplacez ceci par l'URL de base de votre API Django
//   withCredentials: false,
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json'
//   }
})

const GameService = {
  // Méthode pour récupérer tous les jeux
  getGames() {
    return apiClient.get('/game')
  },

  // Méthode pour récupérer un game spécifique par son ID
  getGame(id) {
    return apiClient.get('/game/' + id)
  },

  // Méthode pour créer un nouveau game
  createGame(game) {
    return apiClient.post('/games', game)
  },

  // Méthode pour mettre à jour un game spécifique par son ID
  updateGame(id, game) {
    return apiClient.put('/game/' + id, game)
  },

  // Méthode pour supprimer un game spécifique par son ID
  deleteGame(id) {
    return apiClient.delete('/game/' + id)
  }
}

export default GameService;