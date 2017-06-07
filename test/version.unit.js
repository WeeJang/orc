'use strict';

const proxyquire = require('proxyquire').noPreserveCache();
const { expect } = require('chai');


describe('@module version', function() {

  it('should return the package version for software', function() {
    const v = proxyquire('../lib/version', {});
    expect(v.software).to.equal(require('../package').version);
  });

  it('should return the postfixed network version', function() {
    process.env.ORC_NETWORK = 'test';
    const v = proxyquire('../lib/version', {});
    expect(v.protocol.indexOf('-test')).to.not.equal(-1);
    process.env.STORJ_NETWORK = '';
  });

  describe('@method toString', function() {
    const v = proxyquire('../lib/version', {});
    expect(typeof v.toString()).to.equal('string');
  });

});
