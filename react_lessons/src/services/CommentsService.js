export default class CommentsService {
    url = "https://jsonplaceholder.typicode.com/comments";

    async getComments() {
        return await fetch(this.url).then(value => value.json())
    }

    async getCommentsByID(id) {
        return await fetch(this.url + "/" + id).then(value => value.json())
    }
}
