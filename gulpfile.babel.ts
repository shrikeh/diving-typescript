import "dotenv/config";
import { task } from "gulp";
import WebpackDevServer from '~gulp/WebpackDevServer';
import Jest from '~gulp/Jest';

task('webpack-dev-server', WebpackDevServer);
task('jest', Jest);

export default WebpackDevServer;
