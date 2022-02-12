import * as fs from "fs";
import * as mustache from "mustache";
import * as path from "path";

import COMPONENT_TEMPLATE from "../../templates/component/component";
import INDEX_TEMPLATE from "../../templates/component/index";
import STORIES_TEMPLATE from "../../templates/component/stories";
import STYLED_COMPONENTS_TEMPLATE from "../../templates/component/style";
import TYPE_TEMPLATE from "../../templates/component/type";
import Template from "../Template";

class ComponentTemplate implements Template {
  public generate(name: string, folder: string): void {
    fs.writeFileSync(
      path.join(folder, `${name}.tsx`),
      mustache.render(COMPONENT_TEMPLATE, { name })
    );
    fs.writeFileSync(
      path.join(folder, "index.ts"),
      mustache.render(INDEX_TEMPLATE, { name })
    );
    fs.writeFileSync(
      path.join(folder, `${name}.stories.tsx`),
      mustache.render(STORIES_TEMPLATE, { name })
    );
    fs.writeFileSync(
      path.join(folder, `${name}.style.ts`),
      mustache.render(STYLED_COMPONENTS_TEMPLATE, { name })
    );
    fs.writeFileSync(
      path.join(folder, `${name}.type.ts`),
      mustache.render(TYPE_TEMPLATE, { name })
    );
  }
}

export default ComponentTemplate;
