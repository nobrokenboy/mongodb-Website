/**
 * Created by jessic on 2016/11/1.
 */
var mongoose=require('mongoose');
var MovieSchiema=require('../schemas/movie');
//生成模型
var Movie=mongoose.model('Movie',MovieSchiema);
//导出模型
module.exports=Movie;