import chai from 'chai';
import sinonChai from 'sinon-chai';
import sinon from 'sinon';

chai.should();
chai.use(sinonChai);
global.chai = chai;
global.expect = chai.expect;
global.should = chai.should;
global.sinon = sinon;

const testsContext = require.context('./src/', true, /\.spec\.js$/);
testsContext.keys().forEach(testsContext);
