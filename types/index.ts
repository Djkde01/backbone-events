export * from './database';
export * from './props';

// Common utility types
export type SearchParamProps = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};