import type { Register } from 'claude-code'

const CLOUD = '☁️ Cloudová session'
const LOCAL = '💻 Lokální session'

export const register: Register = on => {
  on('session.start', async ($, e, next) => {
    const result = await next(e)

    try {
      const { platform } = await $.session.info()

      if (platform === 'windows' || platform === 'macos') {
        $.ui.status(LOCAL)
      } else {
        const { stdout } = await $.process.run(['printenv', 'CLAUDE_CODE_REMOTE'])
        $.ui.status(stdout.trim() === 'true' ? CLOUD : LOCAL)
      }
    } catch {
      $.ui.status(undefined)
    }

    return result
  })
}
