
var source   = $("#entry-template").html();
var template = Handlebars.compile(source);


$(document).ready(function(){$("button").click(function(){

var uval= $('#stk').val();

var ur="https://stockvider.p.mashape.com/indicator/DATA/"+uval+"/";

$.ajax({'url':ur,'type':'GET','headers':{'X-Mashape-Key':
	'Bs5BvTwMeNmshIVgyxatfWRfPMkNp1Dmi30jsnLUNZ8zyDyBW8'},success:function(result){


var context = {title:result};
var html    = template(context);

$("#stkval").html(html);


}});

});

});


