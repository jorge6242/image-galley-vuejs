<template>
  <div class="pagination">
    <div class="pagination__button">
      <button @click="handlePrevious">Previous</button>
    </div>
    <div class="pagination__search">
      <input type="text" v-on:input="handleSearch" placeholder="Search by author" />
    </div>
    <div class="pagination__page">
      <span>Page {{ page }}</span>
      <select @change="onChangeLimit">
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="40">40</option>
        <option value="50">50</option>
        <option value="60">>60</option>
        <option value="70">70</option>
        <option value="80">80</option>
        <option value="90">90</option>
        <option value="100">100</option>
      </select>
    </div>
    <div class="pagination__button">
      <button @click="handleNext">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    page: {
      type: Number
    },
    handlePrevious: {
      type: Function
    },
    onChangeLimit: {
      type: Function
    },
    handleNext: {
      type: Function
    },
    handleSearch: {
      type: Function
    }
  }
};
</script>

<style lang="scss" scope>
@import "../../style/colors.scss";
@import "../../style/responsiveRules.scss";

.pagination {
  display: flex;
  justify-content: space-around;
  .pagination__search {
    input {
      padding: 10px;
      border: 1px solid $dark-blue;
      border-radius: 50px;
    }
    input:focus {
      outline: 0;
    }
  }
  .pagination__page {
    span {
      background: $dark-blue;
      padding: 10px;
      border-radius: 50px;
      color: $default-white;
      font-size: 15px;
    }
    select {
      background: $dark-blue;
      border: 1px $default-white solid;
      color: $default-white;
      padding: 10px;
      font-size: 15px;
      border-radius: 50px;
    }
    select:focus {
      outline: 0;
    }
  }
  .pagination__button {
    button {
      background: $dark-blue;
      color: $default-white;
      border: 1px $default-white solid;
      border-radius: 50px;
      font-size: 20px;
      padding: 10px;
      cursor: pointer;
    }
    button:focus {
      outline: 0;
    }
  }
}

@include phone("default", "default", portrait) {
  .pagination {
    .pagination__search {
      width: 30%;
      input {
        padding: 6px;
        width: 83%;
        font-size: 10px;
      }
    }
    .pagination__page {
      span {
        font-size: 10px;
        padding: 6px;
      }
      select {
        font-size: 10px;
        padding: 6px;
      }
    }
    .pagination__button {
      button {
        font-size: 10px;
        padding: 6px;
      }
    }
  }
}
</style>