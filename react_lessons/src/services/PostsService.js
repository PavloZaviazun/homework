export default class PostsService {
    url = "https://jsonplaceholder.typicode.com/posts";

    async getPosts() {
        return await fetch(this.url).then(value => value.json())
    }
}
