(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[1],{"078/":function(e,t,n){n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return r}));const i=["AuthHomefeed","CloseupRelatedProducts","FollowingFeedGrid","RelatedPinGrid","RelatedProductsFeed","SearchItem","SearchItemPersistentOneClickSave"],r=["BaseBoardPinGrid"]},"0S8y":function(e,t,n){n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return a})),n.d(t,"b",(function(){return l}));var i=n("fAMq");const r=28;function o(e){const t={},n=e.trim();n.length>0&&(t.full_name=n);const i=n.split(/ (.+)/);return""===i[0]&&i.shift(),i.length>0&&(t.first_name=i[0]||""),i.length>1&&(t.last_name=i[1]||""),t}function s({user:e,days:t=r}){if(!e||!e.createdAt)return!1;const n=new Date(e.createdAt),o=Object(i.h)(-t,n),s=new Date;return!Object(i.g)(s,o)}function a({user:e,days:t=r}){if(!e.resurrectionInfo)return!1;const n=e.resurrectionInfo.resurrectionDate,o=new Date,s=n?new Date(n):o,a=Object(i.c)(s,t);return Object(i.g)(a,o)}function l(e){return e&&e[1000069]&&500417===e[1000069].experience_id}},"3gA6":function(e,t,n){var i=n("q1tI"),r=n.n(i),o=n("/MKj"),s=n("xAAE"),a=n("4dcN"),l=n("ajUs"),d=n("eOdZ"),c=n("gxu6"),u=n("zwad");var p={open(e,t,n,i,r){const o=Math.round(1e3*Math.random())+"",a=Math.round(1e3*Math.random())+"";c.b("offsite_"+o,a);const l={token:o+"-"+a,url:e};t?l.pin=t:n&&(l.csr=n),i&&(l.client_tracking_params=i),r&&(l.aux_data=JSON.stringify(r)),Object(s.a)("/offsite/?"+u.a.getQueryStringFromObject(l),!0)}};var h=n("n02X"),m=n("fArA"),f=n("a9a9"),y=n("/5zs"),v=n("Y8Sn"),g=n("dtw8"),E=n("pLLR"),_=n("078/");function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return O}));const T=["blocked","suspicious","porn"],w=(e,t,n,i,r)=>{const o={check_only:i,client_tracking_params:Object(l.a)(e,t),pin_id:e.id,url:n,aux_data:JSON.stringify(r)};return d.a.create("OffsiteLinkResource",o)},D=()=>{window&&window.focus(),document.activeElement&&document.activeElement.blur()};class C extends i.Component{constructor(...e){super(...e),b(this,"state",{spamCheck:null}),b(this,"spamCheckExperimentGroup",null),b(this,"mounted",!1),b(this,"shouldCheckBySurface",()=>{const{location:e,pinId:t="",surface:n}=this.props,i=Boolean(n),r=_.a.includes(n),o=e.pathname.includes(t),s=["enabled_both","enabled_closeup","employees"].includes(this.spamCheckExperimentGroup),a=["enabled_both","enabled_grids","employees"].includes(this.spamCheckExperimentGroup);return i&&!r?a:!!o&&s}),b(this,"handleSpammyDomainCheck",()=>{const{external:e,location:t,pin:n,to:i}=this.props,r=(e||u.a.isOffsiteUrl(i))&&n&&!Object(v.g)(n)&&this.shouldCheckBySurface()&&i,o=this.mounted;r&&w(n,t,i,!0).callGet({showError:!1}).then(e=>{if(!(e&&e.resource_response&&e.resource_response.error)&&o){const{message:t,redirect_status:n,url:i}=e&&e.resource_response&&e.resource_response.data,r={blocked:T.includes(n),message:t,redirectStatus:n,sanitized_url:i};this.setState({spamCheck:r})}})}),b(this,"handleExternalClickthrough",()=>{const{auxData:e,location:t,pin:n,pinId:i,to:r}=this.props,{spamCheck:o}=this.state;(null==o?void 0:o.blocked)?Object(f.b)(o):p.open(r,i,null,Object(l.a)(n,t),e)}),b(this,"handleClick",e=>{const{auxData:t,external:n,focusOnBody:i,forceOnClick:r,gaCategory:o,location:c,internalNewTab:h,onClick:m,pin:f,pinId:y,router:v,shouldShowAltLinks:g,stopPropagation:E,to:_}=this.props;o&&a.a.trackEvent(o,"click"),E&&e.stopPropagation();const b=n||u.a.isOffsiteUrl(_);(b||!e.metaKey&&!e.ctrlKey||r)&&(e.nativeEvent.preventDefault(),m&&m(e),_&&!g&&(b&&"undefined"!=typeof window&&window.Windows?function({url:e,pinId:t,pin:n,location:i,auxData:r}){const o={check_only:!0,client_tracking_params:n?Object(l.a)(n,i):void 0,pin_id:n?n.id:t,url:e,aux_data:JSON.stringify(r)};d.a.create("OffsiteLinkResource",o).callGet().then(o=>{if(o&&o.resource_response&&!o.resource_response.error){const{resource_response:e}=o,{redirect_status:t,url:n}=e.data;if(!["blocked","suspicious","porn"].includes(t)){const e=new window.Windows.Foundation.Uri(n);return void window.Windows.System.Launcher.launchUriAsync(e)}}if(n){const o=Object(l.a)(n,i);p.open(e,t,null,o,r)}else p.open(e,t)})}({url:_,pinId:y,pin:f,location:c,auxData:t}):b&&f?this.handleExternalClickthrough():b?p.open(_,y):u.a.getUrlClass(_)===u.a.UrlClass.TRUSTED_DIFFERENT_ORIGIN?Object(s.a)(_,!1):h?Object(s.a)(_,!0):v&&(v.push(_),i&&D())))})}componentDidMount(){this.mounted=!0,this.handleSpammyDomainCheck()}componentWillUnmount(){this.mounted=!1}componentDidUpdate(){const{requestContext:e}=this.props;null===this.spamCheckExperimentGroup&&Boolean(e)&&(this.spamCheckExperimentGroup=new y.a(e,"web_navigate_link_spammy_domain_check").getGroup(!0)),null===this.state.spamCheck&&this.handleSpammyDomainCheck()}render(){const{category:e,children:t,className:n,elementType:i,external:o,forceRefresh:s,noFollow:a,shouldCaptureClick:l,style:d,target:c,to:u}=this.props,p={className:n,"data-category":e,"data-force-refresh":s,href:u,[`${l?"onClickCapture":"onClick"}`]:this.handleClick,rel:o||a?"nofollow":"",style:d,target:c?"_blank":null,...null!==i?{"data-element-type":i}:{}};return r.a.createElement("a",p,t)}}const O={".HomeButton2":Object(m.compose)(Object(h.a)(".HomeButton2"),g.withRouter)(C)};t.b=Object(m.compose)(Object(o.connect)((function({location:e,pins:t},{pinId:n}){return{location:e,pin:n&&t&&t[n]}}),()=>({})),E.e,g.withRouter)(C)},"51gp":function(e,t,n){var i=n("q1tI"),r=n.n(i),o=n("sEfC"),s=n.n(o),a=n("vYDk");var l=n("BEAQ"),d=n("9pre"),c=n("U4JR"),u=n("n6mq");function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return b}));const h=[0,.25,.5,.75,.95,.97],m=[0,.5,.8,1],f={threshold:m},y={rootMargin:"-64px 0px 0px 0px",threshold:d.c},v=1e3,g=Object.freeze({LOADING:0,PLAYING:1,PAUSED:2,STALLING:3});function E(){return(new Date).getTime()}function _(e){return!!e.volume&&e.volume>0}class b extends r.a.Component{constructor(e){super(e),p(this,"handleWindowResize",()=>{if(!this.fullscreen){const e=this.getDimensions(),{height:t,width:n}=this.currentInterval;e.height!==t||e.width!==n?this.startNewInterval(e):(this.currentInterval.windowHeight=e.windowHeight,this.currentInterval.windowWidth=e.windowWidth)}}),p(this,"handlePlayheadDown",({event:e})=>{const{onPlayheadDown:t}=this.props;this.setState({seeking:!0}),t&&t({event:e})}),p(this,"handlePlayheadUp",({event:e})=>{const{onPlayheadUp:t}=this.props;this.setState({seeking:!1}),t&&t({event:e})}),p(this,"handleLoop",()=>{this.videoTime=0}),p(this,"handleTimeChange",e=>{const{seeking:t,ready:n}=this.state;if(!this.currentInterval.videoDuration)return;const i=e.time*v,r=function(e,t,n,i){if(e>t)return null;if(n<=0)return null;for(const r of i){const i=r*n;if(e<=i&&t>i)return r}return null}(this.videoTime,i,this.currentInterval.videoDuration,h);if("number"==typeof r&&this.props.playing&&!t&&n){const e=E();this.logVideoEvent(6906,{...this.currentInterval,startTime:e,endTime:e,videoStartTime:0,videoEndTime:0,quartile:Math.floor(4*r),quartilePercentValue:r})}this.videoTime=i,this.props.onTimeChange&&this.props.onTimeChange(e)}),p(this,"handleDurationChange",e=>{this.currentInterval.videoDuration=e.duration*v,this.props.onDurationChange&&this.props.onDurationChange(e)}),p(this,"handleReady",e=>{const{ready:t}=this.state;t||this.setState({ready:!0}),this.props.onReady&&this.props.onReady(e)}),p(this,"onEnded",e=>{this.logFourthQuartileEvent(),this.props.loop&&(this.startNewInterval(),this.currentInterval.videoStartTime=0),this.props.onEnded&&this.props.onEnded(e)}),p(this,"handleVisibilityChange",(e,t)=>{if(0===e.length)return;const n=e.slice(-1)[0],i=function(e){return function(e,t){for(let n=0;n<t.length;n+=1){const i=t[n],r=t[n+1];if(null==r)return i;if(i<=e&&e<r)return i}return null}(e,m)}(Number.parseFloat(n.intersectionRatio.toFixed(2)));null==i||i===this.currentInterval.viewability||this.fullscreen||(0===i?this.startNewInterval({viewability:i,playbackState:g.PAUSED}):this.startNewInterval({viewability:i}))}),p(this,"onFullscreenChange",({event:e,fullscreen:t})=>{if(t){const{height:e,width:t}=window.screen;this.startNewInterval({height:e,width:t,windowHeight:e,windowWidth:t})}else t||this.startNewInterval(this.getDimensions());this.fullscreen=t,this.props.onFullscreenChange&&this.props.onFullscreenChange({event:e,fullscreen:t})}),p(this,"handleClose",()=>{this.startNewInterval()}),p(this,"handleContextMenu",e=>{e.preventDefault()}),this.state={ready:!1,seeking:!1};const t=E();this.handleWindowResize=s()(this.handleWindowResize,1e3),this.videoWrapperRef=r.a.createRef(),this.currentInterval={videoDuration:0,startTime:t,endTime:t,videoStartTime:0,videoEndTime:0,isAudible:_(e),playbackState:this.getPlaybackState(e,this.state),quartile:-1,quartilePercentValue:0,height:null,width:null,windowHeight:null,windowWidth:null,viewability:null},this.videoTime=0,this.fullscreen=!1}componentDidMount(){this.currentInterval={...this.currentInterval,...this.getDimensions()},window.addEventListener("resize",this.handleWindowResize),window.addEventListener("beforeunload",this.handleClose)}componentDidUpdate(e,t){const n={};_(e)&&!_(this.props)?n.isAudible=!1:!_(e)&&_(this.props)&&(n.isAudible=!0);const i=this.getPlaybackState(this.props,this.state);this.getPlaybackState(e,t)!==i&&(n.playbackState=i),Object.keys(n).length>0&&this.startNewInterval(n)}componentWillUnmount(){window.removeEventListener("resize",this.handleWindowResize),window.removeEventListener("beforeunload",this.handleClose),this.startNewInterval()}getPlaybackState(e,t){return t.ready?e.playing&&!t.seeking?g.PLAYING:g.PAUSED:g.LOADING}getDimensions(){let e,t;if("object"==typeof this.videoWrapperRef&&this.videoWrapperRef.current){const n=this.videoWrapperRef.current;n.clientHeight&&n.clientWidth&&(e=n.clientHeight,t=n.clientWidth)}return{height:e,width:t,windowHeight:window.innerHeight,windowWidth:window.innerWidth}}logVideoEvent(e,t){const{contextLogData:n}=this.props,{height:i,width:r,windowHeight:o,windowWidth:s,viewability:a,...l}=t;if(null!=i&&null!=r&&null!=o&&null!=s&&null!=a){const t={...l,height:i,width:r,windowHeight:o,windowWidth:s,viewability:a};Object(c.a)(e,function(e){const{eventData:{videoEvent:{videoDuration:t,startTime:n,endTime:i,videoStartTime:r,videoEndTime:o,isAudible:s,height:a,width:l,playbackState:d,quartile:c,quartilePercentValue:u,windowHeight:p,windowWidth:h,viewability:m}},...f}=e;return{...f,eventData:{videoEventData:{videoDuration:t,time:n,endTime:i,videoTime:r,endVideoTime:o,isAudible:s,height:a,width:l,playbackState:d,quartile:c,quartilePercentValue:u,windowHeight:p,windowWidth:h,viewability:m}}}}({...n,view:this.fullscreen?108:n.view,eventData:{videoEvent:t}}))}}logFourthQuartileEvent(){const e=E();this.logVideoEvent(6906,{...this.currentInterval,startTime:e,endTime:e,videoStartTime:0,videoEndTime:0,quartile:4,quartilePercentValue:1})}startNewInterval(e){const t=E();this.logVideoEvent(6904,{...this.currentInterval,endTime:t,videoEndTime:this.videoTime}),this.currentInterval={...this.currentInterval,...e,startTime:t,videoStartTime:this.videoTime,endTime:-1,videoEndTime:-1}}render(){const{contextLogData:e,inAdsDesktopVideoExperiment:t,rootMargin:n,...i}=this.props,{seeking:o}=this.state;i.onDurationChange=this.handleDurationChange,i.onReady=this.handleReady,i.onTimeChange=this.handleTimeChange,i.onEnded=this.onEnded,i.onFullscreenChange=this.onFullscreenChange,i.onPlayheadDown=this.handlePlayheadDown,i.onPlayheadUp=this.handlePlayheadUp,i.onLoop=this.handleLoop,i.playing=!o&&this.props.playing;const s=t?y:f;return void 0!==n&&(s.rootMargin=n),r.a.createElement(a.a,{options:s,onVisibilityChange:this.handleVisibilityChange},r.a.createElement("div",{ref:this.videoWrapperRef,onContextMenu:this.handleContextMenu},r.a.createElement(l.a,i)))}}p(b,"defaultProps",u.R.defaultProps)},"9pre":function(e,t,n){n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return o}));const i=5,r="V_HLSV3_MOBILE",o=[0,.01,.02,.03,.04,.05,.06,.07,.08,.09,.1,.11,.12,.13,.14,.15,.16,.17,.18,.19,.2,.21,.22,.23,.24,.25,.26,.27,.28,.29,.3,.31,.32,.33,.34,.35,.36,.37,.38,.39,.4,.41,.42,.43,.44,.45,.46,.47,.48,.49,.5,.51,.52,.53,.54,.55,.56,.57,.58,.59,.6,.61,.62,.63,.64,.65,.66,.67,.68,.69,.7,.71,.72,.73,.74,.75,.76,.77,.78,.79,.8,.81,.82,.83,.84,.85,.86,.87,.88,.89,.9,.91,.92,.93,.94,.95,.96,.97,.98,.99,1]},"B2N+":function(e,t,n){var i=n("q1tI"),r=n.n(i),o=n("i8i4"),s=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class l extends i.Component{constructor(...e){super(...e),a(this,"state",{horizontalOffset:0,verticalOffset:0}),a(this,"calculateAndSetOffsets",(e,t,n,i)=>{const r=t/2,o=e/2;this._subjectWidth=i;const s=-((this.props.subjectWidthOverride||i)/2-r),a=-((this.props.subjectHeightOverride||n)/2-o);this.setState({horizontalOffset:s,verticalOffset:a})}),a(this,"positionSubject",()=>{const e=this._subject,t=this.props.anchor;if(!t||!e)return;const n=s.a.findDOMNode(t);if(n&&n instanceof Element){const t=n.getBoundingClientRect(),i=e.getBoundingClientRect(),{height:r,width:o}=t,{height:s,width:a}=i;this.calculateAndSetOffsets(r,o,s,a)}})}componentDidMount(){this.positionSubject()}shouldComponentUpdate(e,t){const{props:n,state:i}=this;return!(Object.keys(n).every(t=>n[t]===e[t])&&Object.keys(i).every(e=>i[e]===t[e]))}componentDidUpdate(){const e=this._subject;if(e){e.getBoundingClientRect().width!==this._subjectWidth&&this.positionSubject()}}render(){const{children:e,zIndex:t}=this.props,{horizontalOffset:n,verticalOffset:r}=this.state;return i.createElement("div",{ref:e=>{this._subject=e},style:{left:n,position:"absolute",top:r,zIndex:t}},e)}}n("17x9");var d=n("n6mq");function c(e){const{paused:t,size:n=135}=e;return i.createElement(d.c,{dangerouslySetInlineStyle:{__style:{animationIterationCount:t?0:"infinite",outline:"none",boxShadow:"none"}},display:t?"none":"block",height:n,position:"relative",width:n},i.createElement("div",{className:"PulsarNewInnerCircle"},i.createElement("div",{className:"outerCircle"})))}var u=n("XCz/");const p=136;t.a=function(e){const{anchor:t,onTouch:n,paused:i,zIndex:o}=e;return r.a.createElement(l,{anchor:t,subjectHeightOverride:p,subjectWidthOverride:p,zIndex:o},r.a.createElement(d.Q,{onTouch:({event:e})=>n(e),shape:"circle",fullWidth:!1},r.a.createElement(u.a,{name:"web_nux_new_gestalt_pulsar_animation"},({anyEnabled:e})=>e?r.a.createElement(c,{paused:i}):r.a.createElement(d.B,{paused:i}))))}},BEAQ:function(e,t,n){n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return c}));var i=n("q1tI"),r=n.n(i),o=n("PioT"),s=n("aFfM"),a=n("n6mq");function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const d=e=>{if(Array.isArray(e)){const t=e.find(e=>"video/m3u8"===e.type);return t?t.src:void 0}return RegExp("m3u8$").test(e)?e:void 0};class c extends r.a.PureComponent{constructor(e){super(e),l(this,"setVideoPlayerRef",e=>{e&&(this.videoPlayerRef=e)}),l(this,"handleOnEnded",({event:e})=>{const{loop:t,onLoop:n,onEnded:i}=this.props;i&&(i({event:e}),this.videoPlayerRef&&this.videoPlayerRef.video&&t&&(this.videoPlayerRef.video.play(),n&&n()))}),l(this,"handleOnReady",({event:e})=>{const{onReady:t}=this.props;let{videoStartTime:n}=this.props;const{useHlsVideo:i}=this.state;null==n&&(n=0),n>0&&this.videoPlayerRef&&this.videoPlayerRef.video&&!i&&(this.videoPlayerRef.video.currentTime=n),t&&t({event:e})});const t=d(e.src);this.state={useHlsVideo:!o.a.isSafari()&&!!t}}render(){const{hlsConfig:e,loop:t,onEnded:n,src:i,videoStartTime:o,onLoop:l,...c}=this.props,{useHlsVideo:u}=this.state,p=d(i),h={...e,startPosition:o||-1},m=!n&&t;return u?r.a.createElement(s.a,Object.assign({},c,{hlsConfig:h,loop:m,onEnded:this.handleOnEnded,setVideoRef:this.setVideoPlayerRef,src:p})):r.a.createElement(a.R,Object.assign({},c,{loop:m,onEnded:this.handleOnEnded,onReady:this.handleOnReady,ref:this.setVideoPlayerRef,src:p||i}))}}},KFEb:function(e,t,n){n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return l}));var i=n("qtKf");const r=["search_banner_story","search_articles_story","hashtag_pins_story"],o={AGGREGATED_COMMENTS:"aggregatedComments",BOARD_ACTIVITYITEMS:"boardActivityItems",BOARD_ACTIVITYCOMMENTS:"boardActivityComments",BOARD_PINS:"boardPins",BOARD_SECTIONS:"boardSections",HOMEFEED_MORE_IDEAS_TABS:"homefeedMoreIdeasTabs",PROFILE_BOARDS:"profileBoards",SEARCH_PINS:"searchPins",SECTION_PINS:"sectionPins",UNIFIED_COMMENTS:"unifiedComments",USER_DID_IT_DATA:"userDidItData"},s={AggregatedActivityFeedResource:({options:{aggregated_pin_data_id:e}})=>({type:o.USER_DID_IT_DATA,id:e}),AggregatedCommentFeedResource:({options:{objectId:e}})=>({type:o.AGGREGATED_COMMENTS,id:e}),AggregatedCommentReplyFeedResource:({options:{objectId:e}})=>({type:o.AGGREGATED_COMMENTS,id:e,reversed:!0}),BoardActivityFeedResource:({options:{board_id:e}})=>({type:o.BOARD_ACTIVITYITEMS,id:e}),BoardActivityCommentFeedResource:({options:{activityId:e,parentType:t}})=>({type:o.BOARD_ACTIVITYCOMMENTS,id:e,reversed:"boardactivitycomment"===t}),BoardFeedResource:({options:{board_id:e}})=>({type:o.BOARD_PINS,id:e}),BoardSectionPinsResource:({options:{section_id:e}})=>({type:o.SECTION_PINS,id:e}),BoardSectionsResource:({options:{board_id:e}})=>({type:o.BOARD_SECTIONS,id:e}),BoardsResource:({options:{username:e,sort:t}})=>({type:o.PROFILE_BOARDS,id:Object(i.c)(e,t)}),BaseSearchResource:({options:{auto_correction_disabled:e,scope:t,filters:n,query_pin_sigs:i,query:s,user:a},data:l})=>({type:o.SEARCH_PINS,id:e?`auto-correction-disabled:${t}:${n||""}:${a||""}:${i||""}:${s}`:`${t}:${n||""}:${a||""}:${i||""}:${s}`,items:l&&l.results&&l.results.filter(e=>!(e.story_type&&r.includes(e.story_type)))||[]}),DidItCommentsResource:({options:{objectId:e}})=>({type:o.AGGREGATED_COMMENTS,id:e,reversed:!0}),DidItUserFeedResource:({options:{username:e}})=>({type:o.USER_DID_IT_DATA,id:e}),MoreIdeasTabsResource:({data:e})=>({type:o.HOMEFEED_MORE_IDEAS_TABS,id:"hf",items:e&&e.tabs||[]}),UnifiedCommentsPreviewResource:({options:{aggregated_pin_id:e}})=>({type:o.UNIFIED_COMMENTS,id:e}),UnifiedCommentsResource:({options:{aggregated_pin_id:e}})=>({type:o.UNIFIED_COMMENTS,id:e})},a={aggregatedComments:{},boardActivityItems:{},boardActivityComments:{},boardPins:{},boardSections:{},homefeedMoreIdeasTabs:{},profileBoards:{},searchPins:{},sectionPins:{},unifiedComments:{},userDidItData:{}};function l(e,t,n){const i=[...e],r=i.splice(t,1)[0];return i.splice(n,0,r),i}t.b=(e=a,t)=>{switch(t.type){case"RESOURCE_FETCH_COMPLETE":case"RESOURCE_FETCH_MORE_COMPLETE":{const{payload:n}=t;if(!n.options.redux_normalize_feed)return e;const{type:i,id:r,items:a,reversed:l}=s[n.name](n);let d=(a||n.data||[]).map(e=>((e,t)=>{switch(e.type){case"story":return{id:e.id,type:"story",story_type:e.story_type};case"module":return{id:e.id,type:"module",name:e.name};case"user":return{id:e.id,type:"user"};case"board":return t===o.PROFILE_BOARDS?{id:e.id,type:"board",onProfile:!0,profileGroup:e.archived_by_me_at?"archived":e.privacy||"public"}:{id:e.id,type:"board",onProfile:!1};case"boardactivity":return{id:e.id,type:"boardactivity"};case"boardactivitycomment":return{id:e.id,type:"boardactivitycomment"};case"board_section":return{type:"board_section",id:e.id};case"userdiditdata":return{type:"userdiditdata",id:e.id};case"aggregatedcomment":return{type:"aggregatedcomment",id:e.id};case"board_first_pin_slot":return{type:"board_first_pin_slot",pinId:e.pin_id,id:e.id,image:e.image,description:e.description,saves:e.saves,impressions:e.impressions,link:e.link};case"home_feed_tab":return{type:"home_feed_tab",id:e.id,name:e.name};case"unifiedcommentspreview":return"userdiditdata"===e.unified_comment.type?{type:"userdiditdata",id:e.unified_comment.id}:{type:"aggregatedcomment",id:e.unified_comment.id};default:return{type:"pin",id:e.id}}})(e,i));l&&(d=d.reverse());const c=e[i][r];if(c||"RESOURCE_FETCH_MORE_COMPLETE"!==t.type){const n=c||[];let o=d;return"RESOURCE_FETCH_MORE_COMPLETE"===t.type&&(o=l?d.concat(n):n.concat(d)),{...e,[i]:{...e[i],[r]:o}}}break}case"FEED_ITEM_REORDERED":{const{payload:{feedType:n,feedId:i,itemType:r,targetItemId:s,sourceItemId:a}}=t,d=e[n]||{},c=d[i]||[];let u=-1,p=-1;if([o.BOARD_PINS,o.SECTION_PINS,o.BOARD_SECTIONS,"profileBoards"].includes(n)&&(u=c.findIndex(e=>e.type===r&&e.id===a),p=c.findIndex(e=>e.type===r&&e.id===s)),-1!==u&&-1!==p)return{...e,[n]:{...d,[i]:l(c,u,p)}};break}case"FEED_ITEMS_REMOVED":{const{payload:{feedType:n,feedId:i,inverseSelection:r,itemType:s,itemIds:a=[]}}=t,l=e[n]||{},d=l[i];if(d&&d.length>0&&(n===o.SECTION_PINS||n===o.BOARD_PINS)){const t=d.filter(e=>{const t=a.includes(e.id);return!(e.type===s&&(r&&!t||!r&&t))}),o=!!t.find(e=>"pin"===e.type);return{...e,[n]:{...l,[i]:o?t:[]}}}if(d&&d.length>0&&n===o.BOARD_SECTIONS){const t=d.filter(e=>{const t=a.includes(e.id);return!(e.type===s&&t)});return{...e,[n]:{...l,[i]:t}}}if(d&&d.length>0&&(n===o.BOARD_ACTIVITYITEMS||n===o.AGGREGATED_COMMENTS||n===o.BOARD_ACTIVITYCOMMENTS||n===o.USER_DID_IT_DATA)){const t=d.filter(e=>{const t=a.includes(e.id);return!(e.type===s&&t)});return{...e,[n]:{...l,[i]:t}}}break}case"FEED_ITEMS_ADDED":{const{payload:{feedType:n,feedId:i,itemType:r,itemIds:s=[],prepend:a}}=t,l=e[n]||{},d=l[i];if(d&&(n===o.SECTION_PINS||n===o.BOARD_PINS)){const t=s.map(e=>({id:e,type:r}));let o=0;"story"===(d[0]||{}).type&&(o=1),"story"===(d[1]||{}).type&&(o=2);const a=[...d.slice(0,o),...t,...d.slice(o)];return{...e,[n]:{...l,[i]:a}}}if(d&&n===o.BOARD_SECTIONS){const t=s.reverse().map(e=>({id:e,type:"board_section"})),r=d?[...t,...d]:[...t];return{...e,[n]:{...l,[i]:r}}}if(n===o.BOARD_ACTIVITYITEMS||n===o.AGGREGATED_COMMENTS||n===o.BOARD_ACTIVITYCOMMENTS||n===o.UNIFIED_COMMENTS){const t=s.map(e=>({id:e,type:r})),o=d?[...a?t:d,...a?d:t]:t;return{...e,[n]:{...l,[i]:o}}}if(n===o.USER_DID_IT_DATA){const t=s.map(e=>({id:e,type:r})),o=d?[...t,...d]:t;return{...e,[n]:{...e[n],[i]:o}}}break}case"FEED_INVALIDATE":{const{payload:{feedType:n,feedId:i}}=t,r=e[n]||{};if(r[i])return{...e,[n]:{...r,[i]:null}};break}}return e}},NdXn:function(e,t,n){function i(e){return e.replace(/[_.-](\w|$)/g,(e,t)=>t.toUpperCase())}n.d(t,"a",(function(){return i}))},SASd:function(e,t,n){var i=n("q1tI"),r=n("9rZX"),o=n.n(r),s=n("TSYQ"),a=n.n(s),l=n("Ye/N"),d=n("D2p8"),c=n("LT60"),u=n("n6mq");function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}o.a.defaultStyles={};t.a=class extends i.Component{constructor(...e){super(...e),p(this,"pauseImpressionsTracking",()=>{d.c.pause()}),p(this,"resumeImpressionsTracking",()=>{d.c.resume()}),p(this,"handleHide",()=>{this.resumeImpressionsTracking(),this.props.onHide&&this.props.onHide()}),p(this,"handleOpen",()=>{this.pauseImpressionsTracking(),this.props.onAfterOpen&&this.props.onAfterOpen()})}componentDidMount(){this.pauseImpressionsTracking()}componentWillUnmount(){this.resumeImpressionsTracking()}render(){const{allowClickAndDrag:e,className:t,loading:n,noButton:r,onHide:s,type:d,style:p={}}=this.props,h=a()(t,"dangerouslyDisableFocusStyle","Module","ReactModal__Content","inModal",{modalHasClose:!!s},{ConfirmDialog:"confirm"===d},{PushNotificationSettings:"notifications"===d}),m=n?i.createElement(u.H,{accessibilityLabel:l.a._("Loading content","Accessibility label for loading modal content"),show:!0}):null,f=s&&!r?i.createElement("button",{className:"Button Module borderless cancelButton closeModal inModal show",onClick:this.handleHide,type:"button"},i.createElement(u.n,{icon:"cancel",accessibilityLabel:l.a._("Close modal"),size:20})):null;return i.createElement(c.a,{allowClickAndDrag:e},i.createElement(o.a,{ariaHideApp:!1,className:h,isOpen:!0,onAfterOpen:this.handleOpen,onRequestClose:this.handleHide,shouldCloseOnOverlayClick:!0,style:p},m,this.props.children,f))}}},Y8Sn:function(e,t,n){n.d(t,"i",(function(){return i})),n.d(t,"d",(function(){return r})),n.d(t,"f",(function(){return o})),n.d(t,"g",(function(){return s})),n.d(t,"e",(function(){return a})),n.d(t,"h",(function(){return l})),n.d(t,"b",(function(){return d})),n.d(t,"j",(function(){return c})),n.d(t,"a",(function(){return u})),n.d(t,"c",(function(){return p}));const i=e=>!!e&&e.video_list,r=(e,t)=>{const n=e||t&&t.embed;return n&&n.src&&!n.type},o=e=>e.rich_summary&&e.rich_summary.products&&e.rich_summary.products.length>0||e.rich_metadata&&e.rich_metadata.products&&e.rich_metadata.products.length>0,s=e=>!!e.promoter&&!e.is_downstream_promotion,a=e=>{const t=e.embed||e.attribution&&e.attribution.embed||null;return t&&"gif"===t.type},l=e=>!!e.video_status&&5!==e.video_status,d=(e,t)=>t?`/pin/${e}/analytics`:`/pin/${e}/`,c=(e,t)=>{const{organicVideosAutoplaying:n,promotedVideosAutoplaying:i}=t,r={...n,...i};return!!r[e]&&!r[e].paused},u=(e,t)=>{const{organicVideosAutoplaying:n,promotedVideosAutoplaying:i}=t,r={...n,...i};for(const o in r){const{paused:t}=r[o];if(o!==e&&!t)return!1}return!0},p=(e,t)=>{const{organicVideosAutoplaying:n,promotedVideosAutoplaying:i}=t,r={...n,...i};return r[e]&&r[e].currentTime}},ZVOf:function(e,t,n){n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return l}));var i=n("eOdZ"),r=n("/X16");function o(e,t){return i.a.create("UserFollowResource",{user_id:e,aux_data:t?{pin_id:t}:void 0})}function s(e,t){return{type:r.a.USER_FOLLOW,payload:{id:e,value:t}}}function a(e,t=null){return n=>{o(e,t).callCreate().catch(()=>n(s(e,!1))),n(s(e,!0))}}function l(e,t=null){return n=>{o(e,t).callDelete().catch(()=>n(s(e,!0))),n(s(e,!1))}}},a9a9:function(e,t,n){var i=n("zpPL");n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));const r=e=>i.a.instance.dispatch(function(e){return{type:"SPAMMY_CLICKTHROUGH_WARNING_SHOW",payload:e}}(e)),o=()=>i.a.instance.dispatch({type:"SPAMMY_CLICKTHROUGH_WARNING_DISMISS"})},aFfM:function(e,t,n){n.d(t,"a",(function(){return y}));var i=n("q1tI"),r=n.n(i),o=n("ulZh"),s=n.n(o),a=n("U4JR"),l=n("n6mq");function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const c=1e3,u=300,p=1e3,h=250,m=(e,t)=>typeof e!=typeof t||(Array.isArray(t)?e.length!==t.length||t.some((t,n)=>!Array.isArray(e)||t.type!==e[n].type||t.src!==e[n].src):t!==e);function f(){return(new Date).getTime()}class y extends r.a.PureComponent{constructor(...e){super(...e),d(this,"state",{canPlayVideo:!1,isManifestParsed:!1}),d(this,"setVideoPlayerRef",e=>{const{setVideoRef:t}=this.props;this.videoPlayerRef=e,t&&t(e),this.videoPlayerRef&&this.videoPlayerRef.video&&this.videoPlayerRef.video.addEventListener("canplay",()=>{this.setState({canPlayVideo:!0})})}),d(this,"currentVideoTime",0),d(this,"hls",null),d(this,"playbackPerformance",{fatalErrorMsg:"",firstLevelFetchTime:0,firstFragmentParsedTime:0,hasFatalError:!1,levelWatchDurationsMs:[],numStalls:0,rebufferingDurationMs:0,videoCreatedTime:0}),d(this,"initializeHls",()=>{this.destroyHls();const{src:e,hlsConfig:t}=this.props,n=new s.a(t);n.loadSource(e),this.videoPlayerRef&&n.attachMedia(this.videoPlayerRef.video),n.on(s.a.Events.MANIFEST_PARSED,()=>{this.setState({isManifestParsed:!0}),this.startVideoWatchTimings()}),n.on(s.a.Events.FRAG_PARSED,(e,t)=>{this.playbackPerformance.firstFragmentParsedTime||(this.playbackPerformance.firstFragmentParsedTime=f())}),n.on(s.a.Events.LEVEL_LOADING,(e,t)=>{this.playbackPerformance.firstLevelFetchTime||(this.playbackPerformance.firstLevelFetchTime=f())}),n.on(s.a.Events.ERROR,(e,t)=>{t.fatal&&(this.playbackPerformance.hasFatalError=!0,this.playbackPerformance.fatalErrorMsg=t.details),t.details===s.a.ErrorDetails.BUFFER_STALLED_ERROR&&(this.playbackPerformance.numStalls+=1,t.buffer&&(this.playbackPerformance.rebufferingDurationMs+=t.buffer*p))}),this.hls=n}),d(this,"destroyHls",()=>{const{hls:e}=this;e&&e.destroy(),window.clearInterval(this.videoTimeIntervalId)}),d(this,"startVideoWatchTimings",()=>{window.clearInterval(this.videoTimeIntervalId),this.videoTimeIntervalId=window.setInterval(()=>{if(!this.hls||this.hls.currentLevel<=0||!this.videoPlayerRef||!this.videoPlayerRef.video)return;const e=this.videoPlayerRef.video.currentTime*p,{levelWatchDurationsMs:t}=this.playbackPerformance;if(t.length){if(this.hls.currentLevel!==t[t.length-1].level){const n=t.length-1;t[n].duration+=this.currentVideoTime-t[n].lastStartSegmentTime,t.push({level:this.hls.currentLevel,lastStartSegmentTime:e,duration:0})}else if(e<this.currentVideoTime||e-this.currentVideoTime>u){const n=t.length-1;t[n].duration+=this.currentVideoTime-t[n].lastStartSegmentTime,t[n].lastStartSegmentTime=e}}else t.push({level:this.hls.currentLevel,lastStartSegmentTime:e,duration:0});this.currentVideoTime=e},h)})}componentDidMount(){this.playbackPerformance.videoCreatedTime=f(),this.initializeHls()}componentDidUpdate(e){const{src:t}=this.props;m(e.src,t)&&this.initializeHls()}componentWillUnmount(){const{firstLevelFetchTime:e,firstFragmentParsedTime:t,hasFatalError:n,levelWatchDurationsMs:i,numStalls:r,rebufferingDurationMs:o,videoCreatedTime:s}=this.playbackPerformance,l=this.videoPlayerRef&&this.videoPlayerRef.video;if(this.hls&&l&&i.length>0){const d=this.hls.levels,u=d[i[0].level],h=l.currentTime*p;i[i.length-1].duration+=h-i[i.length-1].lastStartSegmentTime;const m=i.reduce((e,t)=>{return e+t.level*d[t.level].bitrate*(t.duration||0)/p},0),f=i.reduce((e,t)=>e+(t.duration||0),0);Object(a.a)(3606,{eventData:{videoPerformanceData:{startupTimeMs:t-e,startupLatencyMs:t-s,nativeVideoDurationMs:l.duration*p,startupVariantKbps:u.bitrate/c,startupPlayerWidth:l.clientWidth,startupPlayerHeight:l.clientHeight,startupVariantWatchedDurationMs:i[0].duration,startupVariantWidth:u.width,isCellular:!1,fatalError:n,averageVideoKbps:m/(f/p),overallWatchedDurationMs:f,numberOfStalls:r,rebufferRate:o/f}}})}this.destroyHls()}render(){const{playing:e,hlsConfig:t,setVideoRef:n,src:i,...o}=this.props,{canPlayVideo:s,isManifestParsed:a}=this.state;return r.a.createElement(l.R,Object.assign({},o,{ref:this.setVideoPlayerRef,playing:a&&s&&e,src:i}))}}},fAMq:function(e,t,n){n.d(t,"a",(function(){return r})),n.d(t,"i",(function(){return d})),n.d(t,"c",(function(){return c})),n.d(t,"h",(function(){return u})),n.d(t,"g",(function(){return p})),n.d(t,"d",(function(){return f})),n.d(t,"f",(function(){return y})),n.d(t,"b",(function(){return v})),n.d(t,"e",(function(){return g}));var i=n("Se/U");const r=6e4,o=60*r,s=24*o,a=30*s,l=365*s,d=e=>{const t=new Date(e)-new Date,n=Math.abs(t);return{year:Math.floor(n/l),month:Math.floor(n%l/a),day:Math.floor(n%a/s),hour:Math.floor(n%s/o),minute:Math.floor(n%o/r),milli:t,ms:n}},c=(e,t)=>{const n=new Date(e);return n.setDate(e.getDate()+t),n},u=(e,t)=>{const n=t.getUTCDate()-e,i=new Date(t);return i.setUTCDate(n),i},p=(e,t)=>{return e.getTime()>t.getTime()},h=e=>/^\d{4}$/.test(e),m=e=>/^\d{2}\/\d{2}\/\d{4}$/.test(e),f=e=>{if(!h(e)&&!m(e))return-1;const t=new Date(e);if(!Object(i.a)(t))return-1;const n=t.toISOString().substr(0,10);return new Date(n).getTime()/1e3},y=(e,t)=>{if(!h(e)&&!m(e))return!1;const n=new Date;if(!Object(i.a)(n))return!1;if(!h(e)){const i=new Date(n.getFullYear()-t,n.getMonth(),n.getDate());return new Date(e)<=i}const r=n.getFullYear()-t-1;return new Date(e).getFullYear()<=r},v=e=>{const t=new Date(e);return new Date(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate())},g=e=>e.getFullYear()+"-"+("0"+(e.getMonth()+1)).slice(-2)+"-"+("0"+e.getDate()).slice(-2)},gC5q:function(e,t,n){var i=n("YO3V"),r=n.n(i);function o(e,t=!1){const n=(t,n)=>e(n);return e=>(function e(t,n=!1){return i=>{if(!r()(i))return n&&Array.isArray(i)?i.map(e(t,n)):i;const o={};return Object.keys(i).forEach(s=>{const a=t(i[s],s);r()(i[s])||n&&Array.isArray(i[s])?o[a]=e(t,n)(i[s]):o[a]=i[s]}),o}})(n,t)(e)}function s(e={},t=[]){return Object.keys(e).reduce((n,i)=>t.includes(i)?n:{...n,[i]:e[i]},{})}n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return s}))},n02X:function(e,t,n){var i=n("q1tI"),r=n.n(i),o=n("i8i4"),s=n("/MKj"),a=n("E+oP"),l=n.n(a),d=n("SASd"),c=n("B2N+"),u=n("n6mq");function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const h={overlay:{padding:0},content:{boxShadow:"none",height:"100%",margin:0,outline:"none",padding:0,width:"100%"}};class m extends i.Component{constructor(e){super(e),p(this,"state",{isPulsing:!this.props.tooltipOnly,isModalOpen:!!this.props.isModal&&!!this.props.tooltipOnly&&!this.props.pulserOnly,positionStyles:{},style:{}}),p(this,"onPulsarClick",e=>{e&&(e.stopPropagation(),e.preventDefault());const t={isPulsing:!1,style:{}},{isModal:n,pulserOnly:i,handleComplete:r,anchor:s}=this.props;if(i)r();else if(n){const e=Object(o.findDOMNode)(s);if(e instanceof HTMLElement){const n=e.getBoundingClientRect();return void this.setState({...t,isModalOpen:!0,positionStyles:{top:n.top,left:n.left,position:"absolute"}})}}this.setState(t)}),p(this,"modalPositioned",!1),e.anchor&&(this.anchorElement=Object(o.findDOMNode)(e.anchor))}UNSAFE_componentWillReceiveProps(e){e.anchor!==this.props.anchor&&(this.anchorElement=Object(o.findDOMNode)(e.anchor))}componentDidUpdate(){this.state.isModalOpen&&this.updateModalPosition()}getPulser(){const{zIndex:e}=this.props;return r.a.createElement(c.a,{anchor:this.props.anchor,onTouch:this.onPulsarClick,zIndex:e})}getFlyout(){const{overflow:e,tooltip:t,handleDismiss:n,handleComplete:i}=this.props;if(t){const{cancelButtonText:o,confirmButtonText:s,mainText:a,idealDirection:l="down"}=t,d=o&&n&&s&&i;return r.a.createElement(u.k,{anchor:this.anchorElement,color:"darkGray",idealDirection:l,onDismiss:n,shouldFocus:!1,size:"md"},r.a.createElement(u.c,{column:12,padding:3},r.a.createElement(u.L,{color:"white",overflow:e,size:"lg",weight:"bold"},a),d?r.a.createElement(u.c,{display:"flex",alignItems:"center",deprecatedMargin:{top:2}},r.a.createElement(u.c,{deprecatedMargin:{right:1},xs:{column:6}},r.a.createElement(u.d,{color:"transparent",onClick:n,size:"md",text:String(o)})),r.a.createElement(u.c,{xs:{column:6}},r.a.createElement(u.d,{color:"white",size:"md",text:String(s),onClick:i}))):null))}return r.a.createElement("div",null)}updateModalPosition(){if(this.state.isModalOpen&&!this.modalPositioned){const e=Object(o.findDOMNode)(this.props.anchor);if(e instanceof HTMLElement){const t=e.getBoundingClientRect(),n=window.getComputedStyle(e),i=n.getPropertyValue("border"),r=n.getPropertyValue("margin"),o=parseInt(i.split("px")[0],10),s=parseInt(r.split("px")[0],10),a=!isNaN(o)&&!isNaN(s)&&Math.abs(s)===o?o:0;this.setState({positionStyles:{top:t.top+a,left:t.left+a,position:"absolute"}}),this.modalPositioned=!0}}}renderFlyout(){const{handleComplete:e,children:t,pulserOnly:n}=this.props,{isModalOpen:i,positionStyles:o}=this.state,s=!n;return i?r.a.createElement(d.a,{noButton:!0,onHide:e,style:h},r.a.createElement("div",{style:o},t,this.getFlyout())):s?this.getFlyout():null}render(){return this.props.anchor?r.a.createElement("div",{style:this.state.style},this.state.isPulsing?this.getPulser():this.renderFlyout()):null}}p(m,"defaultProps",{overflow:"breakWord",tooltipOnly:!1,pulserOnly:!1});var f=n("NdXn"),y=n("zXAL"),v=n("gC5q"),g=n("vh5K");function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.a=(e,t)=>n=>{const r=function(e,t){return(n,i)=>{if(t)return{experience:t};const r=n.experiences.anchorExperiences[e];return r?{experience:r}:{}}}(e,t),a=function(e,t){var n,r;return r=n=class extends i.Component{constructor(e){super(e),E(this,"getDisplayDataProps",()=>{const{display_data:e}=this.props.experience;if(e.tooltip){const t={...e.tooltip.options,...e.tooltip};e.tooltip=t,delete e.tooltip.options}return Object(v.a)(f.a,!0)(e)}),E(this,"viewTimer",null),E(this,"handleCompleteOnHover",()=>{const{experienceClient:e,experience:t}=this.props;t.display_data&&t.display_data.complete_on_hover&&e.completeExperience(t.placement_id,t.experience_id)}),E(this,"handleCompleteNoClick",e=>{const{experienceClient:t,experience:n,onClick:i}=this.props;e&&e.event&&e.event.stopPropagation(),i&&i(e),t.completeExperience(n.placement_id,n.experience_id)}),E(this,"handleComplete",e=>{const{experienceClient:t,experience:n}=this.props,{wrappedComponentRef:i}=this.state;if(e&&e.event&&e.event.stopPropagation(),i){const e=Object(o.findDOMNode)(i);e instanceof HTMLElement&&e.click()}t.completeExperience(n.placement_id,n.experience_id)}),E(this,"handleDismiss",e=>{e&&e.event&&e.event.stopPropagation();const{experienceClient:t,experience:n}=this.props;t.dismissExperience(n.placement_id,n.experience_id)}),E(this,"handleRefUpdate",e=>{const{wrappedComponentRef:t}=this.state;t&&!!e||this.setState({wrappedComponentRef:e})});const{experience:t}=e;let n=!1;t&&t.display_data&&t.display_data.delay&&(n=!0),this.state={hasModal:t&&t.display_data&&t.display_data.modal,isPresentationDelayed:n,wrappedComponentRef:void 0}}componentDidMount(){const{experience:e,experienceClient:t}=this.props,{isPresentationDelayed:n}=this.state;e&&(n?this.viewTimer=setTimeout(()=>{this.showExperience()},e.display_data.delay):t.viewExperience(e.placement_id,e.experience_id))}UNSAFE_componentWillReceiveProps(e){const{experience:t}=this.props,{experience:n}=e;if(!t&&n){const e={};n.display_data&&n.display_data.delay&&(e.isPresentationDelayed=!0,this.viewTimer=setTimeout(()=>{this.showExperience()},n.display_data.delay)),n.display_data&&n.display_data.modal&&(e.hasModal=!0),l()(e)||this.setState(e)}}componentWillUnmount(){this.viewTimer&&clearTimeout(this.viewTimer)}showExperience(){const{experience:e,experienceClient:t}=this.props;e&&(t.viewExperience(e.placement_id,e.experience_id),this.setState({isPresentationDelayed:!1}))}renderComponentTooltip(e){const{wrappedComponentRef:n}=this.state,{centerTooltip:r,overflow:o,zIndex:s}=this.props;return i.createElement("div",{style:{position:"relative"}},i.createElement(u.Q,{onMouseEnter:this.handleCompleteOnHover},i.createElement(t,Object.assign({},this.props,{ref:this.handleRefUpdate,onClick:this.handleCompleteNoClick})),i.createElement(m,Object.assign({},this.getDisplayDataProps(),{anchor:n,centerTooltip:r,handleComplete:this.handleComplete,handleDismiss:this.handleDismiss,isModal:e,overflow:o,zIndex:s}),i.createElement(t,Object.assign({},this.props,{ref:this.handleRefUpdate,onClick:this.handleCompleteNoClick})))))}render(){const{experience:n,isPulsarDisplayed:r}=this.props,{hasModal:o,isPresentationDelayed:s}=this.state;return n&&Object(g.b)(n)===e&&!s&&r?i.createElement(u.c,{position:"relative"},o?this.renderComponentTooltip(!0):this.renderComponentTooltip(!1)):i.createElement(t,this.props)}},E(n,"defaultProps",{isPulsarDisplayed:!0}),r}(e,n);return Object(y.a)(Object(s.connect)(r,null,null,{forwardRef:!0})(a))}},qtKf:function(e,t,n){n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));const i=(e,t)=>`${e}:${t||""}`,r=(e,t)=>e.feeds.profileBoards[i(t.username,t.boardOrder)],o=(e,t)=>t.isOverview||t.inActivityView?"xxWide":t.isOwnProfile&&e.ui.views&&e.ui.views.profileBoardView||"wide"},xjqW:function(e,t,n){function i({id:e,isProduct:t,isPromoted:n,videoDuration:i,viewParameter:r,viewType:o,type:s}){return{type:"REPORT_CONTENT_SHOW",payload:{id:e,isProduct:t,isPromoted:n,videoDuration:i,viewParameter:r,viewType:o,type:s}}}function r(){return{type:"REPORT_CONTENT_DISMISS"}}n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=pjs-1-cea2804e5da5498ab746.mjs.map