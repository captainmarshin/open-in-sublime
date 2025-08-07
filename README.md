<img src="icon.png" alt="logo" width="80">

# Open in Sublime

VS Code extension to open file or folder in Sublime Text from the context menu.

<img src="preview.gif" alt="Functions preview">

## Setup

To make extension work properly add **Sublime CLI** to the system `PATH`

**macOS**<br>
```bash
sudo ln -s "/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl" /usr/local/bin/subl
```

Other systems:<br>
[https://www.sublimetext.com/docs/command_line.html](https://www.sublimetext.com/docs/command_line.html)


Download extension from Release page, build from source or download from VS Code Marketplace.

## Using

Right click on file / folder and click on "Open in Sublime Text"

## Build from source

```bash
npm install
vsce package
