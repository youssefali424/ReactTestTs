import {of} from 'rxjs';
import {fromFetch} from 'rxjs/fetch';
import {switchMap, catchError} from 'rxjs/operators';

const baseUrl = 'https://jsonplaceholder.typicode.com/todos/';
const getData = (query) => {
  return fromFetch(baseUrl+query).pipe(
    switchMap(response => {
      if (response.ok) {
        // OK return data
        return response.json();
      } else {
        // Server is returning a status requiring the client to try something else.
        return of({error: true, message: `Error ${response.status}`});
      }
    }),
    catchError(err => {
      // Network or other error, handle appropriately
      console.error(err);
      return of({error: true, message: err.message});
    }),
  );
};
export default getData;