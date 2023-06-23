import { describe, expect, test } from 'vitest'
import GameService, { baseURL, PATH_TO_GAME_API } from '@/services/game.service.js'
import axios, {
  DEFAULT_TEST_ID, 
  GAME_POST_CREATE_DATA,
  GAME_GET_BY_ID_DATA, 
  GAME_PATCH_UPDATE_DATA, 
  GAME_GET_ALL_DATA } from '../__mocks__/axios'

describe('GameService', () => {

  test('makes a GET request to fetch all games', async () => {
    const games = await GameService.getGames()
    expect(axios.get).toHaveBeenCalledWith(baseURL + PATH_TO_GAME_API)
    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(games).toStrictEqual(GAME_GET_ALL_DATA)
    // expect(axios.get).toMatchInlineSnapshot();
  })

  test('makes a GET request to fetch game by ID', async () => {
    const games = await GameService.getGame(DEFAULT_TEST_ID)
    expect(axios.get).toHaveBeenCalledWith(baseURL + PATH_TO_GAME_API + '/' + DEFAULT_TEST_ID)
    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(games).toStrictEqual(GAME_GET_BY_ID_DATA)
  })

  test('makes a POST request to add game', async () => {
    const gameMock = GAME_POST_CREATE_DATA
    const games = await GameService.createGame(gameMock)
    expect(axios.post).toHaveBeenCalledWith(baseURL + PATH_TO_GAME_API, gameMock)
    expect(axios.post).toHaveBeenCalledTimes(1)
    expect(games).toStrictEqual(gameMock)
  })

  test('makes a PATCH request to update game', async () => {
    const games = await GameService.updateGame(DEFAULT_TEST_ID, GAME_PATCH_UPDATE_DATA)
    expect(axios.patch).toHaveBeenCalledWith(baseURL + PATH_TO_GAME_API + '/' + DEFAULT_TEST_ID, GAME_PATCH_UPDATE_DATA)
    expect(axios.patch).toHaveBeenCalledTimes(1)
    expect(games).toStrictEqual(GAME_PATCH_UPDATE_DATA)
  })

  test('makes a DELETE request to update game', async () => {
    const games = await GameService.deleteGame(DEFAULT_TEST_ID)
    expect(axios.delete).toHaveBeenCalledWith(baseURL + PATH_TO_GAME_API + '/' + DEFAULT_TEST_ID)
    expect(axios.delete).toHaveBeenCalledTimes(1)
    expect(games).toStrictEqual()
  })
})
