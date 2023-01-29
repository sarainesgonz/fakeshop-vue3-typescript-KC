
export interface AuthState {
    token: string | null
    error: string | null
    credentials: Credential[]
    // credentials: unknown
}


function state() : AuthState {
    return {
        token : null,
        error: null,
        credentials : []
    }
}
export default state