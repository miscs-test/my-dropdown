<template>
  <div class="my-dropdown-item" @click="handleClick">
    <label>
      <input type="checkbox" />
      <slot></slot>
    </label>
  </div>
</template>
<script>
import mixins from "../utiles/mixin";
export default {
  name: "MyDropdownItem",
  componentName: "MyDropdownItem",
  mixins: [mixins],
  props: {
    command: {},
  },
  methods: {
    //像父组件MyDropdown传递conmand
    handleClick() {
      this.dispatch(this.$parent, "MyDropdown", "menu-item-click", [
        this.command,
        this,
      ]);
    },
  },
};
</script>