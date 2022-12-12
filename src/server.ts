import App from '@/app';
import PushOrderRoute from '@routes/push.order.route';
import validateEnv from '@utils/validateEnv';

validateEnv();

const app = new App([new PushOrderRoute()]);

app.listen();
