class Api {
    baseUrl = 'https://jsonplaceholder.typicode.com';
    subscribers = [];

    constructor() {
        this._startPollingComments();
    }

    async getComment(index) {
        await delay(2000);

        return fetch(`${this.baseUrl}/comments/${index}`).then(r => r.json());
    }

    async getUsers() {
        await delay(2000);

        return fetch(`${this.baseUrl}/users`).then(r => r.json());
    }

    async getUser(id) {
        await delay(2000);

        return fetch(`${this.baseUrl}/users/${id}`).then(r => r.json());
    }

    async getPosts() {
        await delay(2000);

        return fetch(`${this.baseUrl}/posts`).then(r => r.json());
    }

    async getPost(id) {
        await delay(2000);

        return fetch(`${this.baseUrl}/posts/${id}`).then(r => r.json());
    }

    async postForm() {
        return delay(2000);
    }

    subscribeComments(cb) {
        this.subscribers.push(cb);
    }

    unsubscribeComments(cb) {
        this.subscribers = this.subscribers.filter(
            subscriber => subscriber !== cb
        );
    }

    _startPollingComments() {
        let postIndex = 1;

        setInterval(async () => {
            if (this.subscribers.length) {
                const comment = await this.getComment(postIndex++);
                this.subscribers.forEach(cb => cb(comment));
            }
        }, 2000);
    }
}

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export default new Api();
