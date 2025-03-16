export interface Photo {
  id: string;
  alt_description: string | null;
  urls: { small: string; regular?: string };
}

export interface ErrorProps {
  message?: string;
}

export interface LoaderProps {
  height?: string;
  width?: string;
  color?: string;
}
