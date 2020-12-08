export class PostService {

    url = "https://jsonplaceholder.typicode.com/posts";

    getPosts(id) {
        return fetch(this.url + "?userId=" + id)
            .then(value => value.json())
            .then(postsFromAPI => postsFromAPI);
    }
}
