$(function() {
  var d = $("#downloads_choices").accordion({
    autoHeight: false
  });
  
  if ($.client.os == "Windows") d.accordion( "activate" , 0 );
  if ($.client.os == "Mac")     d.accordion( "activate" , 1 );
  if ($.client.os == "Linux")   d.accordion( "activate" , 2 );
});
