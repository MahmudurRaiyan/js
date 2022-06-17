$(document).ready(function(){
     
     $('button1').click(function(){
         alert("yo");
     });

});
$( document ).ajaxError(function() {
  $( ".log" ).text( "Triggered ajaxError handler." );
});

$( "form" ).on( "submit", function( event ) {
  event.preventDefault();
  console.log( $( this ).serialize() );
});
$( "form" ).submit(function( event ) {
  console.log( $( this ).serializeArray() );
  event.preventDefault();
});
<script>
$( "p" ).last().addClass( "selected" );
</script>

$( "input" ).change(function() {
  var $input = $( this );
  $( "p" ).html(
    ".attr( \"checked\" ): <b>" + $input.attr( "checked" ) + "</b><br>" +
    ".prop( \"checked\" ): <b>" + $input.prop( "checked" ) + "</b><br>" +
    ".is( \":checked\" ): <b>" + $input.is( ":checked" ) + "</b>" );
}).change();

$( "input" )
  .change(function() {
    var $input = $( this );
    $( "p" ).html( ".attr( 'checked' ): <b>" + $input.attr( "checked" ) + "</b><br>" +
      ".prop( 'checked' ): <b>" + $input.prop( "checked" ) + "</b><br>" +
      ".is( ':checked' ): <b>" + $input.is( ":checked" ) + "</b>" );
  })
  .change()

  function showValues() {
    var fields = $( ":input" ).serializeArray();
    $( "#results" ).empty();
    jQuery.each( fields, function( i, field ) {
      $( "#results" ).append( field.value + " " );
    });
  }
 
  $( ":checkbox, :radio" ).click( showValues );
  $( "select" ).change( showValues );
  showValues();

  function showValues() {
    var str = $( "form" ).serialize();
    $( "#results" ).text( str );
  }
  $( "input[type='checkbox'], input[type='radio']" ).on( "click", showValues );
  $( "select" ).on( "change", showValues );
  showValues()

  var params = { width:1680, height:1050 };
var str = jQuery.param( params );
$( "#results" ).text( str );

$( "div" ).css( "border", "2px solid red" )
  .add( "p" )
  .css( "background", "yellow" );