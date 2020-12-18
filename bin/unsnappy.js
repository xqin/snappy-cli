#!/usr/bin/env node

Promise.all([
  require('get-stdin')(),
  process.argv.slice(2).join('')
]).then(([ stdin, argv ]) => {
  if (stdin === '' && argv === '') { // 标准输入中没有内容 也没有 传参数, 则啥也不做
    return
  }

  require('snappy').uncompress(Buffer.from(argv || stdin, 'base64'), { asBuffer: false }, function (e, original) {
    if (e) {
      return console.error(e)
    }

    console.log(original)
  })
})
