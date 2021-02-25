/*
 steps组件
 */
layui.use(['jquery', 'steps'], function(){

    var $ = layui.$;

    var $step= $("#step_demo").step();

    $("#preBtn").click(function(event) {
        $step.preStep();//上一步
		return false;
    });
    $("#nextBtn").click(function(event) {
        $step.nextStep();//下一步
		return false;
    });
    $("#goBtn").click(function(event) {
        $step.goStep(5);//到指定步
    });
});
