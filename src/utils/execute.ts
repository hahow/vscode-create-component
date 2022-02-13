import * as fs from "fs";
import * as path from "path";
import * as vscode from "vscode";
import ComponentFactory from "./factory/ComponentFactory";
import HOCFactory from "./factory/HOCFactory";
import HookFactory from "./factory/HookFactory";
import UtilFactory from "./factory/UtilFactory";

enum Item {
  component = "Component",
  hoc = "Higher-Order Component",
  hook = "Hook",
  util = "Utility Function",
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

  try {
    let factory;
    if (item === Item.component) {
      factory = new ComponentFactory();
    } else if (item === Item.hoc) {
      factory = new HOCFactory();
    } else if (item === Item.hook) {
      factory = new HookFactory();
    } else if (item === Item.util) {
      factory = new UtilFactory();
    } else {
      throw new Error("未知的類型");
    }

    const validator = factory.createValidator();

    const inputBoxOptions: vscode.InputBoxOptions = {
      prompt: `元件將建立在 ${fsPath} 下`,
      placeHolder: "請輸入元件名稱",
      validateInput: validator.validate,
      ignoreFocusOut: true,
    };

    const name = await vscode.window.showInputBox(inputBoxOptions);

    if (typeof name !== "string") {
      return;
    }

    const folder = path.join(fsPath, name);
    fs.mkdirSync(folder);

    const generator = factory.createGenerator();
    generator.generate(name, folder);
  } catch (error: unknown) {
    if (error instanceof Error) {
      vscode.window.showErrorMessage(error.message);
    }
    vscode.window.showErrorMessage("未知錯誤");
  }
};

export default execute;
