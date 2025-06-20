import { Dispatch, SetStateAction } from "react";

export interface NavItemsProps {
  className?: string;
}

export interface MobileNavProps {
  className?: string;
}

export interface ButtonProps {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  children: React.ReactNode;
}

export interface EventFormProps {
  userId: string;
  type?: "crear" | "actualizar";
}

export interface DropdownProps {
  value: string;
  onChangeHandler: (value: string) => void;
}

export interface FileUploaderProps {
  onFieldChange: (value: string) => void;
  imageUrl: string;
  setFiles: Dispatch<SetStateAction<File[]>>;
}
