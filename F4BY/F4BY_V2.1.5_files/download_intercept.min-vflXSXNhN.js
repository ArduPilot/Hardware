define(["require","exports","tslib","react","modules/core/browser","modules/clean/react/extensions/intercepts","modules/clean/react/modal"],function(e,t,n,o,i,r,a){"use strict";function c(t,c,d,l){return n.__awaiter(this,void 0,void 0,function(){var s,p,u,_,f,m,w,g,h,I,v,x,P,F;return n.__generator(this,function(b){switch(b.label){case 0:return"ON"!==t.featureFlags.expDownloadIntercept?[2]:(s=i.get_pathname(),p=new Promise(function(t,n){e(["modules/clean/react/app_actions/apis"],t,n)}).then(n.__importStar),u=new Promise(function(t,n){e(["modules/clean/react/extensions/tooltips"],t,n)}).then(n.__importStar),_=new Promise(function(t,n){e(["modules/clean/react/app_actions/redirect"],t,n)}).then(n.__importStar),[4,Promise.all([p,u,_])]);case 1:return f=b.sent(),m=f[0],w=m.getTooltipHistory,g=m.markTooltipViewed,h=f[1].allowedTooltipsForConfig,I=f[2].redirectToAction,[4,w(c.id,["open_with_edu","split_share_edu","download_intercept_pdf","download_intercept_image"])];case 2:return v=b.sent(),x=h(t,d),P=x.find(function(e){return void 0!==v[e]&&!v[e]}),i.get_pathname()!==s||"download_intercept_pdf"!==P&&"download_intercept_image"!==P||("download_intercept_pdf"===P?a.Modal.showInstance(o.default.createElement(r.InterceptPdf,{acceptFunc:l,trackingId:"extensions-download-intercept",type:"download"})):(F=function(){I(c,"Rli7GvzEtONf07vgdIOG1A","Pixlr X",t.fileId)},a.Modal.showInstance(o.default.createElement(r.InterceptImage,{acceptFunc:F,trackingId:"extensions-download-intercept",type:"download"}))),g(c.id,P)),[2]}})})}Object.defineProperty(t,"__esModule",{value:!0}),o=n.__importDefault(o),t.onDownloadFile=c});
//# sourceMappingURL=download_intercept.min.js-vflrxaMlb.map