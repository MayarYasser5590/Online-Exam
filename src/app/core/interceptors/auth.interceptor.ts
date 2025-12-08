import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token');

  if (!token) {
    console.warn("⚠️ No token found");
    return next(req);
  }

  const cloned = req.clone({
    setHeaders: {
      token : token
    }
  });

  console.log("✓ Token Attached:", token);

  return next(cloned);
};
