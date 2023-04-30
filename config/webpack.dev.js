const common=require("./webpack.common")
const {merge}=require("webpack-merge")
const devConfig={
    mode:process.env.NODE_ENV || "development"
}

module.exports=merge(common,devConfig);