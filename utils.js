/*
 * 获取鼠标当前坐标
 */
function mousePosition(ev) {
	if(ev.pageX || ev.pageY) { //firefox、chrome等浏览器
		return {
			x: ev.pageX,
			y: ev.pageY
		};
	}
	return { // IE浏览器
		x: ev.clientX + document.body.scrollLeft - document.body.clientLeft,
		y: ev.clientY + document.body.scrollTop - document.body.clientTop
	};
}

function mouseClick(ev) {
	ev = ev || window.event;
	var mousePos = mousePosition(ev);
	console.log('(',mousePos.x, mousePos.y, ')')
}

window.onclick = mouseClick;