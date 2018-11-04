
class RoutesMapping {
  _routes = [
    { path: '/', name: 'Home' },
    { path: '/http-status', exact:true, name: 'httpstatus'},
  ];

  getRoutes(){
    const routesMap = {};
    this._routes.forEach(function(route){
        let {path, name, exact = false} = route;
        routesMap[name.toUpperCase()] = { path, name, exact};
    });
    return routesMap;
  }

  /* for future usage */

  // modifyRoutes(routes){
  //   this._routes = routes;
  // }

  // addRoute(route){
  //   this._routes.push(route);
  // }

}


export default new RoutesMapping();
export { RoutesMapping };