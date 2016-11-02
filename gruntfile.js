module.exports=function(grunt){
   grunt.loadNpmTasks('grunt-contrib-watch');//监听文件修改
   grunt.loadNpmTasks('grunt-nodemon');//自动启动node.js的服务
   grunt.loadNpmTasks('grunt-concurrent');//慢编译，例如sass
   grunt.option('force',true);
   grunt.registerTask('default',['concurrent']);

   grunt
}