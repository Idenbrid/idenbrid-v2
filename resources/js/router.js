import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter)
import Meta from "vue-meta";
Vue.use(Meta)
import Home from './components/pages/Home.vue'
import Member from './components/pages/Member.vue'
import Service from './components/pages/Service.vue'
import Idenspire from './components/pages/services/Idenspire.vue'
import Ses from './components/pages/services/Ses.vue'
import Work from './components/pages/Work.vue'
import Partnerships from './components/pages/Partnerships.vue'
import SystemApplication from './components/pages/expertise/SystemApplicationDevelopment.vue'
import MobileAppDevelopment from './components/pages/expertise/MobileAppDevelopment.vue'
import WebCreativeDigitalmarketing from './components/pages/expertise/WebCreativeDigitalmarketing.vue'
import WebDesignUIUXdesigning from './components/pages/expertise/WebDesignUIUXdesigning.vue'
import About from './components/pages/About.vue'
import Blog from './components/pages/Blog.vue'
import AboutCompany from './components/pages/AboutCompany.vue'
import Policy from './components/pages/Policy.vue'
import DigitalAssets from './components/pages/Digital-Assets.vue'
import Faq from './components/pages/Faq.vue'
import Contact from './components/pages/Contact-Us.vue'
import BlogDetail from './components/pages/blogs/BlogDetail.vue'
import WorkDetail from './components/pages/works/WorkDetail.vue'
import PrivacyPolicy from './components/pages/PrivacyPolicy.vue'
import News from './components/pages/News.vue'
import NewsDetail from './components/pages/news/NewsDetail.vue'
import downloadform from './components/pages/DownloadForm.vue'
import Branding from './components/pages/Branding.vue'
import Recruit from './components/pages/Recruit.vue'
import Message from './components/pages/Message.vue'
import Movies from './components/pages/Movies.vue'
import Access from './components/pages/Access.vue'
import Office from './components/pages/Office.vue'
import GetStarted from './components/pages/GetStarted.vue'


const routes = [
    // Home
    {
        path: '/',
        component: Home
    },
    // Service
    {
        path: '/solutions/:string?/',
        component: Service
    },

    {
        path: '/idenspire/:string?/',
        component: Idenspire
    },
    {
        path: '/doc/:string?/',
        component: downloadform
    },
    {
        path: '/business/:string?/',
        component: Recruit
    },
    {
        path: '/quote/',
        component: GetStarted
    },
    {
        path: '/engineerstyle/:string?/',
        component: Ses
    },
    {
        path: '/studiodevelopmenthub/:string?/',
        component: Branding
    },
    {
        path: '/about',
        component: AboutCompany
    },
    //Access
    {
        path: '/company/',
        component: Access
    },
    //Movies
    {
        path: '/video/',
        component: Movies
    },
    // work
    {
        path: '/works/',
        component: Work
    },
    //Message
    {
        path: '/message/',
        component: Message
    },
    // onlinedevelopmenthub
    {
        path: '/onlinedevelopmenthub/:string?/',
        component: Partnerships
    },
    {
        path: '/development/:string?/',
        component: SystemApplication
    },
    {
        path: '/mobileapp/:string?/',
        component: MobileAppDevelopment
    },
    {
        path: '/webitconsulting/:string?/',
        component: WebCreativeDigitalmarketing
    },
    {
        path: '/uiuxdesign/:string?/',
        component: WebDesignUIUXdesigning
    },
    //About
    {
        path: '/about/:string?/',
        component: About
    },

    //digitalasset
    {
        path: '/digitalasset/',
        component: DigitalAssets
    },
    //Faq
    {
        path: '/faq/',
        component: Faq
    },
    //Office
    {
        path: '/office/',
        component: Office
    },
    //Faq
    {
        path: '/privacypolicy/',
        component: PrivacyPolicy
    },
    //Contact
    {
        path: '/contact/',
        component: Contact
    },
    //Blog
    {
        path: '/blog/',
        component: Blog
    },
    //Policy
    {
        path: '/policy/',
        component: Policy
    },
    //News
    {
        path: '/news/',
        component: News
    },

    //post blod detail
    {
        path: '/news/detail/:id/',
        component: NewsDetail
    },
    //post sitemap
    {
        path: '/blog/detail/:id/',
        component: BlogDetail
    },


    //work
    {
        path: '/work/detail/:id/',
        component: WorkDetail
    },
    {
        path: '/member',
        component: Member
    },
];
export default new VueRouter({
    routes,
    mode: 'history',
    scrollBehavior() {
        document.getElementById('app').scrollIntoView({
            behavior: 'smooth'
        });
    }

})