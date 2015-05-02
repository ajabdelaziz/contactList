console.log("router loaded")

var routes = {
    "/home": home,
    "/categories": categories,
    "categories/saved": savedCategory,
    "categories/added": addCategory,
    "categories/deleted": deleteCategory
    // "/add%20categories": addCategory,
    // "/add%20contact": books,
    // "/about%20AJ": books,
}

var router = Router(routes);

router.init();
