const env = process.env.NODE_ENV === 'production' ? 'prod' : 'dev'
const domains = {
  dev: {
    chat: 'http://127.0.0.1:4000',
    wall: 'http://localhost:8080'
  },
  prod: {
    chat: 'https://chat.migong.org',
    wall: 'https://wall.migong.org'
  }
}
export const domain = domains[env]