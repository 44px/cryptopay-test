import angular from 'angular';
import CoreModule from './core/core.module';
import FilmsModule from './films/films.module';

angular.module('app', [
    CoreModule,
    FilmsModule
]).config(($compileProvider) => {
    $compileProvider.debugInfoEnabled(process.env.NODE_ENV !== 'production');
    $compileProvider.commentDirectivesEnabled(false);
    $compileProvider.cssClassDirectivesEnabled(false);
});
