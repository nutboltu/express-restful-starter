import common from './env/common';
import development from './env/development';
import production from './env/production';

// eslint-disable-next-line no-process-env
const envConfig = process.env.NODE_ENV === 'production' ?
  production : development;

export default Object.assign(common, envConfig);
