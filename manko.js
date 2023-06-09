(function(Scratch) {
  'use strict';

  class Fetch {
    getInfo () {
      return {
        id: 'fetch',
        name: 'Fetch',
        blocks: [
          {
            opcode: 'get',
            blockType: Scratch.BlockType.REPORTER,
            text: 'GET [URL]',
            arguments: {
              URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://api.scratch.mit.edu/studios/32086765/comments'
              }
            }
          }
        ]
      };
    }

    get (args) {
      return Scratch.fetch(args.URL)
        .then(r => r.text())
        .catch(() => '');
    }
  }

  Scratch.extensions.register(new Fetch());
})(Scratch);
