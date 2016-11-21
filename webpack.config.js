module.exports = {
  devtool: 'eval-source-map',
  entry: {
     
     bundle1:__dirname + "/app/main.js",
  },
  output: {
    path: __dirname + "/public",//打包后的文件存放的地方
    filename: "[name].js"//打包后输出文件的文件名
  },
  module: {//在配置文件里添加JSON loader
    loaders: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
       { test: /\.css$/, exclude: /\.useable\.css$/, loader: "style-loader!css-loader" },
      { test: /\.useable\.css$/, loader: "style-loader/useable!css-loader" }
    ]
  },
   devServer: {
    contentBase:'./public',//本地服务器所加载的页面所在的目录
    port:'3030',
    colors: true,//终端中输出结果为彩色
    historyApiFallback: true,//不跳转
     inline: true//实时刷新
  } 
}