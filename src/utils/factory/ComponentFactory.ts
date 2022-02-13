import ComponentGenerator from "../generator/ComponentGenerator";
import IGenerator from "../generator/IGenerator";
import ComponentValidator from "../validator/ComponentValidator";
import Validator from "../validator/Validator";
import IFactory from "./IFactory";

class ComponentFactory implements IFactory {
  public createValidator(): Validator {
    return new ComponentValidator();
  }
  public createGenerator(): IGenerator {
    return new ComponentGenerator();
  }
}

export default ComponentFactory;
