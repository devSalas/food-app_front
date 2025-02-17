export interface ProductI {
  id: number;
  createdAt: string;
  updatedAt: string;
  name: string;
  image: string;
  price: number;
  category_id: number;
  ingredients: string;
  description: string;
}

export interface CategoryI {
  id: number;
  name: string;
  image: string;
}

export interface UserI {
  id: number;
  name: string;
  image: string;
  email: string;
  password: string;
  address: string;
}

export interface ClientI {
  id: number;
  name: string;
  image: string;
  address: string;
  phone: string;
  email: string;
}

export interface RolI {
  id: number;
  name: string;
}

export interface OrderI {
  id: number;
  client_id: string;
  date: string;
  total: number;
}

export interface NotificationI {
  title: string;
  description: string;
  id: number;
  isSeen: boolean;
}

export interface dataNotificationI {
  id: number;
  cleint_id: number;
  notificaiton_id: number;
  isSeen: boolean;
  notification: NotificationI;
}

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  accessToken: string;
  rol:string
  // Agrega más campos según tu API
}
