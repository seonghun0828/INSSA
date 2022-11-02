export interface JoinInputsType {
  [key: string]: string;
  email: string;
  password: string;
  name: string;
  student_number: string;
}

export interface SuccessLoginType {
  accessToken: string;
  refreshToken: string;
}
