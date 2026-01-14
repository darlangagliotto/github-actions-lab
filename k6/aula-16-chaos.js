import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  scenarios: {
    chaos_scenario: {
      executor: 'constant-vus',
      vus: 5,
      duration: '30s',
    },
  },
};

export default function () {
  const start = Date.now();

  const res = http.get('https://test.k6.io');

  const duration = Date.now() - start;

  check(res, {
    'status é 200 ou 500 (falha tolerada)': (r) =>
      r.status === 200 || r.status === 500,

    'responde em menos de 2s mesmo degradado': () =>
      duration < 2000,
  });

  sleep(Math.random() * 2);
}
