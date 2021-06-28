class Response {
  public static success(value: any, message: string, code: number) {
    return {
      message,
      code: 200,
      data: value,
      error: null
    };
  }
}

export default new Response();
