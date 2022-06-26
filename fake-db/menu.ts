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

export let searchMenu: _MenuItemList = {
   type: "search",
   items: []
}

export let settingsMenu: _MenuItemList = {
   type: "settings",
   items: []
}

const loadUsers = Cookie.get("users")
const loadRepos = Cookie.get("repos")
const loadSearch = Cookie.get("search")
const loadSettings = Cookie.get("settings")

if (loadSettings) {
   settingsMenu = {
      type: "settings",
      items: JSON.parse(loadSettings)
   }
} else {
   settingsMenu = {
      type: settingsMenu.type,
      items: [
         {
            "id": 8678678678,
            "name": "auth",
            "link": "/settings/auth"
         },
         // {
         //    "id": 324343654645,
         //    "name": "users",
         //    "link": "/search/users"
         // }
      ]
   }
}

if (loadSearch) {
   searchMenu = {
      type: "search",
      items: JSON.parse(loadSearch)
   }
} else {
   searchMenu = {
      type: searchMenu.type,
      items: [
         {
            "id": 5345345,
            "name": "repos",
            "link": "/search/repos"
         },
         {
            "id": 867867867,
            "name": "users",
            "link": "/search/users"
         }
      ]
   }
}


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