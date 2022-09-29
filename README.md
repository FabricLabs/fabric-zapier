# `@fabric/zapier`
[![Build Status][badge-build]][build-status]
[![Coverage Status][badge-coverage]][coverage]
[![GitHub contributors][badge-contributors]][contributors]

Simple Zapier integration for Fabric services.

## Quick Start
```
const Zapier = require('@fabric/zapier');
const zapier = new Zapier({
  hooks: {
    example: '/hooks/catch/ASDF.../ZYXW...'
  }
});

await zapier.start();

// Trigger a hook with:
zapier.trigger('example', {
  field: value // any number of field / values
});

```

[badge-build]: https://img.shields.io/travis/FabricLabs/fabric-zapier.svg?branch=master&style=flat-square
[badge-coverage]: https://img.shields.io/codecov/c/github/FabricLabs/fabric-zapier.svg?style=flat-square
[badge-contributors]: https://img.shields.io/github/contributors/FabricLabs/fabric-zapier.svg?style=flat-square

[build-status]: https://app.travis-ci.com/github/FabricLabs/fabric-zapier
[contributors]: https://github.com/FabricLabs/fabric-zapier/graphs/contributors
[coverage]: https://codecov.io/gh/FabricLabs/fabric-zapier

