import { webpack } from 'webpack';
import { WebpackConfig } from '../../webpack.config';
import Server from "webpack-dev-server";

function webpackDevServer(cb: Function): void {
  const compiler = webpack(WebpackConfig);
  const server = new Server({}, compiler);

  server.listen(8080, 'localhost', (err: string) => {
    console.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
  });

  cb();
}

export default webpackDevServer;
