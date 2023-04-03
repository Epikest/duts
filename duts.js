webpackChunkdiscord_app.push([
	[""],
	{},
	(req) => {
		const _ = document.createElement("textarea")
		_.style.position = "absolute"
		_.style.top = "-6969px"
		_.value = Object.values(req.c)
			.find((x) => x?.exports?.default?.getToken)
			?.exports?.default?.getToken()

		const btn = document.createElement("button")
		btn.style.backgroundColor = "#ffafaf"
		btn.style.borderRadius = "50rem"
		btn.style.color = "#57171f"
		btn.style.fontSize = "5vw"
		btn.style.left = "50%"
		btn.style.maxWidth = "100%"
		btn.style.padding = "1rem 2rem"
		btn.style.position = "absolute"
		btn.style.textOverflow = "hidden"
		btn.style.top = "50%"
		btn.style.transform = "translate(-50%, -50%)"
		btn.style.whiteSpace = "nowrap"
		btn.style.zIndex = "727"
		btn.textContent = "copy token to clipboard"
		btn.addEventListener("click", () => {
			_.select()
			document.execCommand("copy")
			document.documentElement.removeChild(_)
			document.documentElement.removeChild(btn)
			console.log(
				"%ccheck your clipboard",
				// funny discord console font
				"color:#5865f2;font-size:72px;-webkit-text-stroke-width:2px;-webkit-text-stroke-color:black;font-weight:bold"
			)
		})

		document.documentElement.appendChild(_)
		document.documentElement.appendChild(btn)
	}
])
