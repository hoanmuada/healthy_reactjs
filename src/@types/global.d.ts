declare global {
  type Otp<T> = T | null | undefined;

  type Dict<T> = Record<string, T>;
}
