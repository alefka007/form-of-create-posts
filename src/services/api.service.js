class ApiService {
    constructor(baseUrl) {
        this.url = baseUrl
    }

    async createPost(post) {
        try {
            const request = new Request(this.url + '/post.json', {
                method: 'post',
                body: JSON.stringify(post)
            })
            return useRequest(request)
        } catch (error) {
            console.error(error)
        }
    
    }
    async  fetchPost() {
        try {
            const request = new Request(`${this.url}/post.json`, {
                method: 'get'
            })
            return useRequest(request)
        } catch (error) {
            console.error(error)
        }
    }

    async fetchPostById(id) {
        try {
            const request = new Request(`${this.url}/post/${id}.json`, {
                method: 'get'
            })
            return useRequest(request)
        } catch (error) {
            console.error(error)
        }
    }

}

async function useRequest (request) {
    const response = await fetch(request)
    return response.json()
}




export const apiService = new ApiService('https://data-project-b7a15-default-rtdb.firebaseio.com')