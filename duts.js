webpackChunkdiscord_app.push([
	[""],
	{},
	(req) => {
		const _ = document.createElement("textarea")
		_.value = Object.values(req.c)
			.find((x) => x?.exports?.default?.getToken)
			?.exports?.default?.getToken()
		document.documentElement.appendChild(_)
		const btn = document.createElement("button")
		btn.style.backgroundColor = "#ffafaf"
		btn.style.borderRadius = "50rem"
		btn.style.color = "#57171f"
		btn.style.fontSize = "4rem"
		btn.style.left = "50%"
		btn.style.padding = "1rem 2rem"
		btn.style.position = "absolute"
		btn.style.top = "50%"
		btn.style.transform = "translate(-50%, -50%)"
		btn.style.zIndex = "727"
		btn.textContent = "copy token to clipboard"
		document.documentElement.appendChild(btn)
		btn.addEventListener("click", () => {
			_.select()
			document.execCommand("copy")
			document.documentElement.removeChild(_)
			document.documentElement.removeChild(btn)
		})
		console.log("check your clipboard")
	}
])