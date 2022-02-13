import Validator from "./Validator";

class HOCValidator extends Validator {
  public validate(name: string): string | null {
    if (!name.match(/^with/)) {
      return "元件名稱必須以 with 開頭";
    }
    return super.validate(name);
  }
}

export default HOCValidator;
