/* eslint import/no-extraneous-dependencies: 1 */

import 'jsdom-global/register';
import Adapter from 'enzyme-adapter-react-16/build/index';
import { configure } from 'enzyme';
import { JSDOM } from 'jsdom';
import nock from 'nock';


configure({ adapter: new Adapter() });

//
// Throw exceptions on unhandled promise rejections to prevent tests
// from silently failing async.
//
let unhandledRejection = false;
process.on('unhandledRejection', (reason, promise) => {
  console.error('unhandled rejection:', reason || promise); // eslint-disable-line no-console
  unhandledRejection = true;
  throw promise;
});
process.prependListener('exit', (code) => {
  if (unhandledRejection && code === 0) {
    process.exit(1);
  }
});

//
// Set up the DOM (global.window needed for apiHelpers)
//
const jsdom = new JSDOM(
  undefined,
  {
    url: 'http://localhost:3000',
  }
);
const { window } = jsdom;
// Setup global
global.window = window;
//
// Disable any real network requests
//
nock.disableNetConnect();
