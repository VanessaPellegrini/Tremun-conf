import './styles/main.scss';
import $ from 'jquery';
import 'bootstrap/js/dist/dropdown';
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