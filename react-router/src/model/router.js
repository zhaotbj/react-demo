
import Home from '../components/Home';
import User from '../components/User';

import Shop from '../components/Shop';
    import ShopList from '../components/Shop/ShopList';
    import ShopAdd from '../components/Shop/ShopAdd';
    import ShopEdit from '../components/Shop/ShopEdit';
import News from '../components/News';


let routes = [
    {
      path: "/",
      component: Home,
      exact:true
    },
    {
      path: "/shop",
      component: Shop, // 嵌套路由
      routes:[
        {
          path: "/shop/",
          component: ShopList
        },
        {
          path: "/shop/add",
          component: ShopAdd
        },
        {
          path: "/shop/edit",
          component: ShopEdit
        }
      ]
    },
    {
      path: "/user",
      component: User
    },
    {
      path: "/news",
      component: News
    }
];

export default routes;