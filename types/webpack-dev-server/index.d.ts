import 'webpack-dev-server';
import { Compiler } from 'webpack';
import { WebpackDevServer } from 'webpack-dev-server-types';

declare module 'webpack-dev-server' {
  export = Server;

  declare class Server {
    constructor(options: WebpackDevServer.Configuration = {}, compiler: Compiler);

    listen(port: number, hostname: string, fn: Function<string, string>): void;
  }
}


