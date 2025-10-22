import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'
import { createApp } from 'json-server/lib/app.js'

const adapter = new JSONFile('db.json')
const db = new Low(adapter, {})
await db.read()

const app = createApp(db)
app.listen(process.env.PORT || 5000, () => {
  console.log('JSON Server is running')
})