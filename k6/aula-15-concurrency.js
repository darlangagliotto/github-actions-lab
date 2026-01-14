import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  scenarios: {
    concurrent_users: {
      executor: 'per-vu-iterations',
      vus: 10,
      iterations: 1,
      maxDuration: '30s',
    },
  },
};

export default function () {
  const res = http.get('https://test.k6.io');

  check(res, {
    'status é 200': (r) => r.status === 200,
  });

  sleep(1);
}
