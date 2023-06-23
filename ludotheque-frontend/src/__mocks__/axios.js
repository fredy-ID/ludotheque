import { afterEach, vi } from 'vitest'
import { baseURL, PATH_TO_GAME_API } from '@/services/game.service.js'
import GameModel from '../models/game.model'
import axios from 'axios'

const game1 = new GameModel('Jeu 1', 1)
const game2 = new GameModel('Jeu 2', 2)
const game3 = new GameModel('Jeu 3', 3)
const game4 = new GameModel('Jeu 4')
const game10 = new GameModel()

game10.id_jeu = 10
game10.name = 'Jeu 10'

export const GAME_GET_ALL_DATA = [{ data: [ game1, game2, game3 ] }]
export const GAME_GET_BY_ID_DATA = [{ data: game2 }]
export const GAME_POST_CREATE_DATA = game4
export const GAME_PATCH_UPDATE_DATA = [{ data: game10 }]
export const DEFAULT_TEST_ID = 2;


axios.get = vi.fn().mockImplementation((url) => {
    if (url === baseURL + PATH_TO_GAME_API) {
        return Promise.resolve({ data: GAME_GET_ALL_DATA });
    } 
    else if (url.endsWith(PATH_TO_GAME_API + '/' + DEFAULT_TEST_ID)) {
        return Promise.resolve({data: GAME_GET_BY_ID_DATA});
    }
});
axios.post = vi.fn().mockResolvedValue(
    Promise.resolve({ data: GAME_POST_CREATE_DATA})
);
axios.patch = vi.fn().mockResolvedValue(
    Promise.resolve({ data: GAME_PATCH_UPDATE_DATA})
);
axios.delete = vi.fn().mockResolvedValue(Promise.resolve());

afterEach(() => {
    vi.clearAllMocks()
})

export default axios
