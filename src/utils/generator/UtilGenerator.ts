import * as fs from "fs";
import * as mustache from "mustache";
import * as path from "path";

import UTIL_TEMPLATE from "../../templates/util/util";
import INDEX_TEMPLATE from "../../templates/util/index";
import TEST_TEMPLATE from "../../templates/util/test";
import TYPE_TEMPLATE from "../../templates/util/type";
import IGenerator from "./IGenerator";

// TODO: 重複造輪子，改用 lodash
const capitalize = (s: string) => {
  return s[0].toUpperCase() + s.slice(1);
};

class UtilGenerator implements IGenerator {
  public generate(name: string, folder: string): void {
    const capitalizedName = capitalize(name);

    fs.writeFileSync(
      path.join(folder, `${name}.ts`),
      mustache.render(UTIL_TEMPLATE, { capitalizedName, name })
    );
    fs.writeFileSync(
      path.join(folder, "index.ts"),
      mustache.render(INDEX_TEMPLATE, { name })
    );
    fs.writeFileSync(
      path.join(folder, `${name}.test.ts`),
      mustache.render(TEST_TEMPLATE, { name })
    );
    fs.writeFileSync(
      path.join(folder, `${name}.type.ts`),
      mustache.render(TYPE_TEMPLATE, { capitalizedName })
    );
  }
}

export default UtilGenerator;
