import * as vscode from "vscode";

const execute = () => {
  // The code you place here will be executed every time your command is executed
  // Display a message box to the user
  vscode.window.showInformationMessage("Hello World from CreateComponent!");
};

export default execute;
