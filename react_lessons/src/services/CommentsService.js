export default class CommentsService {
    url = "https://jsonplaceholder.typicode.com/comments";

    async getComments() {
        return await fetch(this.url).then(value => value.json())
    }
}
