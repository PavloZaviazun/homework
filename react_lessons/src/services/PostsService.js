export default class PostsService {
    url = "https://jsonplaceholder.typicode.com/posts";

    async getPosts() {
        return await fetch(this.url).then(value => value.json())
    }

    async getPostsByID(id) {
        return await fetch(this.url + "/" + id).then(value => value.json())
    }
}
