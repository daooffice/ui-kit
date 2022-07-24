const getEnvVar = (key:string) => {
  if (import.meta.env[key] === undefined) {
    throw new Error(`Env variable ${key} is required`);
  }
  return import.meta.env[key] || '';
};

/** API entrypoint */
export const API_URL = getEnvVar('ENV_BASE_URL');

export const NODE_ENV = getEnvVar('NODE_ENV');

export const isDevEnv = NODE_ENV === 'development';

export const isProdEnv = NODE_ENV === 'production';
