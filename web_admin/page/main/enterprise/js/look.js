Array.prototype.remove = function(val) { 
    var index = this.indexOf(val); 
    if (index > -1) { 
    this.splice(index, 1); 
    } 
};

layui.use(['table', "tree",'treetable'], function () {
        var $ = layui.jquery;
        var table = layui.table;
        var tree = layui.tree;
        var treetable = layui.treetable;
        var token = Storage.get("token");           
        let qiId =$("#qiId").val();         
    function getData(){
            // // 渲染表格
         layer.load(2);
         $.ajax({
            url: '/sys_fkcy/enterprise/seeEnterpriseMenuAction.action?enterprise_id='+qiId,
            headers: { //通过 request 头传递
                token: token
            },
            type: 'post',
            dataType: 'json',
            success: function (res) {
                if(res.state==401){
                    window.location.href='../../bcxt/login/login.html';
                }else{
                    renderTable(res.data);
                }
                
            }
         });

        var  renderTable =function(data){
            treetable.render({
                treeColIndex: 1,
                treeSpid: "admin",
                treeIdName: 'id',
                treePidName: 'superior_id',
                elem: '#munu-table',
                data:data,
                url: localurl+'/sys_fkcy/enterprise/seeEnterpriseMenuAction.action?enterprise_id='+qiId,
                headers:header,
                page: false,            
                cols: [[
                    {type: 'numbers'},
                    // {fixed:'left', type: 'checkbox', width: 80},
                    {field: 'title', Width: 400, title: '菜单名称'},
                    {field: 'icon', width:150, title: '菜单icon'},
                    {field: 'action',width:150, title: '权限标识'},
                    {field: 'href', width:250,title: '菜单url'},
                    {field: 'state', width: 100, align: 'center',templet: function (d) {
                            if (d.state == 1) {
                                return '<span class="layui-badge layui-bg-gray">按钮</span>';
                            }
                            if (d.superior_id == 'admin') {
                                return '<span class="layui-badge layui-bg-blue">目录</span>';
                            } else {
                                return '<span class="layui-badge-rim">菜单</span>';
                            }
                        }, title: '类型'
                    },
                    {templet: '#auth-state', width: 190, align: 'center', title: '操作'}
                ]],
                done: function (data) {
                    
                    layer.closeAll('loading');
                    
                }
            });
            
        } 
    }        
    getData();

});



function child(data){         
    $("#qiId").val(data.id);
     
}