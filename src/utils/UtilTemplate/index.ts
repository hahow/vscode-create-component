import * as fs from "fs";
import * as mustache from "mustache";
import * as path from "path";

import UTIL_TEMPLATE from "../../templates/util/util";
import INDEX_TEMPLATE from "../../templates/util/index";
import TEST_TEMPLATE from "../../templates/util/test";
import Template from "../Template";

class UtilTemplate implements Template {
  public generate(name: string, folder: string): void {
    fs.writeFileSync(
      path.join(folder, `${name}.ts`),
      mustache.render(UTIL_TEMPLATE, { name })
    );
    fs.writeFileSync(
      path.join(folder, "index.ts"),
      mustache.render(INDEX_TEMPLATE, { name })
    );
    fs.writeFileSync(
      path.join(folder, `${name}.type.ts`),
      mustache.render(TEST_TEMPLATE, { name })
    );
  }
}

export default UtilTemplate;
