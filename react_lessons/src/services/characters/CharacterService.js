export default class CharacterService {
    async getCharacter(url) {
        return await fetch(url).then(value => value.json())
    }
}
