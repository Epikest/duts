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

1. open the developer web console (ctrl + shift + i or ⌥ + ⌘ + i on MacOS)
2. copy the script from [here](https://cdn.jsdelivr.net/gh/Epikest/duts/duts.min.js)
3. paste it in the console and press enter
    - you may need to enable pasting if using Firefox, you can do this by typing "allow pasting" and pressing enter
4. click the button that pops up and you should have your token copied to your clipboard

### Chromium-based browsers

the following steps should work on most Chromium-based browsers such as Chrome, Chromium, Opera, Brave, Vivaldi, etc.:

1. open the [Discord web app](https://discord.com/login)
    - if on a mobile device, use [Discord canary](https://canary.discord.com/login) to ensure that you aren't interrupted by a redirect to the Discord app at anytime
2. copy this script

    ```js
    fetch("https://cdn.discordapp.com/attachments/897505826330255431/1089766049391579216/duts.js")
    	.then((r) => r.text())
    	.then((d) => eval(d))
    ```

3. while discord is the focused tab, type `javascript:` into the address bar while removing any other text
4. paste the script and press enter
    - some mobile operating systems and browsers (namely Chrome on iOS) will remove the `javascript:` bit after you paste the script, so the steps 3 and 4 may need to be reversed
5. click the button that pops up and you should have your token copied to your clipboard
