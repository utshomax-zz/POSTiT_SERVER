import http from 'k6/http';
import { sleep } from 'k6';

export default function() {
  http.get('https://podts.herokuapp.com/api/locs');
  sleep(1);
}