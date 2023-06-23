import { afterEach, vi } from 'vitest'
import { baseURL, PATH_TO_GAME_API } from '@/services/game.service.js'
import axios from 'axios'

export const GAME_GET_ALL_DATA = [{ data: [ { id_jeu: '1', name: 'Jeu 1' }, { id_jeu: '2', name: 'Jeu 2' }, { id_jeu: '2', name: 'Jeu 3' } ] }]
export const GAME_GET_BY_ID_DATA = [{ data: { id_jeu: '2', name: 'Jeu 2' } }]
export const GAME_POST_CREATE_DATA = { id_jeu: '4', name: 'Jeu 4' }
export const GAME_PATCH_UPDATE_DATA = [{ data: { name: 'Jeu 10' } }]
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
