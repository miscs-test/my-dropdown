<script>
import mixins from "../utiles/mixin";
export default {
  name: "MyDropdown",
  componentName: "MyDropdown",
  mixins: [mixins],
  data() {
    return {
      visible: false,
    };
  },
  mounted() {
    this.init();
    this.initEvent();
  },
  render() {
    return (
      <div class="my-dropdown">
        {this.$slots.default}
        {this.$slots.dropdown}
      </div>
    );
  },
  methods: {
    init() {
      this.buttonEle = this.$slots.default[0].elm; //按钮组件
      this.dropdownELe = this.$slots.dropdown[0].elm; //下拉框
    },
    initEvent() {
      this.buttonEle.addEventListener("click", this.handleClick); //给button绑定事件click
      this.$on("menu-item-click", this.handleMenuItemClick); //侦听'menu-item-click'事件
    },
    handleClick() {
      this.visible ? this.hide() : this.show();
    },
    removeIndex() {
      this.dropdownItem.forEach((element) => {
        element.setAttribute("tabindex", "-1");
      });
    },
    resetIndex(index) {
      this.dropdownItem[index].setAttribute("tabindex", "0");
    },
    hide() {
      //console.log("hide");
      this.visible = false;
      this.removeIndex();
    },
    show() {
      //console.log("show");
      this.visible = true;
    },
    handleMenuItemClick(command, instance) {
      console.log(command);
      this.$emit("command", command, instance);
    },
  },
  //当visible值发生改变，向子组件广播
  watch: {
    visible: function (val) {
      this.broadcast(this.$children, "MyDropdownMenu", "visible", [val]);
    },
  },
};
</script>
<style scoped>
.my-dropdown {
  display: inline-block;
  position: relative;
}
</style>