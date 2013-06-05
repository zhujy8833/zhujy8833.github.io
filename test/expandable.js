var $ = document;
$.body.style.backgroundColor = "#ff00ff";
$.write('<div>');
$.write('<form action="">');
$.write('<input type=button value="Expand" onmousedown="expandButton()">');
$.write('<input type=button value="Collapse" onmousedown="collapseButton()">');
$.write('</form>');
$.write('</div>');
$.write('<div id="messages" style="border:1px #000000 solid; font-size:xx-small"></div>');
function expandButton() { window.toolset.expandWindow(); }
function collapseButton() { window.toolset.collapseWindow(); }
function renderExpandedView(width, height, direction) {
  	$.getElementById('messages').innerHTML += 'expanded: width=' + width + ', height=' + height + ', direction=' + direction + '<br>';
}
function renderCollapsedView(width, height) {
 	$.getElementById('messages').innerHTML += 'collapsed: width=' + width + ',height=' + height + '<br>';
}
window.toolset = new CreativeToolset();
var params = {
 width: 350,
 height: 600,
 expansionCallback: window.renderExpandedView,
 collapseCallback: window.renderCollapsedView
};
window.toolset.enableExpansion(params);