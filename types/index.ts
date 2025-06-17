export * from './database';
export * from './props';
export * from './api'

// Common utility types
export type SearchParamProps = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};