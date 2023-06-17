export class Result<T>{
    public isSuccess: boolean;
    public isFailure: boolean;
    public error: string
    private _value: T;

     private constructor(isSucess:boolean, error?:string, value?:T){
        if(isSucess && error){
            throw new Error("InvalidOperatino: A result cannot be sucessufull and coantain an error")
        }
        if(!isSucess && !error){
            throw new Error("InvalidOperation:  A failing result needs to contain an error message")
        }

        this.isSuccess= isSucess;
        this.error= error;
        this._value= value

        Object.freeze(this);
     }

     public getValue(): T{
        if(!this.isSuccess){
            throw new Error("cant retrieve the value from a failed result.")
        }
        return this._value;
     }

    public static ok<U>(value?:U): Result<U>{
        return new Result<U>(true, null, value)
    }

    public static fail<U>(error:string):Result<any>{
        return new Result<U>(false, error)
    }

    public static combine(results: Result<any>[]): Result<any>{

          for(let result of results){
            if(result.isFailure)  return result
          }
          return Result.ok<any>()
    }
}