import movies from '../../data/movies.json';

// Numbers
const noOfMovies = movies.length;
describe('Numbers tests', () => {
    test('Number of items = 40', () => {
    expect(noOfMovies).toBe(40);
    });

    test('Number of items greater than 40', () => {
        expect(noOfMovies).toBeGreaterThanOrEqual(40);
    });
});

// Strings
const movieTitle = movies[0].Title;
describe('Strings tests', () => {
    test('The title has Harry', () => {
    expect(movieTitle).toMatch(/Harry/);
    });

    test('The title contains Secrets', () => {
        expect(movieTitle).toContain('Secrets');
    });
});

// Arrays
const data2 = ['Harry Potter', 'Cars 2'];
describe('Arrays tests',() => {
    test('The list movies mentions Harry Potter and Cars 2', () => {
        expect(['Harry Potter', 'Cars 2', 'Despicable']).toEqual(expect.arrayContaining(data2));
    });
});

// Object
describe('Object tests', () => {
    test('The first movie to have property of Title', () => {
        expect(movies[0]).toHaveProperty('Title');
    });

    test('The first movie to have imdbRating 7.4', () => {
        expect(movies[0]).toHaveProperty('imdbRating', '7.4');
    });
});

