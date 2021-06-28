interface LoginArgs {
  email: string;
  password: string;
}

interface RegisterArgs extends LoginArgs {
  password: string;
}

export { RegisterArgs, LoginArgs };
