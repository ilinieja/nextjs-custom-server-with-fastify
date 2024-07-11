import envSchema, { JSONSchemaType } from 'env-schema';

export interface Env {
  PORT: number;
  HOST: string;
}

const schema: JSONSchemaType<Env> = {
  type: 'object',
  required: ['PORT', 'HOST'],
  properties: {
    PORT: {
      type: 'number',
      default: 3000,
    },
    HOST: {
      type: 'string',
      default: '0.0.0.0',
    },
  },
};

export default envSchema({
  dotenv: true,
  schema,
});
