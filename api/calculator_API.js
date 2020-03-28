"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Calculator {
    constructor() {
        this.firstNB = null;
        this.secondNB = null;
        this.func = null;
        // private res: string = "";
        this.currentOP = "";
    }
    get getOP() {
        return this.currentOP;
    }
    setOperation(v, cb) {
        if (this.firstNB === null) {
            this.firstNB = 0;
        }
        if (this.func === null) {
            this.func = v;
        }
        else {
            if (this.secondNB != null) {
                this.Result();
                this.func = v;
            }
            else {
                this.func = v;
            }
        }
        cb(this.Result());
    }
    setNUmber(nb, cb) {
        if (this.firstNB === null) {
            this.firstNB = nb;
            cb(this.firstNB);
        }
        else {
            this.secondNB = nb;
            cb(this.secondNB);
        }
    }
    Addition() {
        this.currentOP = "+";
        return this.firstNB + this.secondNB;
    }
    Multiplication() {
        this.currentOP = "x";
        return this.firstNB * this.secondNB;
    }
    Subtraction() {
        this.currentOP = "-";
        return this.firstNB - this.secondNB;
    }
    Division() {
        this.currentOP = "/";
        return this.firstNB / this.secondNB;
    }
    Result(cb) {
        let result = {
            result: 0,
            restop: ""
        };
        if (this.func !== null) {
            if (this.firstNB != null) {
                if (this.secondNB != null) {
                    result.result = this.func();
                    this.clear();
                    this.firstNB = result.result;
                }
                else {
                    result.result = this.firstNB;
                }
            }
            else {
                result.result = 0;
            }
            if (cb !== undefined) {
                cb(this.Result());
            }
            else {
                // result.restop = `${this.firstNB !== null ? this.firstNB : 0} ${this.currentOP !== null ? this.currentOP : ""} ${this.secondNB !== null ? this.secondNB : ""}`;
                // result.restop = `${this.firstNB} ${this.currentOP} ${this.secondNB}`;
                return result;
            }
        }
        else {
            result.result = this.firstNB;
            return result;
        }
    }
    clear() {
        this.firstNB = null;
        this.secondNB = null;
        this.func = null;
    }
}
exports.default = Calculator;
