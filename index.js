function toggleShare() {
	const shareDOM = document.getElementsByClassName("post-share")[0];

	const desktopMatch = window.matchMedia("(min-width: 768px)");

	if (shareDOM) {
		if (!shareDOM.dataset.open || shareDOM.dataset.open == "false") {
			openShare(desktopMatch);
			shareDOM.dataset.open = true
		} else {
			closeShare(desktopMatch);
			shareDOM.dataset.open = false
		}
	}
}

function openShare(desktopMatch) {
	const shareDOM = document.getElementsByClassName("post-share")[0];

	if (shareDOM) {
		if (desktopMatch.matches) {
			const btnDOM = document.getElementsByClassName("post-author")[0].getElementsByClassName("post-share-btn")[0];
			btnDOM.style.backgroundColor = "hsl(214, 17%, 51%)";
			btnDOM.getElementsByTagName('svg')[0].getElementsByTagName('path')[0].style.fill = "white";

			shareDOM.style.clipPath = "circle(200% at 46% 165%)"
		} else {
			shareDOM.style.clipPath = "circle(200% at calc(100% - 50px) center)"
		}
		
	}
}

function closeShare(desktopMatch) {
	const shareDOM = document.getElementsByClassName("post-share")[0];

	if (shareDOM) {

		if (desktopMatch.matches) {
			const btnDOM = document.getElementsByClassName("post-author")[0].getElementsByClassName("post-share-btn")[0];
			btnDOM.style.backgroundColor = "hsl(210, 46%, 95%)";
			btnDOM.getElementsByTagName('svg')[0].getElementsByTagName('path')[0].style.fill = "rgb(110, 128, 152)";

			shareDOM.style.clipPath = "circle(0 at 46% 165%)"
		} else {
			shareDOM.style.clipPath = "circle(0 at calc(100% - 50px) center)"
		}
		
	}
}

window.addEventListener('load', function() {
	xhr = new XMLHttpRequest();
	xhr.open("GET","images/icon-share.svg",false);
	// Following line is just to be on the safe side;
	// not needed if your server delivers SVG with correct MIME type
	xhr.overrideMimeType("image/svg+xml");
	xhr.onload = function(e) {
		// You might also want to check for xhr.readyState/xhr.status here
		if (xhr.status == 200) {
			const loadSvg = xhr.responseXML.documentElement;
			// console.log(xhr.responseXML.documentElement);
			const btnDOMs = document.getElementsByClassName('post-share-btn')
			for (let i = 0; i < btnDOMs.length; i++) {
				btnDOMs[i].appendChild(loadSvg.cloneNode(loadSvg));
			}
		}
	}
	xhr.send("");
})