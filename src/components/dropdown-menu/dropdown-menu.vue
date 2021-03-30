<template>
  <transition name="my-transition">
    <ul class="my-dropdown-menu" v-show="showPropper">
      <slot></slot>
    </ul>
  </transition>
</template>
<script>
import mixins from "../utiles/mixin";
export default {
  name: "MyDropdownMenu",
  componentName: "MyDropdownMenu",
  mixins: [mixins],
  props:{
    
  },
  data() {
    return {
       showPropper: false,
    };
  },
  mounted() {
    this.init();
    this.initEvent();
  },
  methods: {
    init() {
      this.buttonEle = this.$parent.$children[0].$el;
      this.dropdownEle = this.$el;
      document.body.appendChild(this.$el);
    },
    initEvent() {
      this.$on("visible", (val) => {
        this.showPropper = val;
        val && this.$emit("update", val);
      });
      this.$on("update", (val) => {
        val && this.update(this.buttonEle, this.dropdownEle);
      });
      this.bindUpdate(this.buttonEle, () => {
        this.showPropper && this.update(this.buttonEle, this.dropdownEle);
      });
    },
  },
};
</script>

<style scoped>
.my-dropdown-menu {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  padding-right: 20px;
  margin: 5px 0;
  background-color: #fff;
  border: 1px solid #ebeef5;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  z-index: 9999;
}
.my-transition-enter-active,
.my-transition-leave-active {
  opacity: 1;
  -webkit-transform: scaleY(1);
  transform: scaleY(1);
  -webkit-transition: opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1),
    -webkit-transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  transition: opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1),
    -webkit-transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1),
    opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1),
    opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1),
    -webkit-transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  -webkit-transform-origin: center top;
  transform-origin: center top;
}

.my-transition-enter,
.my-transition-leave-active {
  opacity: 0;
  -webkit-transform: scaleY(0);
  transform: scaleY(0);
}
</style>