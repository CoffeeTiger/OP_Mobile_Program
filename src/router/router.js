import {
	createRouter,
	createWebHistory
} from "vue-router";


const routes = [
{
	path: '/',
	name: 'home',
	meta:{index:0, showHeader:0, showFooter:1, login:false},
	component: () => import('@/views/home/home.vue'),
	/* children: [{
		path: '/home',
		name: 'home',
		component: () => import('@/views/home/home.vue'),
	}] */
}, {
	path: '/nfts',
	name: 'nfts',
	meta:{index:0, showHeader:0, showFooter:1, login:false},
	component: () => import('@/views/nfts/nfts.vue'),
}, {
	path: '/stake',
	name: 'stake',
	meta:{index:0, showHeader:0, showFooter:1, login:false},
	component: () => import('@/views/stake/stake.vue'),
}, {
	path: '/bond',
	name: 'bond',
	meta:{index:0, showHeader:0, showFooter:1, login:false},
	component: () => import('@/views/bond/bond.vue'),
}, {
	path: '/profile',
	name: 'profile',
	meta:{index:0, showHeader:0, showFooter:1, login:false},
	component: () => import('@/views/profile/profile.vue'),
}, {
	path: '/test',
	name: 'test',
	meta:{index:1, showHeader:0, showFooter:0, login:false},
	component: () => import('@/views/test/test.vue'),
}, {
	path: '/:pathMatch(.*)*',
	name: 'NotFound',
	meta:{index:2, showHeader:0, showFooter:0, login:false},
	component: () => import('@/views/error.vue')
}, ]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

router.beforeEach((to, from, next) => {
	next();
})
export default router

/*
* meta : 
* index: 0/1/2/3
* showHeader 0/1
* showFooter 0/1
* login 0/1
*/