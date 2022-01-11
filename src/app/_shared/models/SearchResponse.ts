export interface SearchResponse {

  data: Data;
}

interface Data {
  mysql: Result;
  elastic: Result;
}

interface Result {
  time: number;
  results: number;
}
