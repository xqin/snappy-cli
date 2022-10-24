#!/usr/bin/env node

Promise.all([
  require('get-stdin')(),
  process.argv.slice(2).join('')
]).then(([ stdin, argv ]) => {
  if (stdin === '' && argv === '') {
    return
  }

  process.stdout.write(require('snappy').compressSync(argv || stdin).toString('base64'))
})
