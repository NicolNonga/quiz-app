 interface ICrypt{
    crypt(value: string, salt: number):Promise<string>
}

export {ICrypt}