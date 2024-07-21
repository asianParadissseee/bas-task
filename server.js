import {createClient} from "redis";
import {createServer} from "./app.js"
const port = process.env['PORT'] || 3000
const client = createClient();

client.on('err', (err)=> console.log('Redis client err', err));

const start = async ()=>{
    await client.connect();
    const app = createServer(client)
    app.listen(port , ()=>{
        console.log(`Server running on port http://localhost:${port}`);
    });
}
start()