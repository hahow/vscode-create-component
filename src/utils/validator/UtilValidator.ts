import Validator from "./Validator";

class UtilValidator extends Validator {
  public validate(name: string): string | null {
    if (!name.match(/^[a-z]/)) {
      return "元件名稱必須以小寫字母開頭";
    }
    return super.validate(name);
  }
}

export default UtilValidator;
