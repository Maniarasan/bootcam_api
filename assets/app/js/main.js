
var source   = $("#entry-template").html();
var template = Handlebars.compile(source);


$(document).ready(function(){$("button").click(function(){

var uval= $('#stk').val();

var ur="http://www.google.com/finance/info?q="+uval;

$.ajax({'url':ur,'type':'GET',success:function(result){


var context = {title:result};
var html    = template(context);

$("#stkval").html(html);


}});

});

});


