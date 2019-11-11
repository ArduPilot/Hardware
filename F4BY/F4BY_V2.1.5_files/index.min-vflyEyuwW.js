define(["require","exports","tslib","react","classnames","comments2/components/annotation_highlight_draft","comments2/components/annotation_highlight_creation_layer/utilities","comments2/components/add_annotation_highlight_button"],function(e,t,n,o,i,s,r,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o=n.__importStar(o),i=n.__importDefault(i);var c={x:-100,y:-100},l=(function(e){function t(){var t=e.apply(this,arguments)||this;return t.ref=null,t.isMouseDown=!1,t.hasSelectionChanged=!1,t.state={selectionRects:null},t.handleMouseDown=function(){t.isMouseDown=!0,t.hasSelectionChanged=!1},t.handleMouseUp=function(){t.isMouseDown&&t.hasSelectionChanged&&t.refreshSelection(),t.isMouseDown=!1},t.handleSelectionChange=function(){var e=t.props.onCursorHighlightChange;t.isMouseDown?t.hasSelectionChanged||(e(null),t.hasSelectionChanged=!0):t.refreshSelection()},t.refreshSelection=function(){var e=t.props.onCursorHighlightChange;if(t.textIsSelected){var n=r.getTextSelectionRange(),o=r.getClientRects(n),i=n.getBoundingClientRect();t.setState({selectionRects:o}),e({rangeRects:o,boundingRect:i,size:a.BUTTON_SIZE,margin:a.BUTTON_MARGIN})}else e(null)},t.addAnnotationHighlight=function(){var e=t.state.selectionRects;e&&t.props.onTextHighlightChange(e)},t.setRef=function(e){t.ref=e},t}return n.__extends(t,e),Object.defineProperty(t.prototype,"className",{get:function(){return i.default("sc-annotation-highlight-creation-layer")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"buttonPosition",{get:function(){return this.props.placement.button||c},enumerable:!0,configurable:!0}),t.prototype.textClientRectHasSize=function(e){if(e.isCollapsed)return!1;var t=e.getRangeAt(0).getBoundingClientRect();return 0!==t.width&&0!==t.height},Object.defineProperty(t.prototype,"textIsSelected",{get:function(){var e=this.ref,t=window.getSelection();if(!e||!t)return!1;var n=t.focusNode,o=t.anchorNode,i=t.toString();return!!(""!==i&&"\n"!==i&&n&&r.containsNode(e,n)&&o&&r.containsNode(e,o)&&this.textClientRectHasSize(t))},enumerable:!0,configurable:!0}),t.prototype.componentDidMount=function(){document.addEventListener("selectionchange",this.handleSelectionChange),document.addEventListener("mousedown",this.handleMouseDown),document.addEventListener("mouseup",this.handleMouseUp)},t.prototype.componentWillUnmount=function(){document.removeEventListener("selectionchange",this.handleSelectionChange),document.removeEventListener("mousedown",this.handleMouseDown),document.removeEventListener("mouseup",this.handleMouseUp)},t.prototype.onButtonMouseDown=function(e){e.stopPropagation()},t.prototype.render=function(){var e=this,t=e.buttonPosition,n=e.className,i=this.props.placement.highlight;return o.createElement("div",{ref:this.setRef,className:n},this.props.children,i&&s.renderAnnotationHighlightDraft(i),o.createElement(a.AddAnnotationHighlightButton,{position:t,isVisible:!!this.props.buttonPosition,onClick:this.addAnnotationHighlight,onMouseDown:this.onButtonMouseDown}))},t})(o.PureComponent);t.AnnotationHighlightCreationLayer=l});
//# sourceMappingURL=index.min.js-vflJ3pAWn.map