export interface UserAction {
    execute(user: string, callback: () => void): void
}