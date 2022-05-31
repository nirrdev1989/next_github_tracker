export interface _MenuItem {
   id: number | string
   name: string
   icon?: JSX.Element
}

export interface _MenuItemList {
   type: string
   items: _MenuItem[]
}

export interface _Menu {
   [key: string]: _MenuItemList
}