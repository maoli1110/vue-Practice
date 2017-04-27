import App from '../App'
import Hello from 'components/Hello'
import SideBar from 'components/sidebar'

export default [
    {
      path: '/', //顶层路由
      component: App,
      children:[
      {
      	path:'',
      	redirect:'/projectManage',
      },
      {
      	path:'/projectManage',
      	component:Hello,
            children:[
            {
                  path:'p1',
                  component:SideBar
            },{
                  path:'p2',
                  component:SideBar
            },{
                  path:'p3',
                  component:SideBar
            }]
      },
      {
      	path:'/changeManage',
      	component:Hello
      },
      {
      	path:'/qualityEvaluation',
      	component:Hello
      },
      {
      	path:'/measurePay',
      	component:Hello
      },
      {
            path:'/statisAnalysis',
            component:Hello
      },
      {
      	path:'/login',
      	component:Hello
      }
      ]
    }
]