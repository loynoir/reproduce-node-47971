# reproduce-node-47971

reproduce-node-47971

## description

incoinsistent CJS module loading

## keyword

- incoinsistent CJS module loading

- endless loop

- deasync

- `import()` sync

## expected

```sh
$ node ./test/test-require.cjs
waiting import('./plugin.mjs')
waiting import('./plugin.mjs')
waiting import('./plugin.mjs')
waiting import('./plugin.mjs')
waiting import('./plugin.mjs')
waiting import('./plugin.mjs')
waiting import('./plugin.mjs')
waiting import('./plugin.mjs')
waiting import('./plugin.mjs')
waiting import('./plugin.mjs')
waiting import('./plugin.mjs')
{ plugin: [Module: null prototype] { foo: [Function: foo] } }
```

## actual

```sh
$ node ./test/test-import.mjs
waiting import('./plugin.mjs')
waiting import('./plugin.mjs')
waiting import('./plugin.mjs')
...
# endless loop
...
```

```sh
$ node ./test/test-createRequire.mjs
waiting import('./plugin.mjs')
waiting import('./plugin.mjs')
waiting import('./plugin.mjs')
...
# endless loop
...
```
