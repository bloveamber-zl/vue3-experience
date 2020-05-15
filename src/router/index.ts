import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
// @ts-ignore
// 首页
const Index = () => import(/* webpackChunkName: "index" */ '@/views/index/Index');
// 今晚吃啥
// @ts-ignore
const Dinner = () => import(/* webpackChunkName: "index" */ '@/views/Dinner');
// 意见
// @ts-ignore
const Opinion = () => import(/* webpackChunkName: "index" */ '@/views/Opinion');
// 闲聊
// @ts-ignore
const Talk = () => import(/* webpackChunkName: "index" */ '@/views/Talk');
// 关于我们
// @ts-ignore
const About = () => import(/* webpackChunkName: "index" */ '@/views/About');

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
	{
		path: '/',
		name: 'Index',
		component: Index
	},
	{
		path: '/dinner',
		name: 'Dinner',
		component: Dinner
	},
	{
		path: '/opinion',
		name: 'Opinion',
		component: Opinion
	},
	{
		path: '/talk',
		name: 'Talk',
		component: Talk
	},
	{
		path: '/about',
		name: 'About',
		component: About
	},
	{
		path: '*',
		name: 'Index',
		component: Index
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
