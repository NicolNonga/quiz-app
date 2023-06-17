export interface IuseCase<IRequest, IResponse>{

    execute(request?:IRequest, body?:IRequest| any): Promise<IResponse> | IResponse
}