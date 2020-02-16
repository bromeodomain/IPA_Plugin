var height = '100%';
var iframe_side = document.createElement('iframe');
iframe_side.src = chrome.extension.getURL('sidebar.html');
iframe_side.style.height = height;
iframe_side.style.background = "lightgrey";
iframe_side.style.width = '35%';
iframe_side.style.position = 'fixed';
iframe_side.style.bottom = '0';
iframe_side.style.right = '0';
iframe_side.style.zIndex = '938089'; // Some high value
document.documentElement.appendChild(iframe_side);
