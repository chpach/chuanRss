export default {
    'danjuanapp.com': {
        _name: '雪球',
        '.': [
            {
                title: '蛋卷基金净值更新',
                docs: 'https://docs.rsshub.app/routes/finance#xue-qiu',
                source: ['/funding/:id'],
                target: '/xueqiu/funding/:id',
            },
        ],
    },
    'xueqiu.com': {
        _name: '雪球',
        '.': [
            {
                title: '今日话题',
                docs: 'https://docs.rsshub.app/routes/finance#xue-qiu',
                source: ['/today'],
                target: '/xueqiu/today',
            },
            {
                title: '用户动态',
                docs: 'https://docs.rsshub.app/routes/finance#xue-qiu',
                source: ['/u/:id'],
                target: '/xueqiu/user/:id',
            },
            {
                title: '用户收藏动态',
                docs: 'https://docs.rsshub.app/routes/finance#xue-qiu',
                source: ['/u/:id'],
                target: '/xueqiu/favorite/:id',
            },
            {
                title: '用户自选动态',
                docs: 'https://docs.rsshub.app/routes/finance#xue-qiu',
                source: ['/u/:id'],
                target: '/xueqiu/user_stock/:id',
            },
            {
                title: '用户专栏',
                docs: 'https://docs.rsshub.app/routes/finance#xue-qiu',
                source: ['/:id/column'],
                target: '/xueqiu/column/:id',
            },
            {
                title: '组合最新调仓信息',
                docs: 'https://docs.rsshub.app/routes/finance#xue-qiu',
                source: ['/P/:id', '/p/:id'],
                target: '/xueqiu/snb/:id',
            },
            {
                title: '股票信息',
                docs: 'https://docs.rsshub.app/routes/finance#xue-qiu',
                source: ['/S/:id', '/s/:id'],
                target: '/xueqiu/stock_info/:id',
            },
            {
                title: '股票评论',
                docs: 'https://docs.rsshub.app/routes/finance#xue-qiu',
                source: ['/S/:id'],
                target: '/xueqiu/stock_comments/:id',
            },
            {
                title: '热帖',
                docs: 'https://docs.rsshub.app/routes/finance#xue-qiu',
                source: ['/'],
                target: '/xueqiu/hots',
            },
        ],
    },
};
