const path = require('path');
var prod = process.env.NODE_ENV === 'production'

module.exports = {
  wpyExt: '.wpy',
  cliLogs: !prod,
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    },
    modules: ['node_modules']
  },
  eslint: true,
  compilers: {
    less: {
      compress: prod
    },
    babel: {
      sourceMap: true,
      presets: [
        'env'
      ],
      plugins: [
        'transform-class-properties',
        'transform-decorators-legacy',
        'transform-object-rest-spread',
        'transform-export-extensions',
        'transform-node-env-inline'
      ]
    }
  },
  plugins: {
    iview: {
      config: {
        inject: ['row', 'col', 'cell-group', 'cell', 'icon', 'button', 'modal', 'message', 'card']
      }
    }
  },
  appConfig: {
    noPromiseAPI: ['createSelectorQuery']
  }
}

if (prod) {

  delete module.exports.compilers.babel.sourcesMap;

  // 压缩less
  module.exports.compilers['less'] = {compress: true}

  // 压缩js
  // module.exports.plugins = {
  //   uglifyjs: {
  //     filter: /\.js$/,
  //     config: {
  //       compress: {
  //         drop_console: true
  //       }
  //     }
  //   },
  //   imagemin: {
  //     filter: /\.(jpg|png|jpeg)$/,
  //     config: {
  //       jpg: {
  //         quality: 80
  //       },
  //       png: {
  //         quality: 80
  //       }
  //     }
  //   }
  // }
}
