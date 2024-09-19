module.exports = function override(config, env) {
  // 添加 externals 配置
  config.externals = {
      react: 'React',
      'react-dom': 'ReactDOM',
  };
  return config;
};
