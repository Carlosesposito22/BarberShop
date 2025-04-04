export interface ISnackbarManagerService {

    show(massage: string, action?: string, duration?: number): void;
}