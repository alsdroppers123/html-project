function popup(id){
    if($("#"+id).hasClass( "vis" )){
       $("#"+id).removeClass( "vis" );
    }else{
      $(".episodes").removeClass( "vis" );
      $("#"+id).addClass( "vis" );
      }
    }