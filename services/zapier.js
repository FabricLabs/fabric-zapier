'use strict';

const merge = require('lodash.merge');
const Remote = require('@fabric/core/types/remote');
const Service = require('@fabric/core/types/service');

class Zapier extends Service {
  constructor (settings = {}) {
    super(settings);

    this.settings = merge({
      hooks: {}
    }, settings);

    this._state = {
      status: 'STOPPED',
      hooks: {}
    };

    return this;
  }

  get hooks () {
    return this._state.hooks;
  }

  trust (source) {
    super.trust(source);

    return {
      _handleTriggerEvent: source.on('trigger', this._handleTrustedTrigger.bind(this))
    };
  }

  async notify (name, message = 'Default Zapier event!  Provide a `message` parameter to override.') {
    this.emit('log', `[ZAPIER] Triggering: ${name} :: [ ${message} ]`);
    if (!this.hooks[name]) return this.emit('error', `Hook does not exist: ${name}`);
    return this.trigger(name, [message]);
  }

  async start () {
    this.remote = new Remote({ authority: 'hooks.zapier.com' });
    for (const [name, address] of Object.entries(this.settings.hooks)) {
      await this._registerHook(name, address);
    }

    await this.notify('contact', `Zapier service started.  Agent ID: ${this.id}`);

    this.emit('ready', {
      id: this.id
    });

    return this;
  }

  async trigger (name, params = []) {
    return this.remote._POST(this.hooks[name], {
      content: params
    });
  }

  async _handleTrustedTrigger (trigger) {
    return this.trigger(trigger.method, trigger.params);
  }

  async _registerHook (name, address) {
    this._state.hooks[name] = address;
  }
}

module.exports = Zapier;
