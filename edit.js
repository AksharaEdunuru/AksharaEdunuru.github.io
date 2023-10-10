function run()
{
    let html =document.getElementById("html");
    let css =document.getElementById("css");
    let js =document.getElementById("js");
    let output =document.getElementById("output");
    output.contentDocument.body.innerHTML=html.value +"<style>" +css.value+"</style>";
}