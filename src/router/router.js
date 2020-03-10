import Vue from 'vue'
import vueRouter from 'vue-router'
import index from '../conponents/mainrouter/index.vue'
import shouye from '../conponents/routerpage/shouye.vue'
import fujin from '../conponents/routerpage/fujin.vue'
import shipin from '../conponents/routerpage/shipin.vue'
import news from '../conponents/routerpage/news.vue'
import my from '../conponents/routerpage/my.vue'
import sousuo from '../conponents/mainrouter/sousuo.vue'
import meishi from '../conponents/children/rpage/meishi.vue'
import jiehun from '../conponents/children/rpage/jiehun.vue'
import xiuxian from '../conponents/children/rpage/xiuxian.vue'
import qinzi from '../conponents/children/rpage/qinzi.vue'
import shuishang from '../conponents/children/rpage/youleyuan.vue'
import yundong from '../conponents/children/rpage/yundong.vue'
import jingxuan from '../conponents/children/fenleirouter/jingxuan.vue'
import dianying from '../conponents/children/fenleirouter/dianying.vue'
import dianinfo from '../conponents/children/dianinfo/dianinfo.vue'
import zhifu from '../conponents/children/zhifu/zhifu.vue'
import tianqi from '../conponents/mainrouter/tianqiyubao.vue'


let router=new vueRouter({
    mode:"history",
    routes:[{
        path:"/",
        name:"index",
        component:index,
        children:[{
            path:"/",
            name:"shouye",
            component:shouye
        },
        {
            path:"/fujin",
            name:"fujin",
            component:fujin
        },
        {
            path:"/shipin",
            name:"shipin",
            component:shipin
        },
        {
            path:"/news",
            name:"news",
            component:news
        },
        {
            path:"/my",
            name:"my",
            component:my
        }],
       
    },
    {
         path:"/sousuo",
         name:"sousuo",
         component:sousuo   
    },
    {
        path:"/meishi",
        name:"meishi",
        component:meishi   
},{
    path:"/jiehun",
    name:"jiehun",
    component:jiehun   
},{
    path:"/xiuxian",
    name:"xiuxian",
    component:xiuxian   
},{
    path:"/qinzi",
    name:"qinzi",
    component:qinzi   
},{
    path:"/shuishang",
    name:"shuishang",
    component:shuishang   
},{
    path:"/yundong",
    name:"yundong",
    component:yundong   
},{
    path:"/jingxuan",
    name:"jingxuan",
    component:jingxuan   
},{
    path:"/dianying",
    name:"dianying",
    component:dianying   
},{
    path:"/dianinfo",
    name:"dianinfo",
    component:dianinfo   
},{
    path:"/zhifu",
    name:"zhifu",
    component:zhifu   
},{
     path:"/tianqi",
     name:"tianqi",
     component:tianqi   
 }
]
})
Vue.use(vueRouter);
export default router;