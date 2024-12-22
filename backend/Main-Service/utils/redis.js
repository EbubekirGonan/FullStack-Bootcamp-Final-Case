import redis from 'redis'


const client = redis.createClient({
  socket: {
    host: 'redis',
    port: 6379
  }
});
  
client.connect().then(() => {
  console.log('Redis bağlantısı başarılı!');
}).catch((err) => {
  console.error('Redis bağlantı hatası:', err);
});

client.on('error', (err) => {
  console.error('Redis hata:', err);
});


export default { client }