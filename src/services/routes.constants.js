export const AUTH_ROUTES = {
  REGISTER: '/register',
  LOGIN: '/login',
  ADMIN_LOGIN: '/admin/login',
  USER: '/user',
  ADMIN: '/admin',
  NETWORK: '/network',
};

export const PAY_ROUTES = {
  PAY: '/pay',
  VERIFY: '/pay/verify',
};

export const VIDEO_ROUTES = {
  POST:'/videos',
  DELETE: (id)=> `/videos/${id}`,
  GET:'/admin/videos',
  PUT: (id)=>`/videos/${id}`
}

export const USER_ROUTES = {
  GET:'/videos'
}