import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(value: number, currency: string = '€'): string {
  return `${currency}${value.toLocaleString('en-US')}`;
}

export function formatPercentage(value: number): string {
  return `${value}%`;
}
