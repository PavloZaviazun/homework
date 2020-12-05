export class PostService {

    url = "https://jsonplaceholder.typicode.com/posts";

    getAllPosts () {
        return fetch(this.url)
            .then(postsFromAPI => postsFromAPI.json())
            .then(postsFromAPI => postsFromAPI);
    }

}
