class Calculator {
  private firstNB: number = null;
  private secondNB: number = null;
  private func: () => number | null = null;
  // private res: string = "";
  private currentOP: string = "";

  public get getOP(): string {
    return this.currentOP;
  }

  public setOperation(v: () => number | null, cb: (result: object) => void) {
    if (this.firstNB === null) {
      this.firstNB = 0;
    }
    if (this.func === null) {
      this.func = v;
    } else {
      if (this.secondNB != null) {
        this.Result();

        this.func = v;
      } else {
        this.func = v;
      }
    }
    cb(this.Result());
  }

  setNUmber(nb: number, cb: (result: number) => void) {
    if (this.firstNB === null) {
      this.firstNB = nb;
      cb(this.firstNB);
    } else {
      this.secondNB = nb;
      cb(this.secondNB);
    }
  }

  Addition(): number {
    this.currentOP = "+";
    return this.firstNB + this.secondNB;
  }
  Multiplication(): number {
    this.currentOP = "x";
    return this.firstNB * this.secondNB;
  }
  Subtraction(): number {
    this.currentOP = "-";
    return this.firstNB - this.secondNB;
  }
  Division(): number {
    this.currentOP = "/";
    return this.firstNB / this.secondNB;
  }

  Result(cb?: (result: object) => void): object {
    let result = {
      result: 0,
      restop: ""
    };
    if (this.func!==null) {
      if (this.firstNB != null) {
        if (this.secondNB != null) {
          result.result = this.func();
  
          this.clear();
  
          this.firstNB = result.result;
        } else {
          result.result = this.firstNB;
        }
      } else {
        result.result = 0;
      }
      if (cb !== undefined) {
        cb(this.Result());
      } else {
        // result.restop = `${this.firstNB !== null ? this.firstNB : 0} ${this.currentOP !== null ? this.currentOP : ""} ${this.secondNB !== null ? this.secondNB : ""}`;
  
        // result.restop = `${this.firstNB} ${this.currentOP} ${this.secondNB}`;
  
        return result;
      }
    }else{
      result.result=this.firstNB
      return result;
    }
  }
  clear(): void {
    this.firstNB = null;
    this.secondNB = null;
    this.func = null;
  }
}

export default Calculator;
