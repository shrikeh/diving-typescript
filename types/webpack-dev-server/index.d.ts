import 'webpack-dev-server';
import { Compiler } from 'webpack';
import { WebpackDevServer } from 'webpack-dev-server-types';

type PortNumber = string | number | undefined;

declare module 'webpack-dev-server' {
  export = Server;

  declare class Server {
    constructor(options: WebpackDevServer.Configuration = {}, compiler: Compiler);

    listen(port: PortNumber, hostname: string, fn: Function<string, string>): void;
  }
}


