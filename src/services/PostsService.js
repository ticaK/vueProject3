import {httpService} from './HttpService';

class PostsService {

    create(post){
        return httpService.post('/posts',post);
        // post prodljedjujemo kao body
    }
    getPosts(){
        return httpService.get('/posts');
        
    }
}

export const postsService = new PostsService();