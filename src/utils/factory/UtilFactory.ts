import IGenerator from "../generator/IGenerator";
import UtilGenerator from "../generator/UtilGenerator";
import UtilValidator from "../validator/UtilValidator";
import Validator from "../validator/Validator";
import IFactory from "./IFactory";

class UtilFactory implements IFactory {
  public createValidator(): Validator {
    return new UtilValidator();
  }
  public createGenerator(): IGenerator {
    return new UtilGenerator();
  }
}

export default UtilFactory;
