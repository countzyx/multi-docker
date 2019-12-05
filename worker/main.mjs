import redis from 'redis';
import keys from './keys.mjs';

const redisClient = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  retry_strategy: () => 1000,
});
const sub = redisClient.duplicate();

function fib(index) {
  if (index < 2) return 1;
  return fib(index - 1) + fib(index - 2);
}

sub.on('message', (channel, message) => {
  console.log(`SUB processing index ${message}`);
  redisClient.hset('values', message, fib(parseInt(message, 10)));
});
sub.subscribe('insert');

console.log('Worker up!');
