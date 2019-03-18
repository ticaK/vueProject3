<template>
  <div id="app">
   <h1>Posts</h1>
   <div>
     <div v-for="post in posts" :key="post.id">
       <h3>{{post.title}}</h3>
       {{post.body}}
     </div>

   </div>
  </div>
  
</template>

<script>
import {postsService} from './services/PostsService'
export default {
  data(){
    return {
      posts:[]
    }
  },
  name: 'app',
  components: {
  },

  async created(){
    try{
    const{data}=await postsService.getPosts();
    //kada se resolvuje uzmemo mu data i nakacimo na nas post
    this.posts=data;
    
    const{data: newPost }=await postsService.create({
      name:"Pero",
      lastName:"Peric"
    });
    console.log(newPost);

    } catch(error){
      console.log(error);
    }
  }
  //   postsService.getPosts()
  //   .then(response=> response.data)
  //   .then(data=>{
  //     this.posts=data;

  //     postsService.create({
  //       name:"pero", lastName:"Peric"
  //     })
  //   .then(response=> response.data)
  //    .then(data=>{
  //    console.log(data)
  //    })
  //      .catch(e=>{
  //     console.log(e);
  //   });
      
  //   })
  //   .catch(e=>{
  //     console.log(e);
  //   })
  // }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
