<template>
  <div>
    <category-selector :categories="categories"></category-selector>
  </div>
</template>   

<script>
import CategorySelector from "../components/CategorySelector.vue";
import actions from "../actions";

export default {
  name: "Home",
  components: {
    "category-selector": CategorySelector,
  },
  data() {
    return {
      categories: null,
    };
  },
  mounted: function () {
    actions
      .getBookCategories()
      .then((categories) => (this.categories = categories));
  },
};
</script>
