console.log("router loaded")

var routes = {
    "/home": home,
    "/categories": categories,
    "/categories/saved": savedCategory,
    "/categories/added": addCategory,
    "/categories/deleted": deleteCategory,
    "/contacts": contacts,
    "/contacts/saved": savedContact,
    "/contacts/deleted": deleteContact,
    "/contacts/added": addContact,
    "/aboutAJ": aboutMe
}

var router = Router(routes);

router.init();
