import { describe, expect, test, vi } from 'vitest'
import GameService from '@/services/api.js'
import axios from 'axios'

vi.mock('axios')

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
    const gameMock = [{ data: [ { id_jeu: '2', name: 'Jeu 2' }, { id_jeu: '3', name: 'Jeu 3' } ] }]

    axios.get.mockResolvedValue({
      data: gameMock,
    })
    const games = await GameService.getGames()
    expect(axios.get).toHaveBeenCalledWith('http://localhost:8000/api/game')
    expect(games).toStrictEqual(gameMock)
  })
})

// import { describe, afterEach, it, expect, vi} from 'vitest'
// import mockAxios from 'vitest-mock-axios';
// import GameService from '@/services/api.js'


// afterEach(() => {
//   // cleaning up the mess left behind the previous test
//   mockAxios.reset();
// });

// describe('GameService', () => {
//   it('getGames', async () => {

//     const wrap_data = await GameService.getGames()
//     expect(mockAxios.get).toHaveBeenCalledWith('/game');

//     const gameMock = [ { id_jeu: '2', name: 'Jeu 2' }, { id_jeu: '3', name: 'Jeu 3' } ] 
//     mockAxios.mockResponse(gameMock);

//     expect(mockAxios.get).toHaveBeenCalledWith('/game');
//     // expect(mockAxios.get).toMatchInlineSnapshot();
//     // expect(axios.get).toHaveBeenCalledTimes(1)
//     // expect(wrap_data).toStrictEqual(gameMock)
//   })
// })
