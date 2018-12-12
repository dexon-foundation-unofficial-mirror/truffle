var command = {
  command: 'compile',
  description: 'Compile contract source files',
  builder: {
    all: {
      type: "boolean",
      default: false
    }
  },
  run: function (options, done) {
    var Config = require("@dexon-foundation/truffle-config");
    var Contracts = require("@dexon-foundation/truffle-workflow-compile");

    var config = Config.detect(options);
    Contracts.compile(config, done);
  }
}

module.exports = command;
