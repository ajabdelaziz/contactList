console.log("loaded")

var routes = {
    "/home": home,
    "/categories": categories,
    "categories/saved": saved,
    "categories/added": addCategory
    // "/add%20categories": addCategory,
    // "/add%20contact": books,
    // "/about%20AJ": books,
}

var router = Router(routes);

router.init();
