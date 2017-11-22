import common from './env/common';
import development from './env/development';
import production from './env/production';

const envConfig = process.env.NODE_ENV === 'production' ?
  production : development;

export default Object.assign(common, envConfig);
