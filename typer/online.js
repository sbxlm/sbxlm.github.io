var c = 0;
var t;
var isUpdated = false;
var isCheating = false;
var preCount = 0;
setTimeout("update()", 500);
function update() {
	var ic; var ie=0;
	var orgtxt = $("#orgtxt").text();
	//orgtxt.replace(" ", "");
	var usertxt = $("#usertxt").val();
	var i = usertxt.length;
    var it= orgtxt.length;
	var f_txt="<span class='over'>";
	var b_txt = orgtxt.substring(i, it);
	var e_txt = "";
	for (ic=0;ic<i;ic++)
	{
		if(orgtxt.charAt(ic) != usertxt.charAt(ic)){
			ie++;
			f_txt = f_txt + "<span class='erro'>" + orgtxt.charAt(ic) + "</span>";
			e_txt += orgtxt.charAt(ic);
		}else{
			f_txt= f_txt + orgtxt.charAt(ic);
		}
	}
	f_txt= f_txt + "</span>"
	var  final_txt = f_txt + b_txt;
	var rrate = Math.round(((i - ie) / i) * 100);
    var rdone = Math.round((i / it) * 100);
	var  second = $("#second").text();
	var  cp; //= Math.round((i/(second+0.01))*60);
	if(second!="0"){
		cp = Math.round((i/second)*60)
	}else{
		cp=0
    }
    if (c % 10 == 0) {
        $("#ct").html(i);
        $("#ce").html(ie);
        $("#rrate").html(rrate);
        $("#rdone").html(rdone);
        $("#cp").html(cp);
    }
    $("#orgtxt").html(final_txt);
    $("#errtxt").html(e_txt);

    setTimeout("update()", 100);


    if (i - preCount > 120) {
        cheatWarn();
    } else if (cp >= 1200) {
        cheatWarn();
    } else if (i >= it) {
        if ($("#second").text() == "0") {
            cheatWarn();
        } else if (isUpdated) {
            $("#rdone").html(100);
            startUp();
            $("#confirm").dialog({
                height: 120,
                width: 200,
                modal: true,
                close: function (event, ui) { resetData(); }
            });         
            //alert("完成！请查看成绩。");            
        } else {
            isUpdated = true;
        }
    } else {
        preCount = i;
    }

}

function cheatWarn() {
    isCheating = true;
    startUp();
    $("#nocheating").dialog({
        height: 120,
        width: 200,
        modal: true,
        close: function (event, ui) { resetData(); }
    });
}

function timedCount() {
    if (c % 10 == 0 && $("#start").html() == "暂停") {
        var cseconds = c / 10;
        var chours = Math.floor(cseconds / 3600);
        cseconds -= chours * 3600;
        var cminutes = Math.floor(cseconds / 60);
        cseconds -= cminutes * 60;
        $("#chours").html(chours);
        $("#cminutes").html(cminutes);
        $("#cseconds").html(cseconds);
        $("#second").text(c / 10);
    }
	c=c+1
	t=setTimeout("timedCount()",100)
}

function stopCount()
{
	clearTimeout(t)
}

function clearCount()
{
    $("#chours").html(0);
    $("#cminutes").html(0);
    $("#cseconds").html(0);
    $("#second").text(0);
}

function resetData()
{
	stopCount(); 
	clearCount();
	var ut = document.getElementById("usertxt");
	ut.value = "";
	ut.focus();
	c = 0;
	isUpdated = false;
	preCount = 0;

    if ($("#start").html() == "暂停") {
        $("#start").html("开始");
    }
}

function startUp() {
    if ($("#start").html() == "开始" && $("#usertxt").val().length < $("#orgtxt").text().length && !isCheating) {
        $("#start").html("暂停");
        stopCount();
        timedCount();
        updatePosition();
    } else {
        stopCount();
        $("#start").html("开始");
    }
}

function keyupHandler() {
	var utxt = $("#usertxt").val();
	var utxtl = utxt.length;
	if (utxtl > 0 && $("#start").html() == "开始") {
	    $("#start").html("暂停");
	    stopCount();
	    timedCount();
	    setCaretPosition(document.getElementById('usertxt'), utxtl)
	}
}

function updatePosition()
{
	//将光标设置在已输入文本的末尾，尽量避免在已输入的文字中插入文字。
	var utxt = $("#usertxt").val();
	var utxtl = utxt.length;
}

function selectLanguage()
{
    $.ajax({ type: "GET", url: "articles.xml", async: false, dataType: "xml", success: function (xml) {
        var language = $("#language").val();
        $("#article>option").remove();
        var j = 1;
        $(xml).find("item[language='" + language + "']").each(function () {
            if (j == 1) {
                $("#article").append("<option selected='selected' value='" + $(this).attr('value') + "'>" + $(this).text() + "</option>");
            } else {
                $("#article").append("<option value='" + $(this).attr('value') + "'>" + $(this).text() + "</option>");
            }
            j++;
        });
    } 
    }); 
    selectArticle();
}
 
function selectArticle()
{
    var article = $("#language").val() + "/" + $("#article").val() + ".xml";
    $.ajax({ type: "GET", url: article, async: false, dataType: "xml", success: function (xml) {
        $("#segment>option").remove();
        var k = 1;
        $(xml).find("item").each(function () {
            if (k == 1) {
                $("#segment").append("<option selected='selected' value='" + $(this).attr('segment') + "'>" + $(this).attr('segment') + "</option>");
            } else {
                $("#segment").append("<option value='" + $(this).attr('segment') + "'>" + $(this).attr('segment') + "</option>");
            }
            k++;
        });
    } 
    });
    selectSegment();
}
 
function selectSegment()
{
    var article = $("#language").val() + "/" + $("#article").val() + ".xml";
    $.ajax({ type: "GET", url: article, async: false, dataType: "xml", success: function (xml) {
        var segment = $("#segment").val();
        //alert(segment);
        var content = $(xml).find("item[segment='" + segment + "']").text();
        //alert(content);
        $("#orgtxt").html(content);
    }});
    resetData();
}
 
function doGetCaretPosition (ctrl) {
	var CaretPos = 0;
	// IE Support
	if (document.selection) {

		ctrl.focus ();
		var Sel = document.selection.createRange ();

		Sel.moveStart ('character', -ctrl.value.length);

		CaretPos = Sel.text.length;
	}
	// Firefox support
	else if (ctrl.selectionStart || ctrl.selectionStart == '0')
		CaretPos = ctrl.selectionStart;

	return (CaretPos);

}

function setCaretPosition(ctrl, pos)
{
	if(ctrl.setSelectionRange)
	{
		ctrl.focus();
		ctrl.setSelectionRange(pos,pos);
	}
	else if (ctrl.createTextRange) {
		var range = ctrl.createTextRange();
		range.collapse(true);
		range.moveEnd('character', pos);
		range.moveStart('character', pos);
		range.select();
	}
}