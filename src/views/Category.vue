<template>
  <div>
    <h1>Search {{ $route.params.category }} books:</h1>
    <input
      v-on:keyup.enter="onEnter"
      class="search"
      type="text"
      placeholder="Enter the book title"
    />
    <h2 v-if="query">Results for {{ query }}</h2>
    <div class="container-card">
      <div class="card" v-for="result in results" :key="result">
        <div class="link">
          <font-awesome-icon icon="book" class="icon-book" />
          <a
            :href="
              '//www.google.com/search?q=' + result.title + '+' + result.author
            "
            target="_blank"
          >
            <p>more info</p>
            <font-awesome-icon icon="chevron-right" class="icon-chevron-right" />
          </a>
        </div>
        <div class="info">
          <h1>{{ result.title }}</h1>
          <p>{{ result.description }}</p>
          <h3>{{ result.author }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import actions from "../actions";

export default {
  data() {
    return {
      query: null,
      results: null,
    };
  },
  methods: {
    onEnter: function (evt) {
      this.query = evt.target.value;
      actions
        .searchBookCategory(this.query)
        .then((books) => (this.results = books));
    },
  },
};
</script>

<style scoped>
.search {
  width: 90%;
  height: 40px;
  box-shadow: 0 0 4px 0 rgb(0 0 0 / 20%);
  border-color: #eaeaea;
  border-radius: 7px;
  text-align: center;
  font-size: 20px;
  color: #2c3e50;
}
input:focus {
  outline: 0;
}
.container-card{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  max-width: 100%;
  margin: 20px;
  font-size: 17px;
  padding: 10px;
  width: 500px;
}
.link {
  background-color: #070707;
  color: #fff;
  padding: 15px;
  max-width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}
.info{
    padding: 30px;
    position: relative;
    width: 100%;
}
.info h1{
    font-size: 10px;
}
.icon-book {
  font-size: 50px;
  color:#464646
}
.icon-chevron-right{
    margin: 5px;
    color:#464646
}

h1{
    font-size: 1rem;
}

h2{
    margin: 15px 0 11px 25px;
    text-align: initial;
    font-size: 15px;
}
h3{
    font-size: 13px;
}
p{
    font-size: 13px;
}
a{
     text-decoration: none;
     color: #757575;
         display: flex;
    margin-top: 10px;
   }
@media (min-width: 768px) {
  h1{
      font-size: 2rem;
  }
  .search{
      width: 70%;
     height: 40px;
     font-size: 30px;
     color: #1e2831;
  }
  h2{
      font-size: 25px;
  }
  .link{
      padding: 30px;
  }
 
  
}

</style>
