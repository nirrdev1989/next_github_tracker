import Cookie from "js-cookie"
import { _MenuItem, _MenuItemList } from "../models/Menu";

export let usersMenu: _MenuItemList = {
   type: "users",
   items: []
}
export let reposMenu: _MenuItemList = {
   type: "repos",
   items: []
}

const loadUsers = Cookie.get("users")
const loadRepos = Cookie.get("repos")

if (loadRepos) {
   reposMenu = {
      type: "repos",
      items: JSON.parse(loadRepos)
   }
} else {
   reposMenu = {
      type: reposMenu.type,
      items: [
         {
            "id": 11,
            "name": "bitcoin",
            "link": "/repos/bitcoin?user=bitcoin"
         }
      ]
   }
}


if (loadUsers) {
   usersMenu = {
      type: "users",
      items: JSON.parse(loadUsers)
   }
} else {
   usersMenu = {
      type: usersMenu.type,
      items: [
         {
            "id": 1,
            "name": "nirkaufman",
            "link": "/users/nirkaufman"
         },
         {
            "id": 2,
            "name": "mschwarzmueller",
            "link": "/users/mschwarzmueller"
         },
         {
            "id": 5,
            "name": "nirrdev1989",
            "link": "/users/nirrdev1989"
         },
         {
            "id": 6,
            "name": "bitcoinjs",
            "link": "/users/bitcoinjs"
         }
      ]
   }
}