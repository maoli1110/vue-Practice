import App from '../App'
import Hello from 'components/Hello'
import Echart from 'components/Echart'

export default [
    {
      path: '/', //顶层路由
      component: App,
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
      	component:Echart
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