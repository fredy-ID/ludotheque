import { describe, afterEach, it, expect, vi} from 'vitest'
import mockAxios from 'vitest-mock-axios';
import GameService from '@/services/api.js'


afterEach(() => {
  // cleaning up the mess left behind the previous test
  mockAxios.reset();
});

describe('GameService', () => {
  it('getGames', async () => {

    const wrap_data = await GameService.getGames()
    

    expect(mockAxios.get).toHaveBeenCalledWith('/game');

    const gameMock = [ { id_jeu: '2', name: 'Jeu 2' }, { id_jeu: '3', name: 'Jeu 3' } ] 
    mockAxios.mockResponse(gameMock);

    expect(mockAxios.get).toHaveBeenCalledWith('/game');
    // expect(mockAxios.get).toMatchInlineSnapshot();
    // expect(axios.get).toHaveBeenCalledTimes(1)
    // expect(wrap_data).toStrictEqual(gameMock)
  })
})
