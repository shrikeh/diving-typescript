/// <reference path="webpack-dev-server.d.ts" />
import { webpack } from 'webpack';
import { WebpackConfig, DevServerConfig } from '../../webpack.config';
import log from 'fancy-log';

import Server from "webpack-dev-server";

function webpackDevServer(cb: Function): void {
  const compiler = webpack(WebpackConfig);
  const server = new Server(DevServerConfig, compiler);

  server.listen(DevServerConfig.port, 'localhost', (err: string) => {
    log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
  });
  cb();
}

export default webpackDevServer;
