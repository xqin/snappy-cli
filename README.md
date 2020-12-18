# snappy compress/uncompress cli

## Install

`npm install -g github:xqin/snappy-cli`


## Usage

### compress

```bash
$ snappy hello
BRBoZWxsbw==

$ echo hello | snappy
BhRoZWxsbwo=
```

#### uncompress

```bash
$ unsnappy BRBoZWxsbw==
hello


$ echo hello | snappy | unsnappy
hello
```

### PS

* 压缩后输出的内容格式为 `base64` 格式的字符串.
* 解压缩时传入的内容格式为 `base64` 格式的字符串.
* 压缩/解压缩 支持pipe管道传入或者通过参数传入, 当两者都有数据时, 参数优先级高.
