import HomeController from './controller/home-controller';
import UserController from './controller/User'
import PostController from './controller/Post';
export default [
  {
    path: '/test',
    method: 'get',
    action: HomeController.hello
  },
  {
    path: '/createUser',
    method: 'post',
    action: UserController.createUser
  },
  {
    path: '/updateUser',
    method: 'get',
    action: UserController.updateUser
  },
  {
    path: '/getUserInfo',
    method: 'get',
    action: UserController.getUserInfo
  },
  {
    path: '/login',
    method: 'post',
    action: UserController.login
  },

  {
    path: '/createPost',
    method: 'post',
    action: PostController.createPost
  },
  {
    path: '/getPosts',
    method: 'get',
    action: PostController.getPosts
  }
];
