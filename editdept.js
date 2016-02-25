/**
 * Created by wrj on 16/2/2.
 */

$(document).ready(function(data){
    $.extend({
        getUrlVars: function () {
            var vars = [], hash;
            var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
            for (var i = 0; i < hashes.length; i++) {
                hash = hashes[i].split('=');
                vars.push(hash[0]);
                vars[hash[0]] = hash[1];
            }
            return vars;
        },
        getUrlVar: function (name) {
            return $.getUrlVars()[name];
        }
    });

//获取参数对象
//    alert($.getUrlVars());
////获取参数a的值
//    alert($.getUrlVar('id'));
    var idnum = $.getUrlVar('id');
    var url = "http://192.168.80.30:8080/me.ele.pmo.pms.api/department/getbydepartmentid/" + idnum;
    $.get(url,function(data){
        var result = eval('('+ data + ')');
        $("#de_id").val(result.resultMsg.departmentId);
        $("#de_name").val(result.resultMsg.departmentName);
        $("#de_owner").val(result.resultMsg.departmentOwner);
    });
})

function updatedept(){
    var u_id = $("#de_id").val();
    var u_name = $("#de_name").val();
    var u_owner = $("#de_owner").val();
    var u_updateby = $("#de_updateby").val();

    var editJSON = new Object();

    editJSON.departmentId = u_id;
    editJSON.departmentName = u_name;
    editJSON.departmentOwner = u_owner;
    editJSON.updatedBy = u_updateby;
    var request = {
        url : "http://192.168.80.30:8080/me.ele.pmo.pms.api/department/updatedepartment",
        type : "POST",
        contentType : "application/json",
        dataType : 'json',
        data : JSON.stringify(editJSON),
        // beforeSend: function(xhr) {
        // xhr.setRequestHeader("Authorization",
        // "Basic " + btoa(self.username + ":" + self.password));
        // },
        success : function(result){
            if(result.successed==true){
                alert(result.resultMsg);
                close();
            }
        }
    };
    $.ajax(request);
}
