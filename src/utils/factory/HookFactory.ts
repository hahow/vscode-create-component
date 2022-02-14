import IGenerator from "../generator/IGenerator";
import Validator from "../validator/Validator";
import IFactory from "./IFactory";
import HookGenerator from "../generator/HookGenerator";
import HookValidator from "../validator/HookValidator";

class HookFactory implements IFactory {
  public createValidator(): Validator {
    return new HookValidator();
  }
  public createGenerator(): IGenerator {
    return new HookGenerator();
  }
}

export default HookFactory;
