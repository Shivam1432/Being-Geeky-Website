$(function()
{
menu=$("nav ul"),
$("#openup").on("click",function(n)
{
    n.preventDefault(),menu.slideToggle()
}
),
$(window).resize(function()
{
    $(this).width()>480&&menu.is(":hidden")&&menu.removeAttr("style")}
),
$("nav li").on("click",function(n){
$(window).width()<480&&menu.slideToggle()}
),
$(".open-menu").height($(window).height())
}
)
,
$(".cf a").on("click",function(n)
{
if(""!==this.hash)
{
n.preventDefault();
const i=this.hash;$("html, body").animate(
{scrollTop:$(i).offset().top}
,800,
function(){window.location.hash=i})
}
}
);
