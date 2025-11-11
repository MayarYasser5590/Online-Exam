import {environment} from '../../../../../src/environments/environment'

export class AuthEndPoint{
    static readonly signUp = `${environment.baseUrl}/auth/signup`
    static readonly signIn = `${environment.baseUrl}/auth/signin`
    static readonly changePassword = `${environment.baseUrl}/auth/changePassword`
    static readonly deleteMyAccount = `${environment.baseUrl}/auth/deleteMe`
    static readonly editProfile = `${environment.baseUrl}/auth/editProfile`
    static readonly logOut = `${environment.baseUrl}/auth/logout`
    static readonly getLoggedUserInfo = `${environment.baseUrl}/auth/profileData`
    static readonly forgotPassword = `${environment.baseUrl}/auth/forgotPassword`
    static readonly verifyResetCode = `${environment.baseUrl}/auth/verifyResetCode`
    static readonly resetPassword = `${environment.baseUrl}/auth/resetPassword`
}