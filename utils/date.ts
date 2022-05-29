export function localDate(date: string | Date): Date | string {
   return new Date(date).toLocaleDateString()
}