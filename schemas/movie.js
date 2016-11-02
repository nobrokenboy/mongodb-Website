/**
 * Created by jessic on 2016/11/1.
 */
//引入mongoose模块
var mongoose=require('mongoose');
//创建数据结构
var MovieSchema=new mongoose.Schema({
    doctor:String,
    title:String,
    language:String,
    country:String,
    summary:String,
    flash:String,
    poster:String,
    year:Number,
    meta:{//更新时的时间记录
        createAt:{
            type:Date,
            default:Date.now()//默认值
        },
        updateAt:{
            type:Date,
            default:Date.now()//默认值
        }
    }

});
//存数据前会调用的方法
MovieSchema.pre('save',function(next){
    if(this.isNew){
        this.meta.createAt=this.meta.updateAt=Date.now();//同时更新创建时间和更新时间
    }else{
        this.meta.updateAt=Date.now();
    }
    //这个方法还是不够理解
    next();
});
//添加静态方法（实例化之后才会用）
MovieSchema.statics={
    //sort(按照xx排序)，exec()是找到匹配文本，返回数组
    fetch: function (cb) {
        return this
            .find({})
            .sort('meta.updateAt')
            .exec(cb);
    },
    findById: function (id,cb) {
        return this
            .findOne({_id:id})
            .exec(cb);
    },
};
module.exports=MovieSchema;