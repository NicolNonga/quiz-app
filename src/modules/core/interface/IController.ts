export interface IController<IResquest, IResponse>{
    handle(reques: IResquest, response: IResponse): Promise <IResponse> 
}