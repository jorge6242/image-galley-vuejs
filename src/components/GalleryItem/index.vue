<template>
  <div class="gallery-item">
    <img class="gallery-item__image" v-lazy="url" alt="image test" />
    <div class="gallery-item__description">
      <div class="gallery-item__author">{{ author }}</div>
      <div class="gallery-item__id">
        <span># {{ id }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    author: {
      type: String
    },
    id: {
      type: Number
    }
  },
  data: function() {
    return {
      url: `https://picsum.photos/id/${this.id}/367/267`
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../style/colors.scss";
@import "../../style/responsiveRules.scss";

.gallery-item {
  .gallery-item__description {
    width: 100%;
    display: flex;
    justify-content: space-around;
    .gallery-item__author {
      color: $dark-blue;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
  .gallery-item__image {
    max-width: 100%;
    width: 367px;
    height: auto;
    margin: 10px;
  }
}

@include phone("default", "default", portrait) {
  .gallery-item {
    .gallery-item__description {
      .gallery-item__author {
        font-size: 10px;
      }
      .gallery-item__id {
        width: 30%;
        font-size: 10px;
      }
    }
    .gallery-item__image {
      width: 100px;
    }
  }
}


</style>