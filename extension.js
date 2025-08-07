const vscode = require('vscode');
const cp = require('child_process');
const fs = require('fs');

function activate(context) {
  // Folder handler
  let openFolder = vscode.commands.registerCommand('extension.openFolderInSublime', (resource) => {
    if (!resource) {
      vscode.window.showErrorMessage('No folder selected!');
      return;
    }

    const folderPath = resource.fsPath;

    fs.stat(folderPath, (err, stats) => {
      if (err) {
        vscode.window.showErrorMessage('Failed to get folder stats');
        return;
      }

      if (stats.isDirectory()) {
        cp.exec(`subl "${folderPath}"`, (error) => {
          if (error) {
            vscode.window.showErrorMessage(`Failed to open folder in Sublime: ${error.message}`);
          }
        });
      } else {
        vscode.window.showErrorMessage('Selected item is not a folder');
      }
    });
  });

  // File handler
  let openFile = vscode.commands.registerCommand('extension.openFileInSublime', (resource) => {
    if (!resource) {
      vscode.window.showErrorMessage('No file selected!');
      return;
    }

    const filePath = resource.fsPath;

    cp.exec(`subl "${filePath}"`, (error) => {
      if (error) {
        vscode.window.showErrorMessage(`Failed to open file in Sublime: ${error.message}`);
      }
    });
  });

  context.subscriptions.push(openFolder, openFile);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};
