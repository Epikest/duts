<h1 align="center">
	duts
</h1>

<p align="center">
	<b>D</b>iscord <b>u</b>niversal <b>t</b>oken <b>s</b>cript
</p>

<p align="center">
	<a href="https://github.com/Epikest/duts/issues">
		<img alt="Issues" src="https://img.shields.io/github/issues/Epikest/duts?color=0088ff&style=flat-square"/>
	</a>
	<a href="https://github.com/Epikest/duts/pulls">
		<img alt="Pulls" src="https://img.shields.io/github/issues-pr/Epikest/duts?color=0088ff&style=flat-square"/>
	</a>
	<a href="https://www.jsdelivr.com/package/gh/Epikest/duts">
		<img alt="jsDelivr" src="https://data.jsdelivr.com/v1/package/gh/Epikest/duts/badge"/>
	</a>
	<a href="./LICENSE.md">
		<img alt="License" src="https://img.shields.io/github/license/Epikest/duts?style=flat-square"/>
	</a>
</p>

## usage

### Discord desktop app & desktop browsers

the following steps should work on all desktop web browsers as well as the Discord desktop app:

1. open the developer web console (`Ctrl` + `Shift` + `I` or `⌥` + `⌘` + `I` on MacOS)
    - if using the stable channel of the Discord desktop app, set `"DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOURE_DOING": true` in the Discord app settings file (`%appdata%/discord/settings.json` on Windows) and reload the app (`Ctrl` + `R`) else the developer tools panel won't open
2. make sure you're on the `Console` tab
3. copy the script from [here](https://cdn.jsdelivr.net/gh/Epikest/duts/duts.min.js)
4. paste the script in the console and press `Enter`
    - you may need to enable pasting if using Firefox, you can do this by typing `allow pasting` and pressing `Enter`
5. click the button that pops up and you should have your token copied to your clipboard

### Chromium-based browsers on mobile and desktop

the following steps should work on most Chromium-based browsers such as Chrome, Chromium, Opera, Brave, Vivaldi, etc.:

1. open the [Discord web app](https://discord.com/login)
    - if on a mobile device, use [Discord canary](https://canary.discord.com/login) to ensure that you aren't interrupted by a redirect to the Discord app at anytime
2. copy this script

    ```js
    fetch("https://cdn.discordapp.com/attachments/897505826330255431/1092167886853898310/duts.js")
    	.then((r) => r.text())
    	.then((d) => eval(d))
    ```

3. while Discord is the focused tab, type `javascript:` into the address bar while removing any other text
4. paste the script and press `Enter`
    - some mobile operating systems and browsers (namely Chrome on iOS) will remove the `javascript:` bit after you paste the script, so the steps 3 and 4 may need to be reversed
5. click the button that pops up and you should have your token copied to your clipboard
