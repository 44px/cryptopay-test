/* @ngInject */
export default function($http) {
    const SOURCE = 'https://raw.githubusercontent.com/bantic/imdb-data-scraping/master/data/movies.json';

    return {
        getList() {
            return $http.get(SOURCE).then((response) => {
                return Object.values(response.data);
            });
        },

        filter(list, query) {
            if (query === '') {
                return list;
            }

            const normalizedQuery = query.toLowerCase();
            return list.filter((film) => {
                return film.title.toLowerCase().indexOf(normalizedQuery) !== -1;
            });
        }
    };
}
