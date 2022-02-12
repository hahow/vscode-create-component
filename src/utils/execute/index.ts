import * as fs from "fs";
import * as path from "path";
import * as vscode from "vscode";

import ComponentTemplate from "../../utils/ComponentTemplate";

enum Item {
  component = "Component",
}

const execute = async ({ fsPath }: { fsPath: string }) => {
  // The code you place here will be executed every time your command is executed

  const quickPickItems = Object.values(Item);
  const quickPickOptions = {
    canPickMany: false,
    placeHolder: "請選擇元件類型",
    ignoreFocusOut: true,
  };

  const item = await vscode.window.showQuickPick(
    quickPickItems,
    quickPickOptions
  );

  if (!item) {
    return;
  }

  const inputBoxOptions: vscode.InputBoxOptions = {
    prompt: `元件將建立在 ${fsPath} 下`,
    placeHolder: "請輸入元件名稱",
    // TODO: 使用 Factory Pattern 實作 validate()
    // validateInput: validate,
    ignoreFocusOut: true,
  };

  const name = await vscode.window.showInputBox(inputBoxOptions);

  if (typeof name !== "string") {
    return;
  }

  const folder = path.join(fsPath, name);

  try {
    fs.mkdirSync(folder);

    let template;
    if (item === Item.component) {
      template = new ComponentTemplate();
    } else {
      throw new Error("未知的 Template");
    }

    template.generate(name, folder);
  } catch (error: unknown) {
    if (error instanceof Error) {
      vscode.window.showErrorMessage(error.message);
    }
    vscode.window.showErrorMessage("未知錯誤");
  }
};

export default execute;
