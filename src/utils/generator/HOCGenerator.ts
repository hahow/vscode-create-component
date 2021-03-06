import * as fs from "fs";
import * as mustache from "mustache";
import * as path from "path";

import HOC_TEMPLATE from "../../templates/hoc/hoc";
import INDEX_TEMPLATE from "../../templates/hoc/index";
import TYPE_TEMPLATE from "../../templates/hoc/type";
import IGenerator from "./IGenerator";

const capitalize = (s: string) => {
  return s[0].toUpperCase() + s.slice(1);
};

const lowerFirst = (s: string) => {
  return s[0].toLowerCase() + s.slice(1);
};

class HOCGenerator implements IGenerator {
  public generate(name: string, folder: string): void {
    const capitalizedName = capitalize(name);
    const trimmedName = name.replace(/^with(\w+)/, "$1");
    const trimmedLowerFirstName = lowerFirst(trimmedName);

    fs.writeFileSync(
      path.join(folder, `${name}.tsx`),
      mustache.render(HOC_TEMPLATE, {
        capitalizedName,
        name,
        trimmedName,
        trimmedLowerFirstName,
      })
    );
    fs.writeFileSync(
      path.join(folder, "index.ts"),
      mustache.render(INDEX_TEMPLATE, { name })
    );
    fs.writeFileSync(
      path.join(folder, `${name}.type.ts`),
      mustache.render(TYPE_TEMPLATE, { capitalizedName })
    );
  }
}

export default HOCGenerator;
