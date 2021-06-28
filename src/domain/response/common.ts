interface Success<T> {
  data: T;
  error: null;
  code: number;
  message: string;
}

export { Success };
