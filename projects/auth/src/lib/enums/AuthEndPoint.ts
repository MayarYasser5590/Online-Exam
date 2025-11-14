
export class AuthEndPoint{
    static readonly baseURL = 'https://exam.elevateegy.com/api/v1/auth';

    static readonly signUp = `${this.baseURL}/signup`
    static readonly signIn = `${this.baseURL}/signin`
    static readonly changePassword = `${this.baseURL}/changePassword`
    static readonly deleteMyAccount = `${this.baseURL}/deleteMe`
    static readonly editProfile = `${this.baseURL}/editProfile`
    static readonly logOut = `${this.baseURL}/logout`
    static readonly getLoggedUserInfo = `${this.baseURL}/profileData`
    static readonly forgotPassword = `${this.baseURL}/forgotPassword`
    static readonly verifyResetCode = `${this.baseURL}/verifyResetCode`
    static readonly resetPassword = `${this.baseURL}/resetPassword`
}