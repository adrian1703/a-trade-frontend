import {map, OperatorFunction} from 'rxjs';

export type ApiError = {
  code: number;
  message: string;
  details?: unknown;
};

export type ApiResult<T> =
  | { ok: true; data: T }
  | { ok: false; error: ApiError };

const defaultToApiError = (err: unknown): ApiError => ({
  code   : 999,
  message: err instanceof Error ? err.message : 'Unknown error',
  details: err,
});

export function toApiResult<T>(): OperatorFunction<T, ApiResult<T>> {
  return map((data) => ({ok: true as const, data: data} satisfies ApiResult<T>));
}

export function toApiResultError<T>(): OperatorFunction<ApiError, ApiResult<T>> {
  return map((data) => ({ok: false as const, error: data} satisfies ApiResult<T>));
}

