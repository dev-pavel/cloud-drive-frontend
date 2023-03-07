export interface ApiResponse<R = any> {
    success: boolean,
    result: R
    error: string
}

export interface ITokens {
    accessToken: string
    refreshToken: string
}

export interface IUser {
    email: string
    password: string
    firstName: string
    lastName: string
    registrationDate: Date
    memoryLimit: number
    usedMemory: number
    _id: string
}