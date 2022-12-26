<template>
  <div>
    <Post :postData="postData" />
  </div>
</template>

<script>
import Post from './Post.vue'
export default {
    // data(){
    //     return {
    //         postData: postData
    //     }
    // },
    components: {
    Post
  },
  props: {
    postData: Array
  }
};
</script>

<style></style>
