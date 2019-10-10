import './styles/main.scss';
import $ from 'jquery';
//import '../node_modules/bootstrap/js/dist/*';
window.jQuery = $;
window.$ = $;


function toggleDivs($show, $hide) {
    $show.toggle();
    $hide.hide();
}
$("#oyente").on("click", function () {
    toggleDivs($("#b-div"), $("#a-div"));
});
$("#expositor").on("click", function () {
    toggleDivs($("#a-div"), $("#b-div"));
});

$(function(){
    $('#oyente').click();
 });