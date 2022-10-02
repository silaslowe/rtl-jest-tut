const mockRepsonse = {
    data: {
        results: [
            {
                name: {
                    first: 'Silas',
                    last: 'Lowe'
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/women/35.jpg"
                },
                login: {
                    username: "Tom"
                }
            }
        ]
    }
}

export default {
    get: jest.fn().mockResolvedValue(mockRepsonse)
}