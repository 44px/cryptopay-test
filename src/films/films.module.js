import angular from 'angular';
import FilmsListComponent from './films-list/films-list.component';
import FilmComponent from './film/film.component';
import FilmsService from './films.service';

export default angular.module('app.films', [])
    .factory('Films', FilmsService)
    .component('filmsList', FilmsListComponent)
    .component('film', FilmComponent)
    .config(($stateProvider) => {
        $stateProvider.state('films', {
            url: '/films',
            component: 'filmsList',
            resolve: {
                list: (Films) => {
                    /* @ngInject */
                    return Films.getList();
                }
            }
        });
    })
    .name;
