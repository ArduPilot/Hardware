define(["require","exports","tslib","react","modules/clean/react/comments2/data/actions","modules/clean/react/comments2/actions_adapters/spectrum_document","modules/clean/react/comments2/data/sidebar_watcher"],function(e,t,n,i,r,s,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i=n.__importDefault(i);var a=(function(e){function t(){var t,n=null!==e&&e.apply(this,arguments)||this;return n.onCommentsVisible=function(){return n.props.dispatch(r.Actions.trackSidebarCommentsVisibility(!0))},n.onCommentsHidden=function(){var e=n.props,t=e.dispatch,i=e.editorIsEmpty,o=e.stream;t(r.Actions.trackSidebarCommentsVisibility(!1)),i&&s.clearPendingNumberedAnnotation(t,o,!0)},n.sideChannelListenerMap=(t={},t[o.COMMENTS_VISIBLE_SIGNAL]=n.onCommentsVisible,t[o.COMMENTS_HIDDEN_SIGNAL]=n.onCommentsHidden,t),n}return n.__extends(t,e),t.prototype.componentDidMount=function(){for(var e=0,t=Object.keys(this.sideChannelListenerMap);e<t.length;e++){var n=t[e];o.sideChannelEventEmitter.addListener(n,this.sideChannelListenerMap[n])}},t.prototype.componentWillUnmount=function(){for(var e=0,t=Object.keys(this.sideChannelListenerMap);e<t.length;e++){var n=t[e];o.sideChannelEventEmitter.removeListener(n,this.sideChannelListenerMap[n])}},t.prototype.render=function(){return null},t})(i.default.Component);t.SidebarListener=a});
//# sourceMappingURL=sidebar_listener.min.js-vfltiidPF.map