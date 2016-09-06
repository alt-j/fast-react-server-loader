# fast-react-server-loader

It's webpack loader for [fast-react-server](https://github.com/alt-j/fast-react-server).

## Quick start

1. Install package

```sh
npm install fast-react-server-loader
```

2. Add loader to you webpack config. For example:

```js
...
    module: {
        loaders: [
            {
                test: /.*\.jsx/,
                exclude: /(node_modules)/,
                loader: 'fast-react-server-loader!babel'
            }
        ]
    }
...
```
