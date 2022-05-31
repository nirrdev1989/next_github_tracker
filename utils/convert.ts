export function convertArrayToObject<T>(array: T[], key: string | number): { [key: string | number]: T } {
   const object = {}

   for (let i = 0; i < array.length; i++) {
      object[array[i][key]] = array[i]
   }

   return object
}