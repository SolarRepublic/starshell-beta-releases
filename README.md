<p align="center">
  <a href="https://starshell.net/">
    <img src="https://starshell.net/media/logoshort.svg" alt="StarShell logo" width="200">
  </a>
</p>

# StarShell Wallet Beta Setup: The "Weekly" Channel

Welcome to the beta program. Since browser extensions must go through a lengthy review process (even for betas), we are providing the "Weekly" channel for users to install and test the beta on a (roughly) weekly update release cycle.


## Getting Started

In the interest of maximum security, its highly recommended that you **DO NOT install this extension in your day-to-day web browser**. Instead, download and install a completely separate browser program that you will only use for beta testing this wallet.

## Connect to the Weekly channel

To make the update process simple, you will need to clone the Weekly channel git repository.

For advanced users, [clone and update the repository using git](#cloning-with-git).
For everyone else, [clone and update using GitHub Desktop](cloning-with-github-desktop).


### Cloning with GitHub Desktop

1. Download and setup [GitHub Deskop](https://desktop.github.com/).

2. Open the [StarShell Beta Releases Repository](https://github.com/SolarRepublic/starshell-beta-releases) and click the green "Code" button, then "Open with GitHub Desktop".

3. Continue to [Setting up with browser](#setting-up-with-browser)


### Cloning with git

1. Make sure you have [git](https://git-scm.com/downloads) installed.

2. Open a terminal and change directory to where you want to save the built extension. Then run:

```bash
git clone https://github.com/SolarRepublic/starshell-beta-releases
```

3. Continue to [Setting up with browser](#setting-up-with-browser)


## Setting up with browser

 - [Chrome](#setting-up-chrome-canary)
 - [Firefox](#setting-up-firefox-developer-edition)


### Setting up Chrome Canary

1. Download and install [Chrome Canary](https://www.google.com/chrome/canary/).

2. Open `chrome://extensions/` .

3. Enable Developer mode in the top-right corner.

  ![Load extension](https://user-images.githubusercontent.com/1456400/182080739-7336099b-bd9b-45a3-b250-e763db2500d8.png)

4. Click the "Load unpacked" button.

5. Navigate the the directory where you cloned the `starshell-beta-releases` repository and choose the `chrome` directory.

6. Make sure to enable/allow system notifications for Google Chrome Canary in your OS settings. This will let you receive notifications about incoming/outgoing transactions as they succeed.


## Setting up Firefox Developer Edition

To be added in v0.0.5 .

<!-- 1. Download and install [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/) -->

<!-- 2. Open `about:addons` . -->


## Updating

When a new release is published, you will be forced to update in order to continue beta testing.


### GitHub Desktop

1. When a new release is published, open your local `starshell-beta-releases` repository in GitHub Desktop and click the "Fetch origin" or "Pull origin" button

2. Open your browser's extension manager and find the button to "reload" the StarShell extension. You should be good to go!


### CLI

1. When a new release is published, open a terminal and change directory into the folder that was created by the clone and run:

```bash
git pull
```

2. Open your browser's extension manager and find the button to "reload" the StarShell extension. You should be good to go!

------

[Website](https://starshell.net/)

[Discord](https://discord.gg/U8SSK7T4xh)

[Twitter](https://twitter.com/StarShellWallet)
