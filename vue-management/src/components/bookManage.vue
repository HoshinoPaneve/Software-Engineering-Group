<template>
  <div>
    <button class="primary" @click="newImg">刷新</button>
    <img :src="img">
    <ul>
      <li v-for="book in booklist" :key="book.index">
        <span>{{ book.name }}</span>
        <span>{{ book.author }}</span>
      </li>

    </ul>
    <button class="primary" @click="showModel">添加图书</button>
    <router-link to="/book/bookAdd">添加</router-link>
    <router-link to="/book/bookDelete">删除</router-link>
    <router-view />
    <div class="overlay">
      <div class="model">
        <input type="text" v-model="name">
        <input type="text" v-model="author">
        <button class="primary" @click="addBook">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      name: '',
      author: '',
      count: 3,
      booklist: [{ index: 1, name: '《红楼梦》', author: '曹雪芹' }, { index: 2, name: '《水浒传》', author: '施耐庵' }],
      img: ''
    }
  },
  methods: {
    addBook () {
      this.booklist.push({index: this.count, name: this.name, author: this.author})
      this.closeModel()
    },
    showModel () {
      document.querySelector('.overlay').style.display = 'block'
    },
    closeModel () {
      document.querySelector('.overlay').style.display = 'none'
    },
    newImg () {
      axios.get('/book/newImg').then(res => {
        console.log(res)
        this.img = res.data.data.img
      })
    }
  }
}
</script>

<style>
.primary {
  background-color: dodgerblue;
  color: aliceblue;
  border-radius: 5px;
  width: 100px;
  height: 50px;
  border: 0;
}

.primary:hover {
  background-color: deepskyblue;
  cursor: pointer;
}

.model {
  margin: 10% auto;
  border: 1px solid black;
  border-radius: 2%;
  background-color: aliceblue;
  height: 400px;
  width: 700px;
}

.overlay {
  display: none;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}
</style>
