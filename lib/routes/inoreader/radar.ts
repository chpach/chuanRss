export default {
    'inoreader.com': {
        _name: 'Inoreader',
        '.': [
            {
                title: 'HTML Clip',
                docs: 'https://docs.rsshub.app/routes/reading#inoreader',
                source: ['/stream/user/:user/tag/:tag/*'],
                target: (params, url) => {
                    const origin = new URL(url);
                    const limit = origin.searchParams.get('n');
                    return `/inoreader/html_clip/${params.user}/${params.tag}` + (limit ? `?limit=${limit}` : '');
                },
            },
            {
                title: 'RSS',
                docs: 'https://docs.rsshub.app/routes/reading#inoreader',
                source: ['/stream/user/:user/tag/:tag'],
                target: (params) => `/inoreader/rss/${params.user}/${params.tag}`,
            },
        ],
    },
};
