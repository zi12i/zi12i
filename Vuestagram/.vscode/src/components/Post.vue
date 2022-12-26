<template>
<div>
  <div v-for="(post, i) in postData" :key="post" class="post">
    <div class="post-header">
      <div class="profile" :style="{ backgroundImage : `url(${postData[i].userImage})` }">
        <!-- <img class="profile-image" :src="postData[i].userImage"> -->
      </div>
      <span class="profile-name">{{ postData[i].name}}</span>
    </div>
    <div class="post-body" :style="{ backgroundImage : `url(${postData[i].postImage})` }">
      <!-- <img class="uploaded-image" :src="postData[i].postImage"> -->
    </div>
    <div class="post-content">
      <p>{{ postData[i].likes }} Likes</p>
      <p><strong>{{ postData[i].name }}</strong> {{ postData[i].content }}</p>
      <p class="date">{{ postData[i].date }}</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    postData: Array
  }
}
</script>

<style>
.post {
  width: 100%;
}
.profile {
  background-image: url("https://placeimg.com/100/100/arch");
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}
.profile-image {
  background-size: 100%;
  border-radius: 50%;
  width: 100%;
  height: 100%;
}
.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}
.post-header {
  height: 30px;
  padding: 10px;
}
.post-body {
  background-image: url("https://placeimg.com/640/480/animals");
  height: 450px;
  background-position: center;
  background-size: cover;
}
.uploaded-image {
  background-size: 100%;
  width: 100%;
  height: 100%;
}
.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}
.date {
  font-size: 11px;
  color: grey;
  margin-top: -8px;
} 
</style>