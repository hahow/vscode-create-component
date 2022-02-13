import IGenerator from "../generator/IGenerator";
import Validator from "../validator/Validator";
import HOCGenerator from "../generator/HOCGenerator";
import IFactory from "./IFactory";
import HOCValidator from "../validator/HOCValidator";

class HookFactory implements IFactory {
  public createValidator(): Validator {
    return new HOCValidator();
  }
  public createGenerator(): IGenerator {
    return new HOCGenerator();
  }
}

export default HookFactory;
