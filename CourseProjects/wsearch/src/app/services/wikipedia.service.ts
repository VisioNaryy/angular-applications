import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pluck } from 'rxjs/operators';

//FIX: we won't provide all properties of response in this interface - only the most relevant
interface WikipediaResponse {
  query: {
    search: {
      title: string;
      snippet: string;
      pageid: number;
    }[];
  };
}

@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  constructor(private httpClient: HttpClient) {}

  public search(term: string) {
    return this.httpClient
      .get<WikipediaResponse>(`https://en.wikipedia.org/w/api.php`, {
        params: {
          action: 'query',
          format: 'json',
          list: 'search',
          uft8: '1',
          srsearch: term,
          origin: '*',
        },
      })
      .pipe(pluck('query', 'search'));
  }
}
