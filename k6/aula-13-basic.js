import http from 'k6/http'
import { check, sleep } from 'k6'

export const options = {
    vus:5,
    duration: '10s',
    thresholds: {
        http_req_duration: ['p(95)<500'],        
    },
};

export default function () {
    const res = http.get('https://test.k6.io');

    check(res, {
        'status é 200': (r) => r.status === 200,
    });

    sleep(1);
}