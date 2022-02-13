import * as fs from "fs";
import * as mustache from "mustache";
import * as path from "path";

import HOOK_TEMPLATE from "../../templates/hook/hook";
import INDEX_TEMPLATE from "../../templates/hook/index";
import TYPE_TEMPLATE from "../../templates/hook/type";
import IGenerator from "./IGenerator";

class HookGenerator implements IGenerator {
  public generate(name: string, folder: string): void {
    fs.writeFileSync(
      path.join(folder, `${name}.ts`),
      mustache.render(HOOK_TEMPLATE, { name })
    );
    fs.writeFileSync(
      path.join(folder, "index.ts"),
      mustache.render(INDEX_TEMPLATE, { name })
    );
    fs.writeFileSync(
      path.join(folder, `${name}.type.ts`),
      mustache.render(TYPE_TEMPLATE, { name })
    );
  }
}

export default HookGenerator;
