import Validator from "./Validator";

class HookValidator extends Validator {
  public validate(name: string): string | null {
    if (!name.match(/^use/)) {
      return "元件名稱必須以 use 開頭";
    }
    return super.validate(name);
  }
}

export default HookValidator;
