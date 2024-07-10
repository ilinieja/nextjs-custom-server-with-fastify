import { describe, it, expect } from 'vitest'
import fastify from './fastify'

describe('Test server health', () => {
  it('serve GET /_health', async () => {
    const res = await fastify.inject('/_health')
    expect(res.json()).toEqual({ status: 'OK' })
  })
})
