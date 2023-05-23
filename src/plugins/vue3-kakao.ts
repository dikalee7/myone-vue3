import { Kakao } from 'vue3-kakao-sdk';
interface IFkakao {
  cleanup: typeof Kakao.cleanup;
  init: typeof Kakao.init;
  isInitialized: typeof Kakao.isInitialized;
  readonly VERSION: string;
  API: {
    cleanup: typeof Kakao.API.cleanup;
    request: typeof Kakao.API.request;
  };
  Auth: {
    authorize: typeof Kakao.Auth.authorize;
    cleanup: typeof Kakao.Auth.cleanup;
    createLoginButton: typeof Kakao.Auth.createLoginButton;
    getAccessToken: typeof Kakao.Auth.getAccessToken;
    getAppKey: typeof Kakao.Auth.getAppKey;
    getRefreshToken: typeof Kakao.Auth.getRefreshToken;
    getStatusInfo: typeof Kakao.Auth.getStatusInfo;
    login: typeof Kakao.Auth.login;
    loginForm: typeof Kakao.Auth.loginForm;
    logout: typeof Kakao.Auth.logout;
    setAccessToken: typeof Kakao.Auth.setAccessToken;
    setRefreshToken: typeof Kakao.Auth.setRefreshToken;
  };
  Channel: {
    addChannel: typeof Kakao.Channel.addChannel;
    chat: typeof Kakao.Channel.chat;
    cleanup: typeof Kakao.Channel.cleanup;
    createAddChannelButton: typeof Kakao.Channel.createAddChannelButton;
    createChatButton: typeof Kakao.Channel.createChatButton;
  };
  Share: {
    cleanup: typeof Kakao.Link.cleanup;
    createCustomButton: typeof Kakao.Link.createCustomButton;
    createDefaultButton: typeof Kakao.Link.createDefaultButton;
    createScrapButton: typeof Kakao.Link.createScrapButton;
    deleteImage: typeof Kakao.Link.deleteImage;
    scrapImage: typeof Kakao.Link.scrapImage;
    sendCustom: typeof Kakao.Link.sendCustom;
    sendDefault: typeof Kakao.Link.sendDefault;
    sendScrap: typeof Kakao.Link.sendScrap;
    uploadImage: typeof Kakao.Link.uploadImage;
  };
  Navi: {
    share: typeof Kakao.Navi.share;
    start: typeof Kakao.Navi.start;
  };
  Story: {
    cleanup: typeof Kakao.Story.cleanup;
    createFollowButton: typeof Kakao.Story.createFollowButton;
    createShareButton: typeof Kakao.Story.createShareButton;
    open: typeof Kakao.Story.open;
    share: typeof Kakao.Story.share;
  };
}

// const kakao = useKakao();

export { IFkakao };
