import { afterEach, describe, expect, test, vi } from 'vitest'
import GameService, { baseURL } from '@/services/api.js'
import axios from 'axios'

vi.mock('axios')

afterEach(() => {
  vi.clearAllMocks()
})

describe('GameService', () => {
  describe('getGames', () => {
    test('makes a GET request to fetch games', async () => {
      const gameMock = [{ data: [ { id_jeu: '2', name: 'Jeu 2' }, { id_jeu: '3', name: 'Jeu 3' } ] }]
      axios.get.mockResolvedValue({
        data: gameMock,
      })
    })
  })

  test('makes a GET request to fetch games 2', async () => {
    // const gameMock = [{ data: [ { id_jeu: '2', name: 'Jeu 2' }, { id_jeu: '3', name: 'Jeu 3' } ] }]
    axios.get.mockResolvedValue()
    await GameService.getGames()
    expect(axios.get).toHaveBeenCalledWith(baseURL + '/game')
    expect(axios.get).toHaveBeenCalledTimes(1)
    // expect(axios.get).toMatchInlineSnapshot();
  })
  
  test('makes a GET request to fetch game by ID', async () => {
    const gameMock = [{ data: { id_jeu: '2', name: 'Jeu 2' } }]
    axios.get.mockResolvedValue({
      data: gameMock,
    })
    const games = await GameService.getGame(2)
    expect(axios.get).toHaveBeenCalledWith(baseURL + '/game/' + 2)
    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(games.data).toStrictEqual(gameMock)
  })

  test('makes a POST request to add game', async () => {
    const gameMock = { id_jeu: '2', name: 'Jeu 2' }
    axios.post.mockResolvedValue({
      data: gameMock,
    })
    const games = await GameService.createGame(gameMock)
    expect(axios.post).toHaveBeenCalledWith(baseURL + '/games', gameMock)
    expect(axios.post).toHaveBeenCalledTimes(1)
    expect(games.data).toStrictEqual(gameMock)
  })

  test('makes a PUT request to update game', async () => {
    const gameMock = { id_jeu: '5', name: 'Jeu 10' }
    axios.put.mockResolvedValue({
      data: gameMock,
    })
    const games = await GameService.updateGame(2, gameMock)
    expect(axios.put).toHaveBeenCalledWith(baseURL + '/game/' + 2, gameMock)
    expect(axios.put).toHaveBeenCalledTimes(1)
    expect(games.data).toStrictEqual(gameMock)
  })

  test('makes a DELETE request to update game', async () => {
    axios.delete.mockResolvedValue()

    const games = await GameService.deleteGame(2)
    expect(axios.delete).toHaveBeenCalledWith(baseURL + '/game/' + 2)
    expect(axios.delete).toHaveBeenCalledTimes(1)
    expect(games).toStrictEqual()
  })
})
