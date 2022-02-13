abstract class Validator {
  public validate(name: string): string | null {
    if (!name || name === "") {
      return "元件名稱不能為空";
    }
    if (!name.match(/^[0-9a-zA-Z]+$/)) {
      return "元件名稱不能有非英文字母以及數字的字元";
    }
    return null;
  }
}

export default Validator;
