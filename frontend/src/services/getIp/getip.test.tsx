import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { getIp } from './GetIp';

const response = { test: 'testing' };

const server = setupServer(
    rest.get('https://ip-fast.com/api/ip/?format=json', (req, res, ctx:any) => {
        return res(ctx.json(response));
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('get ip transform json response into object', async () => {
    const ip = await getIp();

    expect(ip).toStrictEqual(response);
});