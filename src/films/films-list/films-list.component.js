import template from './films-list.html';
import './films-list.scss';

export default {
    bindings: {
        list: '<'
    },
    controller: FilmsListController,
    template
};


/* @ngInject */
function FilmsListController(Films) {
    const vm = this;

    vm.filterData = (query = '') => {
        vm.filteredList = Films.filter(vm.list, query);
    };

    vm.$onInit = () => {
        vm.query = '';
        vm.filteredList = Films.filter(vm.list, vm.query);
    };
}
