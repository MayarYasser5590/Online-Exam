export interface SignInRequest {
  email: string | null;
  password: string | null;
}

export interface SignUpRequest {
  firstName: string | null;
  lastName: string | null;
  username: string | null;
  email: string | null;
  phone: string | null;
  password: string | null;
  rePassword: string | null;
}

export interface ChangePasswordRequest {
  oldPassword: string | null;
  password: string | null;
  rePassword: string | null;
}

export interface EditProfileRequest {
  lastName?: string | null;
}

export interface ForgotPasswordRequest {
  email: string | null;
}

export interface VerifyResetCodeRequest {
  resetCode: string | null;
}

export interface ResetPasswordRequest {
  email : string | null;
  newPassword : string | null;
}
