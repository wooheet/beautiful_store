export const Config = {
    KAKAO_URL: () => {
        switch (process.env.REACT_APP_KAKAOMAP_API_URL) {
            case 'development':
                return "//dapi.kakao.com/v2/maps/sdk.js?appkey=f05185c4ebd43d436b62d08e56e57e60";
            case 'local':
                return "//dapi.kakao.com/v2/maps/sdk.js?appkey=f05185c4ebd43d436b62d08e56e57e60";
            default:
                return "//dapi.kakao.com/v2/maps/sdk.js?appkey=f05185c4ebd43d436b62d08e56e57e60";
        }
    },
    APOLLO: () => {
        switch (process.env.REACT_APP_APOLLO_URL) {
            case 'development':
                return "http://localhost:4000";
            case 'local':
                return "http://localhost:4000";
            default:
                return "http://localhost:4000";
        }
    },
};
