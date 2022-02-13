import HOCGenerator from "../generator/HOCGenerator";
import IGenerator from "../generator/IGenerator";
import HOCValidator from "../validator/HOCValidator";
import Validator from "../validator/Validator";
import IFactory from "./IFactory";

class HOCFactory implements IFactory {
  public createValidator(): Validator {
    return new HOCValidator();
  }
  public createGenerator(): IGenerator {
    return new HOCGenerator();
  }
}

export default HOCFactory;
