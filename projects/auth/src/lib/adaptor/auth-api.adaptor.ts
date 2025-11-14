import { Injectable } from '@angular/core';
import { Adaptor } from '../interfaces/adaptor';

@Injectable({
  providedIn: 'root',
})
export class AuthAPIAdaptorService implements Adaptor {
  adapt(data:any){
    return {
    message : data?.message,
    token : data?.token,
    code : data?.code,
    info : data?.info,
    username : data?.user?.username,
    firstName : data?.user?.firstName,
    lastName : data?.user?.lastName,
    email : data?.user?.email,
    password : data?.user?.password,
    phone : data?.user?.phone,
    role : data?.user?.role,
    isVerified : data?.user?.isVerified,
    id : data?.user?._id,
    createdAt : data?.user?.createdAt,
    oldPassword : data?.user?.rePassword,
    rePassword : data?.user?.rePassword,
    }
  }
}
