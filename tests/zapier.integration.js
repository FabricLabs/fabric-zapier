'use strict';

const assert = require('assert');
const Zapier = require('../services/zapier');

describe('@fabric/zapier', function () {
  describe('Zapier', function () {
    it('can smoothly create a new instance', function () {
      const zapier = new Zapier();
      assert.ok(zapier);
      assert.ok(zapier.id);
    });
  });
});
