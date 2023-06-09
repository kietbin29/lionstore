/**
 * Config source: https://git.io/JemcF
 *
 * Feel free to let us know via PR, if you find something broken in this config
 * file.
 */
import { RedisConfig } from '@ioc:Adonis/Addons/Redis'

/*
|--------------------------------------------------------------------------
| Redis configuration
|--------------------------------------------------------------------------
|
| Following is the configuration used by the Redis provider to connect to
| the redis server and execute redis commands.
|
| Do make sure to pre-define the connections type inside `contracts/redis.ts`
| file for AdonisJs to recognize connections.
|
| Make sure to check `contracts/redis.ts` file for defining extra connections
*/
const redisConfig: RedisConfig = {
  connection: 'local',

  connections: {
    /*
    |--------------------------------------------------------------------------
    | The default connection
    |--------------------------------------------------------------------------
    |
    | The main connection you want to use to execute redis commands. The same
    | connection will be used by the session provider, if you rely on the
    | redis driver.
    |
    */
    local: {
      host     : '127.0.0.1',
      port     : 6379,
      password : 'REDIS_PASSWORD_HERE', // Change this
      db       : 0,
      keyPrefix: '',
    },
  },
}

export default redisConfig
