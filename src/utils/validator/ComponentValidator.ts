import Validator from "./Validator";

class ComponentValidator extends Validator {
  public validate(name: string): string | null {
    if (!name.match(/^[A-Z]/)) {
      return "元件名稱必須以大寫字母開頭";
    }
    return super.validate(name);
  }
}

export default ComponentValidator;
