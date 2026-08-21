import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import handler from './api/contact.ts'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  // Populate process.env for local API route execution
  Object.assign(process.env, env)

  return {
    plugins: [
      react(),
      {
        name: 'local-api-contact-handler',
        configureServer(server) {
          server.middlewares.use('/api/contact', async (req, res) => {
            if (req.method === 'OPTIONS') {
              res.setHeader('Access-Control-Allow-Origin', '*')
              res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
              res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept')
              res.statusCode = 200
              res.end()
              return
            }

            let bodyBuffer = ''
            req.on('data', (chunk: any) => {
              bodyBuffer += chunk
            })
            req.on('end', async () => {
              let parsedBody = {}
              try {
                if (bodyBuffer) parsedBody = JSON.parse(bodyBuffer)
              } catch {
                parsedBody = bodyBuffer
              }

              const customRes = {
                setHeader: (name: string, val: string) => res.setHeader(name, val),
                status: (code: number) => {
                  res.statusCode = code
                  return {
                    json: (data: any) => {
                      res.setHeader('Content-Type', 'application/json')
                      res.end(JSON.stringify(data))
                    },
                    end: () => res.end(),
                  }
                },
              }

              const customReq = {
                method: req.method,
                body: parsedBody,
                headers: req.headers,
              }

              try {
                await handler(customReq, customRes)
              } catch (e: any) {
                console.error('[Local API Error]:', e)
                res.statusCode = 500
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({ success: false, message: `Local API error: ${e?.message || 'Server exception'}` }))
              }
            })
          })
        },
      },
    ],
    server: {
      port: 5173,
      strictPort: true,
      host: true,
    },
  }
})
