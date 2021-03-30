import MyButton from './button'
import MyDropdown from './dropdown'
import MyDropdownMenu from './dropdown-menu'
import MyDropdownItem from './dropdown-item'
const components = [MyButton, MyDropdown, MyDropdownMenu,MyDropdownItem];
const install = function (Vue) {
    components.map(component => {
        Vue.component(component.name, component);
    })
}
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
export default {
    MyButton,
    MyDropdown,
    MyDropdownMenu,
    MyDropdownItem,
    install,
}