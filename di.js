/**
 * Created by wrj on 16/1/29.
 */

//var gdata;
//var num;

//$("creatdept.html").ready(function(data){
//    var ajaxobj=new AJAXRequest;    // 创建AJAX对象
//    ajaxobj.method="GET";   // 设置请求方式为GET
//    ajaxobj.url="creatdept.html"  // 响应的URL,以后可以改为一些动态处理页,会用Ajax的都知道，这在页里可以有目的返回不同的数据
//// 设置回调函数，输出响应内容,因为是静态页,所以所有内容都过来了
//    ajaxobj.callback=function(xmlobj) {
//        document.getElementById('show1').innerHTML = xmlobj.responseText;     //将html页面在div中显示
//    }
//    ajaxobj.send();    // 发送请求
//
//    var murl = "http://192.168.80.30:8080/me.ele.pmo.pms.api/department/queryall" ;
////    var xmlHttpReq = new xmlHttpRequest();
//    var xmlHttpReq = null;
//    if (window.XMLHttpRequest) {
//        xmlHttpReq = new XMLHttpRequest(); //实例化一个xmlHttpReq112
//        xmlHttpReq.onreadystatechange = returninfo;   //设置回调函数
////        alert("234")
//        if (xmlHttpReq != null) {
//            xmlHttpReq.open("get", murl, true);
//            //xmlHttpReq.setRequestHeader("Content-Type","application/json");
//            xmlHttpReq.send(null);
//            xmlHttpReq.timeout = 3000;
//            xmlHttpReq.ontimeout = function(){
//                alert("超时！");
//            }
//        }
//    }
//
//    function returninfo(){
//        if(xmlHttpReq.readyState==4 && xmlHttpReq.status==200) {
//            gdata = xmlHttpReq.responseText;
//            //pagnation(1);
//            $('tbody').html('');
//            var thtml = '';
//            var result = eval('('+gdata+')');
//            if(result.successed==true){
//                var total = result.resultMsg.length;
//                for (i = 0; i < total; i++) {
//                    thtml += '<tr id="'+i+'"><td>' + result.resultMsg[i].departmentId + '</td><td>' + result.resultMsg[i].departmentName + '</td><td>' + result.resultMsg[i].departmentOwner + '</td><td>' + result.resultMsg[i].createBy + '</td><td><button class="btn-success" onclick="editdept(this.id)" id=' + result.resultMsg[i].departmentId +'>编辑</button></td></tr>';
//                }
//                $('tbody').append(thtml);
//            }
//        }
//    }
//})



function creatdept(){
    var ajaxobj=new AJAXRequest;    // 创建AJAX对象
    ajaxobj.method="GET";   // 设置请求方式为GET
    ajaxobj.url="creatdept.html"  // 响应的URL,以后可以改为一些动态处理页,会用Ajax的都知道，这在页里可以有目的返回不同的数据
// 设置回调函数，输出响应内容,因为是静态页,所以所有内容都过来了
    ajaxobj.callback=function(xmlobj) {
        document.getElementById('show1').innerHTML = xmlobj.responseText;     //将html页面在div中显示
    }
    ajaxobj.send();    // 发送请求
}

//function searchdept(){
////    var tes_res = eval("("+testJSON+")");
////    alert(tes_res);
//    var ttest = '';
//    ttest += '<tr id="'+1+'"><td>' + testJSON.pjm_name + '</td><td>' + testJSON.pjm_type + '</td><td>' + testJSON.pjm_team + '</td><td>' + testJSON.sj_realse + '</td><td><button class="btn-success" onclick="newone1()">查看</button></td></tr>';
//    $('tbody').append(ttest);
//}

function searchdept(){
//    alert("1");
//    var tab1 = document.getElementById("tab1");
//    //var childs=document.getElementsByTagName("tbody")[0];
//    //if(childs!=null){
//    //tab1.removeChild(childs);
//    //};
//    var array = ['namespace','group','name'];
//    var query = '';
//    var split = '?';
//    for (var i in array){
//        if (document.getElementById(array[i]).value)
//        {
//            query += split + array[i] + '=' + document.getElementById(array[i]).value;
//            split = '&'
//        }
//    }
    var murl = "http://192.168.80.30:8080/me.ele.pmo.pms.api/department/queryall" ;
//    var xmlHttpReq = new xmlHttpRequest();
    var xmlHttpReq = null;
    if (window.XMLHttpRequest) {
        xmlHttpReq = new XMLHttpRequest(); //实例化一个xmlHttpReq112
        xmlHttpReq.onreadystatechange = returninfo;   //设置回调函数
//        alert("234")
        if (xmlHttpReq != null) {
            xmlHttpReq.open("get", murl, true);
            //xmlHttpReq.setRequestHeader("Content-Type","application/json");
            xmlHttpReq.send(null);
            xmlHttpReq.timeout = 3000;
            xmlHttpReq.ontimeout = function(){
                alert("超时！");
            }
        }
    }

    function returninfo(){
        if(xmlHttpReq.readyState==4 && xmlHttpReq.status==200) {
            var gdata = xmlHttpReq.responseText;
            //pagnation(1);
            $('tbody').html('');
            var thtml = '';
            var result = eval('('+gdata+')');
            if(result.successed==true){
                var total = result.resultMsg.length;
                for (var i = 0; i < total; i++) {
        thtml += '<tr id="'+i+'"><td>' + result.resultMsg[i].departmentId + '</td><td>' + result.resultMsg[i].departmentName + '</td><td>' + result.resultMsg[i].departmentOwner + '</td><td>' + result.resultMsg[i].createBy + '</td><td><button class="btn-success" onclick="editdept(this.id)" id=' + result.resultMsg[i].departmentId +'>编辑</button></td></tr>';
    }
    $('tbody').append(thtml);
            }
        }
    }
}
function searchdeptname(){
//    alert("1");
//    var tab1 = document.getElementById("tab1");
//    //var childs=document.getElementsByTagName("tbody")[0];
//    //if(childs!=null){
//    //tab1.removeChild(childs);
//    //};
//    var array = ['namespace','group','name'];
//    var query = '';
//    var split = '?';
//    for (var i in array){
//        if (document.getElementById(array[i]).value)
//        {
//            query += split + array[i] + '=' + document.getElementById(array[i]).value;
//            split = '&'
//        }
//    }
    $('tbody').html('');

    var vname = $('#d_name').val();

    if(vname == ""){
        alert("请输入部门名称！");
    }
    else {

        $.get(
            'http://192.168.80.30:8080/me.ele.pmo.pms.api/department/getbydepartmentname/' + vname,
            {},
            function (data) {
                var vdata = eval('('+data+')');
                var html = '';
                    if(vdata.successed==false){
                        alert(vdata.resultMsg);
                    }
                    else{html += '<tr id="' + vdata.resultMsg.departmentId + '"><td>' + vdata.resultMsg.departmentId + '</td><td>' + vdata.resultMsg.departmentName + '</td><td>' + vdata.resultMsg.departmentOwner + '</td><td>' + vdata.resultMsg.createBy + '</td><td><button class="btn-success" onclick="editdept(this.id)" id=' + vdata.resultMsg.departmentId + '>编辑</button></td></tr>';

                $('tbody').append(html)}
            }
        );



//    var murl = "http://192.168.80.30:8080/me.ele.pmo.pms.api/department/getbydepartmentname/" + encodeURIComponent(vname);
////    var xmlHttpReq = new xmlHttpRequest();
//    var xmlHttpReq = null;
//    if (window.XMLHttpRequest) {
//        xmlHttpReq = new XMLHttpRequest(); //实例化一个xmlHttpReq112
//        xmlHttpReq.onreadystatechange = returninfo;   //设置回调函数
////        alert("234")
//        if (xmlHttpReq != null) {
//            xmlHttpReq.open("get", murl, true);
//            //xmlHttpReq.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=unicode");
//            xmlHttpReq.send(null);
//            xmlHttpReq.timeout = 3000;
//            xmlHttpReq.ontimeout = function(){
//                alert("超时！");
//            }
//        }
//    }
//
//    function returninfo(){
//        if(xmlHttpReq.readyState==4 && xmlHttpReq.status==200) {
//            var vrequest = xmlHttpReq.responseText;
//            //pagnation(1);
//            $('tbody').html('');
//            var thtml = '';
//            var result = eval('('+vrequest+')');
//            if(result.successed==true){
//                //var total = result.resultMsg.length;
//                //for (i = 0; i < total; i++) {
//                    thtml += '<tr id="'+result.resultMsg.departmentId+'"><td>' + result.resultMsg.departmentId + '</td><td>' + result.resultMsg.departmentName + '</td><td>' + result.resultMsg.departmentOwner + '</td><td>' + result.resultMsg.createBy + '</td><td><button class="btn-success" onclick="editdept(this.id)" id=' + result.resultMsg.departmentId +'>编辑</button></td></tr>';
//                //}
//                $('tbody').append(thtml);
//            }
//            else{alert("查询出错！");}
//        }
//    }}
    }
}
function searchdeptowner(){
//    alert("1");
//    var tab1 = document.getElementById("tab1");
//    //var childs=document.getElementsByTagName("tbody")[0];
//    //if(childs!=null){
//    //tab1.removeChild(childs);
//    //};
//    var array = ['namespace','group','name'];
//    var query = '';
//    var split = '?';
//    for (var i in array){
//        if (document.getElementById(array[i]).value)
//        {
//            query += split + array[i] + '=' + document.getElementById(array[i]).value;
//            split = '&'
//        }
//    }
    var murl = "http://192.168.80.30:8080/me.ele.pmo.pms.api/department/queryall" ;
//    var xmlHttpReq = new xmlHttpRequest();
    var xmlHttpReq = null;
    if (window.XMLHttpRequest) {
        xmlHttpReq = new XMLHttpRequest(); //实例化一个xmlHttpReq112
        xmlHttpReq.onreadystatechange = returninfo;   //设置回调函数
//        alert("234")
        if (xmlHttpReq != null) {
            xmlHttpReq.open("get", murl, true);
            //xmlHttpReq.setRequestHeader("Content-Type","application/json");
            xmlHttpReq.send(null);
            xmlHttpReq.timeout = 3000;
            xmlHttpReq.ontimeout = function(){
                alert("超时！");
            }
        }
    }

    function returninfo(){
        if(xmlHttpReq.readyState==4 && xmlHttpReq.status==200) {
            gdata = xmlHttpReq.responseText;
            //pagnation(1);
            $('tbody').html('');
            var thtml = '';
            var result = eval('('+gdata+')');
            if(result.successed==true){
                var total = result.resultMsg.length;
                for (i = 0; i < total; i++) {
                    thtml += '<tr id="'+i+'"><td>' + result.resultMsg[i].departmentId + '</td><td>' + result.resultMsg[i].departmentName + '</td><td>' + result.resultMsg[i].departmentOwner + '</td><td>' + result.resultMsg[i].createBy + '</td><td><button class="btn-success" onclick="editdept(this.id)" id=' + result.resultMsg[i].departmentId +'>编辑</button></td></tr>';
                }
                $('tbody').append(thtml);
            }
        }
    }
}
//function pagnation(page){
//    $('tbody').html('');
//    $('#divpage').html('');
//    if(typeof(page) == 'undefined'){
//        page = 1;
//    }
//    var perpage = 15;
//    var result = eval('('+gdetail+')');
//    var result1 = eval(result.resultMsg[0]);
//    alert(result1);
//    var total = result.length;
//    var from = (page - 1) * perpage;
//    var to   = page * perpage;
//    var thtml = '';
//    for (i = from; i < total && i < to; i++) {
//        thtml += '<tr id="'+i+'"><td>' + result.resultMsg[i].departmentId + '</td><td>' + result.resultMsg[i].departmentName + '</td><td>' + result.resultMsg[i].departmentOwner + '</td><td>' + result.resultMsg[i].createBy + '</td></tr>';
//    }
//    $('tbody').append(thtml);
//
//    var first = '<a href="javascript:;" onclick="pagnation(1)">首页</a>';
//    var middle = '';
//    var end   = '<a href="javascript:;" onclick="pagnation(' + Math.ceil(total/perpage) + ')">尾页</a>';
//    var previous = '';
//    if(page > 1) {
//        previous = '<a href="javascript:;" onclick="pagnation(' + (page - 1) + ')">上一页</a>';
//    }
//
//    var pageStart = (Math.ceil(page / 10) - 1) * 10 + 1;
//    for (var i = pageStart; i <= Math.ceil(total / perpage) && i < pageStart + 10; i++) {
//        middle += '<a href="javascript:;" onclick="pagnation(' + i + ')" id="a' + i + '"> [ ' + i + ' ] </a>';
//    }
//
//    var next = '';
//    if(page < Math.ceil(total / perpage)) {
//        next = '<a href="javascript:;" onclick="pagnation('+ (page + 1) + ')">下一页</a>';
//    }
//    var perviousMore = '';
//    if (page > 10) {
//        perviousMore = '<a href="javascript:;" onclick="pagnation('+ ( Math.floor( page / 10 ) * 10) +')">...</a>';
//    }
//    var nextMore = '';
//    if (Math.ceil(page / 10) * 10 + 1 < Math.ceil(total/perpage)){
//        nextMore = '<a href="javascript:;" onclick="pagnation('+ (Math.ceil(page / 10) * 10  + 1) +')">...</a>';
//    }
//    $('#divpage').append(first + '&nbsp;' + previous + '&nbsp;' + perviousMore + '&nbsp;' +  middle + '&nbsp;' + nextMore +'&nbsp;' + next + '&nbsp;' + end);
//    var aid = "a"+page;
//    var aa = document.getElementById(aid);
//    aa.className = "curr";
//}

function newdept(){
    var ajaxobj=new AJAXRequest;    // 创建AJAX对象
    ajaxobj.method="GET";   // 设置请求方式为GET
    ajaxobj.url="newdept.html"  // 响应的URL,以后可以改为一些动态处理页,会用Ajax的都知道，这在页里可以有目的返回不同的数据
// 设置回调函数，输出响应内容,因为是静态页,所以所有内容都过来了
    ajaxobj.callback=function(xmlobj) {
        document.getElementById('show1').innerHTML = xmlobj.responseText;     //将html页面在div中显示
    }
    ajaxobj.send();    // 发送请求
}


function savedept() {

    var deptname = $('#d_name').val();
    var deptowner = $('#d_owner').val();

    var newdeptJSON = new Object();
    newdeptJSON.departmentName = deptname;
    newdeptJSON.departmentOwner = deptowner;
    newdeptJSON.createdBy = "test@ele.me";
    //$.post("http://192.168.80.30:8080/me.ele.pmo.pms.api/department/adddepartment",JSON.stringify(newdeptJSON),"","json");
    var request = {
        url : "http://192.168.80.30:8080/me.ele.pmo.pms.api/department/adddepartment",
        type : "POST",
        contentType : "application/json",
        dataType : 'json',
        data : JSON.stringify(newdeptJSON),
        // beforeSend: function(xhr) {
        // xhr.setRequestHeader("Authorization",
        // "Basic " + btoa(self.username + ":" + self.password));
        // },
        success : function(result){
            if(result.successed==true){
                alert(result.resultMsg);
                var ajaxobj=new AJAXRequest;    // 创建AJAX对象
                ajaxobj.method="GET";   // 设置请求方式为GET
                ajaxobj.url="creatdept.html"  // 响应的URL,以后可以改为一些动态处理页,会用Ajax的都知道，这在页里可以有目的返回不同的数据
// 设置回调函数，输出响应内容,因为是静态页,所以所有内容都过来了
                ajaxobj.callback=function(xmlobj) {
                    document.getElementById('show1').innerHTML = xmlobj.responseText;     //将html页面在div中显示
                }
                ajaxobj.send();
            }
        }
    };
    $.ajax(request);

}

function editdept(number){
    var idnum = number;
    //var url = "http://192.168.80.30:8080/me.ele.pmo.pms.api/department/getbydepartmentid/" + idnum;
    //$.get(url,function(data){
    //    var returndata = eval('('+data+')');
    //    var dname = returndata.resultMsg.departmentName;
    //    var downer = returndata.resultMsg.departmentOwner;
        window.open("editdept.html?id="+idnum);
    //})

}