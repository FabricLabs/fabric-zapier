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

    it('can start and stop', async function () {
      const zapier = new Zapier();
      await zapier.start();
      await zapier.stop();
      assert.ok(zapier);
      assert.ok(zapier.id);
    });
  });
});
