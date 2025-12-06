export interface AuthAPIResponse {
  message: string;
  token?: string;
  code?: number;
  info?: string;
  user?: {
    username?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    role?: string;
    isVerified?: boolean;
    _id?: string;
    createdAt?: string;
    phone?: string;
  };
}
