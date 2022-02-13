import IGenerator from "../generator/IGenerator";
import Validator from "../validator/Validator";

interface IFactory {
  createValidator(): Validator;
  createGenerator(): IGenerator;
}

export default IFactory;
