/**
 * Created by jessic on 2016/11/2.
 */
$(function(){
    $(".del").click(function (e) {
        debugger;
        var target=$(e.target);
        var id=target.data("id");
        var tr=$(".item-id-"+id);

        $.ajax({
            type:"DELETE",
            url:"/admin/list?id="+id,
            success:function(results){
                console.log(results);
                if(results.success===1){
                    if(tr.length>0){
                        tr.remove();
                    }
                }else if(results.success===0){
                    alert("删除失败！");
                }
            }
        });
    });
});