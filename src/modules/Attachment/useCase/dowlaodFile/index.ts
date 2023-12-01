import { DownloadFileController } from "./dowloadFileController";
import { DownloadFileUseCase } from "./dowloadFileUseCase";

const dowloadFileUseCase = new DownloadFileUseCase();
export const  downloadFileController = new DownloadFileController(dowloadFileUseCase)