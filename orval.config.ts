import { defineConfig } from 'orval'

const apiBaseUrl = 'http://localhost:3333'

export default defineConfig({
  api: {
    input: `${apiBaseUrl}/docs/json`,
    output: {
      target: './src/http/api.ts',
      client: 'fetch',
      httpClient: 'fetch',
      clean: true,
      baseUrl: apiBaseUrl,

      override: {
        fetch: {
          includeHttpResponseReturnType: false, // disable response type
        },
      },
    },
  },
})
