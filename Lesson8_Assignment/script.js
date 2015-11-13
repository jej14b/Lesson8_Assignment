/**
* Created with LIS2360_Lesson8_jQuery.
* User: jej14b
* Date: 2015-11-12
* Time: 09:53 PM
* To change this template use Tools | Templates.
*/
/*Program Name: Recipe Display Application
 * Author: John Jablonka
 * Date: 11/12/15
 * Filename: script.js
 */

function display(event){
  $(event.currentTarget).next().fadeIn("slow")
}//end of display
$("h3").click(display);

function display2(event) {

   $(event.currentTarget).next().animate( { height: 'toggle'}, "slow");

}
/*
$("h3").click(display);
*/

$("h3").hover(function(){
       $(this).css("background-color", "yellow");
       }, function(){
       $(this).css("background-color", "pink");
});

/*
$("h3").click(display2);
*/

$("h3").hover(display2);