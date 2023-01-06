<template>
<div>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-show="step == 1" @click="next">Next</li>
      <li v-show="step ==2" @click="publish">발행</li>
    </ul>
    <img
      src="./assets/logo.png"
      class="logo"
    />
  </div>

  <Container :postData="postData" :step="step" :url="url" @write="this.content = $event"/>
  <button v-show="step === 0" @click="more">더보기</button>
  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload"
        type="file"
        id="file"
        class="inputfile"
      />
      <label
        for="file"
        class="input-plus"
        >+</label
      >
    </ul>
  </div>
  </div>
</template>

<script>
import Container from './components/Container.vue'
import postData from './assets/data.js'
import axios from 'axios'
axios.post()

export default {
  name: "App",
  data(){
    return {
      postData,
      count: 0,
      step: 0,
      url: null,
      content: null
    }
  },
  components: {
    Container
  },
  methods: {
    more() {
      this.count++;
      if (this.count == 1){
      axios.get('https://codingapple1.github.io/vue/more0.json')
      .then(res => {
        console.log(res.data);
        this.postData.push(res.data);
      })}
      else if (this.count > 1){
      axios.get('https://codingapple1.github.io/vue/more1.json')
      .then(res => {
        console.log(res.data);
        this.postData.push(res.data);
      })
      }
    },
    upload(e) {
      let file = e.target.files;
      console.log(file[0]);
      let url = URL.createObjectURL(file[0]);
      this.url = url
      this.step++;
    },
    next() {
        this.step++
    },
    publish() {
      let myPost = {
        name: "Tube",
        userImage: "https://t1.kakaocdn.net/friends/prod/character/character_20221115085111_57b1a8d285d74e7ca3e69fe604294c82.png",
        postImage: this.url,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.content,
        filter: "perpetua"
      };
      this.postData.unshift(myPost);
      this.step = 0;
    }
  }
};
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
