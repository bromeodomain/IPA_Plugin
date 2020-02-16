var height = '60px';
var iframe_base = document.createElement('iframe');
iframe_base.src = chrome.extension.getURL('./toolbar.html');
iframe_base.style.height = height;
iframe_base.style.width = '65%';
iframe_base.style.position = 'fixed';
iframe_base.style.bottom = '0';
iframe_base.style.left = '0';
iframe_base.style.zIndex = '938089'; // Some high value
document.documentElement.appendChild(iframe_base);

var bodyStyle = document.body.style;
var cssTransform = 'transform' in bodyStyle ? 'transform' : 'webkitTransform';
bodyStyle[cssTransform] = 'translateY(' + height + ')';
