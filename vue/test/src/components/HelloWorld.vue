<template>
  <div>
    <p>이름을 입력하세요 <input type="text" v-on:input="typing" v-model="name"></p>
    <h1>{{ name }} 하이!</h1>
    <p>계산기</p>
    <input type="number" v-model="a">
    <select v-model="symbol">
      <option value="+">+</option>
      <option value="-">-</option>
      <option value="*">*</option>
      <option value="/">/</option>
    </select>
    <input type="number" v-model="b">
    <p v-if="symbol === '+'" >
      {{ parseInt(a) + parseInt(b) }}
    </p>
    <p v-if="symbol === '-'" >
      {{ a - b }}
    </p>
    <p v-if="symbol === '*'" >
      {{ a * b }}
    </p>
    <p v-if="symbol === '/'" >
      {{ a / b }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      name: '',
      a: null,
      b: null,
      symbol: null
    }
  },
  methods: {
    typing(e) {
      this.name = e.target.value
    }
  }
}
</script>

<style scoped>

</style>
