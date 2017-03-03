
import Hello from 'components/Hello'

export default [
    {
      path: '/', //顶层路由
      name: 'Hello',
      component: Hello,
      children:[
      {
      	path:'',
      	redirect:'/enterprise'
      },
      {
      	path:'/enterprise',
      	component:Hello
      },
      {
      	path:'/rootSetting',
      	component:Hello
      },
      {
      	path:'/projectData',
      	component:Hello
      },
      {
      	path:'/component',
      	component:Hello
      },
      {
      	path:'/login',
      	component:Hello
      }
      ]
    }
]