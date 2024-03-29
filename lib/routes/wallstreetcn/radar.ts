export default {
    'wallstreetcn.com': {
        _name: '华尔街见闻',
        '.': [
            {
                title: '资讯',
                docs: 'https://docs.rsshub.app/routes/traditional-media#hua-er-jie-jian-wen-zi-xun',
                source: ['/news/:category', '/'],
                target: '/wallstreetcn/news/:category?',
            },
            {
                title: '实时快讯',
                docs: 'https://docs.rsshub.app/routes/traditional-media#hua-er-jie-jian-wen-shi-shi-kuai-xun',
                source: ['/live/:category', '/'],
                target: '/wallstreetcn/live/:category?',
            },
            {
                title: '最热文章',
                docs: 'https://docs.rsshub.app/routes/traditional-media#hua-er-jie-jian-wen-zui-re-wen-zhang',
                source: ['/'],
                target: '/wallstreetcn/hot/:period?',
            },
        ],
    },
};
