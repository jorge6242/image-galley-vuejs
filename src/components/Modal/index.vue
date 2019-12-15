<template>
  <div class="modal-main">
    <div class="modal-main__backdrop">
      <div class="modal-main__modal">
        <header class="modal-main__modal-header">
            <button type="button" class="modal-main__btn-close" @click="close">x</button> 
        </header>
        <section class="modal-main__modal-body">
          <slot></slot>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal",
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>

<style lang="scss" scope>
.modal-main {
  background-color: rgba(0, 0, 0, 0.6);
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1300;
  pointer-events: unset;
  opacity: 1;
  .modal-main__backdrop {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: auto;
    margin: 48px;
    .modal-main__modal {
      background-color: #fff;
      max-width: 660px;
      border-radius: 4px;
      z-index: 999;
      pointer-events: auto;
      cursor: auto;
      box-shadow: 0 3px 7px rgba(0, 0, 0, 0.6);
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      height: fit-content;
      margin: auto;
      border-radius: 8px;
      flex-direction: column;
      overflow: hidden;
    }
    .modal-main__modal-header {
      display: flex;
      border-bottom: 1px solid #eeeeee;
      color: #4aae9b;
      justify-content: space-between;
    }
    .modal-main__modal-body {
      position: relative;
      padding: 20px 10px;
      max-height: calc(100vh - 210px);
      overflow-y: auto;
    }
    .modal-main__btn-close {
      border: none;
      font-size: 20px;
      padding: 20px;
      cursor: pointer;
      font-weight: bold;
      color: #777;
      background: transparent;
    }
  }
}
</style>