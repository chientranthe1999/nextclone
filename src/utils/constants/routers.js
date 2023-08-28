import {
    HomeOutlined,
    PhoneOutlined,
    ContainerOutlined
} from '@ant-design/icons';
// import PricingPage from "../../pages/landingPage/pricingPage/PricingPage";
// import Guide from "../../pages/landingPage/guide/Guide";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    LANDING_PAGE: [
        {
            name: 'HOME_PAGE',
            path: '/',
            element: 'HomePage',
            label: 'HOMEPAGE',
            onMenu: true,
            icon: <HomeOutlined/>
        },
        {
            name: 'NEWS_PAGE',
            path: '/news',
            element: 'NewsPage',
            label: 'LABEL_NEWS',
            onMenu: true,
            icon: <ContainerOutlined/>
        },
        // {
        //     name: 'PRICING_PAGE',
        //     path: '/pricing-page',
        //     element: 'PricingPage',
        //     label: 'PRICE_LIST',
        //     onMenu: true,

        // },
        {
            name: 'CONTACT_PAGE',
            path: '/contact-page',
            element: 'ContactPage',
            label: 'CONTACT',
            onMenu: true,
            icon: <PhoneOutlined/>
        },
        {
            name: 'VIEW_NEWS_DETAIL',
            path: '/view-news-detail',
            element: 'ViewNewsDetail',
            icon: <ContainerOutlined/>,
            onMenu: false,

        },
        {
            name: 'NEWS_DETAIL',
            path: '/news/:slug/:locale',
            element: 'ViewNewsDetail',
            onMenu: false,
        },
        // {
        //     name: 'GUIDES',
        //     path: '/guides',
        //     element: 'Guide',
        //     label: 'LABEL_GUIDE',
        //     onMenu: true,
        //     icon: <ContainerOutlined/>
        // },
        {
            name: 'GUIDE_DETAIL',
            path: '/guides/:slug/:locale',
            element: 'ViewNewsDetail',
            onMenu: false,
        },
    ],

    AUTH_PAGE: [
        {
            name: 'CHAIN',
            path: '/chain',
            element: 'Chain',
        },
        {
            name: 'PROFILE',
            path: '/profile',
            element: 'Profile',
        },
        {
            name: 'SHOP',
            path: '/shop',
            element: 'Shop',
        },
        {
            name: 'ACCOUNT',
            path: '/account',
            element: 'SystemAccount',
        },
    ]
}