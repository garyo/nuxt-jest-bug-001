import { resolve } from 'path'
import { Nuxt, Builder } from 'nuxt'
import { JSDOM } from 'jsdom'

import nuxtConfig from '../nuxt.config.js'

// We keep the nuxt and server instance
// So we can close them at the end of the test
let nuxt = null

beforeAll(async (done) => {
  let config = {
    dev: false,
    rootDir: resolve(__dirname, '..')
  }
  const startTime = Date.now()
  console.log('beforeAll...')
  config = Object.assign(nuxtConfig, config)
  nuxt = new Nuxt(config)
  console.log('about to build...')
  await new Builder(nuxt).build() // takes ~94 sec on my machine, march 2020
  console.log('about to run server...')
  await nuxt.server.listen(4000, 'localhost')
  console.log(`Server started: t+${(Date.now() - startTime)/1000} sec`)
  done()
}, 120000)

// Close server and ask nuxt to stop listening to file changes
afterAll(() => {
  nuxt.close()
})

test('Route / exits and render HTML', async () => {
  const context = {}
  const { html } = await nuxt.server.renderRoute('/', context)
  expect(html).not.toBeNull()
  expect(html).toContain('Dark Star Systems')
})

// Example of testing via dom checking
test('Route / exits and render HTML with CSS applied', async () => {
  const context = {}
  const { html } = await nuxt.server.renderRoute('/', context)
  const { window } = new JSDOM(html).window
  const element = window.document.querySelector('.v-toolbar__title')
  expect(element).not.toBeNull()
  expect(element.textContent).toBe('Dark Star Systems')
  expect(window.getComputedStyle(element).fontFamily).toContain('Roboto')
})
