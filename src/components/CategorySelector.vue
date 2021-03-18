<template>
  <div>
    <div>
      <h1>Categories</h1>
      <ul class="no-list">
        <li v-for="category in categories" :key="category">
          <button class="category" @click="$router.push('/search/' + category)">
            {{ category }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategorySelector",
  props: ["categories"],
};
</script>

<style scoped>
/*esta clase sirve solo para ese componente*/
.no-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
}

.no-list li button {
  width: 90%;
}

@media (min-width: 768px) {
  .no-list {
    flex-direction: row;
  }
  .no-list li button {
    width: inherit;
  }
  ul{
    margin-top: 80px;
    margin-left: 25px;
    margin-right: 25px;
  }
}

.category {
  border-radius: 4px;
  display: inline-flex;
  padding: 0 16px;
  position: relative;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  border: 1px solid #464646;
  color: #464646;
  transition: 0.3s;
  font-size: 16px;
  height: 50px;
  font-weight: 700;
  margin-right: 8px;
  background-color: transparent;
  margin: 5px;
}

.category:hover {
  background-color: #464646;
  color: #fff;
}

</style>
