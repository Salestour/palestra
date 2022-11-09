(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    g = g['toLowerCase']();
    var i = function () {
        var r = this['get']('data');
        r['updateText'](r['translateObjs'][f]);
    };
    var j = function (s) {
        var t = s['data']['nextSelectedIndex'];
        if (t >= 0x0) {
            var u = s['source']['get']('items')[t];
            var v = function () {
                u['unbind']('start', v, this);
                i['call'](this);
            };
            u['bind']('start', v, this);
        } else
            i['call'](this);
    };
    var k = function (w) {
        return function (x) {
            if (w in x) {
                i['call'](this);
            }
        }['bind'](this);
    };
    var l = function (y, z) {
        return function (A, B) {
            if (y == A && z in B) {
                i['call'](this);
            }
        }['bind'](this);
    };
    var m = function (C, D, E) {
        for (var F = 0x0; F < C['length']; ++F) {
            var G = C[F];
            var H = G['get']('selectedIndex');
            if (H >= 0x0) {
                var I = D['split']('.');
                var J = G['get']('items')[H];
                if (E !== undefined && !E['call'](this, J))
                    continue;
                for (var K = 0x0; K < I['length']; ++K) {
                    if (J == undefined)
                        return '';
                    J = 'get' in J ? J['get'](I[K]) : J[I[K]];
                }
                return J;
            }
        }
        return '';
    };
    var n = function (L) {
        var M = L['get']('player');
        return M !== undefined && M['get']('viewerArea') == this['getMainViewer']();
    };
    switch (g) {
    case 'title':
    case 'subtitle':
        var p = function () {
            switch (g) {
            case 'title':
                return 'media.label';
            case 'subtitle':
                return 'media.data.subtitle';
            }
        }();
        if (p) {
            return function () {
                var N = this['_getPlayListsWithViewer'](this['getMainViewer']());
                if (!h) {
                    for (var O = 0x0; O < N['length']; ++O) {
                        N[O]['bind']('changing', j, this);
                    }
                    h = !![];
                }
                return m['call'](this, N, p, n);
            };
        }
        break;
    default:
        if (g['startsWith']('quiz.') && 'Quiz' in TDV) {
            var q = undefined;
            var p = function () {
                switch (g) {
                case 'quiz.questions.answered':
                    return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                case 'quiz.question.count':
                    return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                case 'quiz.items.found':
                    return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                case 'quiz.item.count':
                    return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                case 'quiz.score':
                    return TDV['Quiz']['PROPERTY']['SCORE'];
                case 'quiz.score.total':
                    return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                case 'quiz.time.remaining':
                    return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                case 'quiz.time.elapsed':
                    return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                case 'quiz.time.limit':
                    return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                case 'quiz.media.items.found':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                case 'quiz.media.item.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                case 'quiz.media.questions.answered':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                case 'quiz.media.question.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                case 'quiz.media.score':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                case 'quiz.media.score.total':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                case 'quiz.media.index':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                case 'quiz.media.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                case 'quiz.media.visited':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                default:
                    var P = /quiz\.([\w_]+)\.(.+)/['exec'](g);
                    if (P) {
                        q = P[0x1];
                        switch ('quiz.' + P[0x2]) {
                        case 'quiz.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                        case 'quiz.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                        case 'quiz.media.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                        case 'quiz.media.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                        case 'quiz.media.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                        case 'quiz.media.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                        case 'quiz.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                        case 'quiz.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                        case 'quiz.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                        case 'quiz.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                        case 'quiz.media.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                        case 'quiz.media.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                        }
                    }
                }
            }();
            if (p) {
                return function () {
                    var Q = this['get']('data')['quiz'];
                    if (Q) {
                        if (!h) {
                            if (q != undefined)
                                if (q == 'global') {
                                    var S = this['get']('data')['quizConfig'];
                                    var U = S['objectives'];
                                    for (var W = 0x0, Y = U['length']; W < Y; ++W) {
                                        Q['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], l['call'](this, U[W]['id'], p), this);
                                    }
                                } else {
                                    Q['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], l['call'](this, q, p), this);
                                }
                            else
                                Q['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], k['call'](this, p), this);
                            h = !![];
                        }
                        try {
                            var Z = 0x0;
                            if (q != undefined) {
                                if (q == 'global') {
                                    var S = this['get']('data')['quizConfig'];
                                    var U = S['objectives'];
                                    for (var W = 0x0, Y = U['length']; W < Y; ++W) {
                                        Z += Q['getObjective'](U[W]['id'], p);
                                    }
                                } else {
                                    Z = Q['getObjective'](q, p);
                                }
                            } else {
                                Z = Q['get'](p);
                                if (p == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                    Z += 0x1;
                            }
                            return Z;
                        } catch (a0) {
                            return undefined;
                        }
                    }
                };
            }
        }
        break;
    }
    return '';
}
function createQuizConfig(player, a1) {
    var a2 = {};
    a2['player'] = player;
    a2['playList'] = a1;
    function a3(a6) {
        for (var a7 = 0x0; a7 < a6['length']; ++a7) {
            var a8 = a6[a7];
            if ('id' in a8)
                player[a8['id']] = a8;
        }
    }
    if (a2['questions']) {
        a3(a2['questions']);
        for (var a4 = 0x0; a4 < a2['questions']['length']; ++a4) {
            var a5 = a2['questions'][a4];
            a3(a5['options']);
        }
    }
    if (a2['objectives']) {
        a3(a2['objectives']);
    }
    if (a2['califications']) {
        a3(a2['califications']);
    }
    if (a2['score']) {
        player[a2['score']['id']] = a2['score'];
    }
    if (a2['question']) {
        player[a2['question']['id']] = a2['question'];
    }
    if (a2['timeout']) {
        player[a2['timeout']['id']] = a2['timeout'];
    }
    player['get']('data')['translateObjs'] = translateObjs;
    return a2;
}
var script = {"toolTipHorizontalAlign":"center","borderSize":0,"contentOpaque":false,"children":["this.MainViewer"],"borderRadius":0,"defaultMenu":["fullscreen","mute","rotation"],"gap":10,"paddingLeft":0,"scrollBarWidth":10,"paddingTop":0,"id":"rootPlayer","paddingBottom":0,"overflow":"hidden","definitions": [{"displayPlaybackBar":true,"touchControlMode":"drag_rotation","surfaceSelectionEnabled":false,"gyroscopeVerticalDraggingEnabled":true,"mouseControlMode":"drag_acceleration","class":"PanoramaPlayer","aaEnabled":true,"viewerArea":"this.MainViewer","arrowKeysAction":"translate","zoomEnabled":true,"id":"MainViewerPanoramaPlayer"},{"displayPlayOverlay":true,"displayPlaybackBar":true,"clickAction":"play_pause","viewerArea":"this.MainViewer","class":"VideoPlayer","id":"MainViewerVideoPlayer"},{"video":"this.videores_531635CF_43CE_6EF7_41CD_260824DEF4CB","loop":false,"height":1920,"width":3840,"id":"video_5242A95A_43C2_A799_41C2_73D20BB9E1BE","label":trans('video_5242A95A_43C2_A799_41C2_73D20BB9E1BE.label'),"thumbnailUrl":"media/video_5242A95A_43C2_A799_41C2_73D20BB9E1BE_t.jpg","class":"Video","data":{"label":"CLASP 360"},"scaleMode":"fit_inside"},{"class":"PlayList","items":[{"class":"VideoPlayListItem","player":"this.MainViewerVideoPlayer","begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)","media":"this.video_520854B5_43C2_EEAB_41B4_4DF8B133433B","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.playList_524CC7D6_5E89_E910_41D1_6870D6A9AE6C, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_524CC7D6_5E89_E910_41D1_6870D6A9AE6C, 0)"}],"id":"playList_524CC7D6_5E89_E910_41D1_6870D6A9AE6C"},{"toolTipHorizontalAlign":"center","borderSize":0,"progressLeft":0,"toolTipPaddingBottom":4,"translationTransitionDuration":1000,"width":"100%","paddingLeft":0,"subtitlesShadow":false,"progressBarBackgroundColor":["#3399FF"],"id":"MainViewer","subtitlesEnabled":true,"subtitlesTop":0,"toolTipBorderRadius":3,"subtitlesPaddingTop":5,"paddingRight":0,"class":"ViewerArea","playbackBarHeadShadowHorizontalLength":0,"progressBackgroundColor":["#FFFFFF"],"toolTipFontWeight":"normal","toolTipShadowBlurRadius":3,"playbackBarHeadShadowOpacity":0.7,"playbackBarHeadShadowBlurRadius":3,"toolTipBorderColor":"#767676","toolTipFontColor":"#606060","toolTipShadowSpread":0,"transitionDuration":500,"subtitlesGap":0,"subtitlesTextShadowColor":"#000000","progressBarOpacity":1,"surfaceReticleColor":"#FFFFFF","playbackBarHeadHeight":15,"progressBackgroundOpacity":1,"playbackBarHeadShadowColor":"#000000","playbackBarProgressBackgroundColorRatios":[0],"height":"100%","playbackBarBorderColor":"#FFFFFF","playbackBarHeadBackgroundColorRatios":[0,1],"toolTipTextShadowBlurRadius":3,"playbackBarBorderRadius":0,"playbackBarHeadBorderSize":0,"progressBottom":0,"subtitlesFontSize":"3vmin","firstTransitionDuration":0,"playbackBarLeft":0,"subtitlesPaddingBottom":5,"playbackBarBackgroundOpacity":1,"subtitlesBackgroundColor":"#000000","playbackBarHeadShadow":true,"progressHeight":10,"subtitlesHorizontalAlign":"center","playbackBarHeadOpacity":1,"toolTipShadowOpacity":1,"progressBorderSize":0,"minHeight":50,"playbackBarOpacity":1,"playbackBarProgressBorderColor":"#000000","progressBarBorderSize":0,"progressBarBorderRadius":0,"progressBackgroundColorRatios":[0],"subtitlesBackgroundOpacity":0.2,"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBottom":5,"propagateClick":false,"toolTipFontFamily":"Arial","toolTipPaddingRight":6,"minWidth":100,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarProgressOpacity":1,"borderRadius":0,"progressRight":0,"progressOpacity":1,"subtitlesBorderSize":0,"subtitlesVerticalAlign":"bottom","playbackBarProgressBackgroundColorDirection":"vertical","paddingTop":0,"playbackBarHeadBorderRadius":0,"playbackBarHeadBorderColor":"#000000","toolTipPaddingLeft":6,"toolTipFontStyle":"normal","progressBarBackgroundColorDirection":"vertical","subtitlesOpacity":1,"paddingBottom":0,"surfaceReticleSelectionOpacity":1,"subtitlesTextShadowHorizontalLength":1,"progressBarBorderColor":"#000000","playbackBarBackgroundColor":["#FFFFFF"],"progressBarBackgroundColorRatios":[0],"playbackBarHeight":10,"subtitlesTextShadowOpacity":1,"displayTooltipInTouchScreens":true,"toolTipTextShadowColor":"#000000","playbackBarBorderSize":0,"subtitlesBorderColor":"#FFFFFF","doubleClickAction":"toggle_fullscreen","subtitlesFontWeight":"normal","progressBackgroundColorDirection":"vertical","vrPointerColor":"#FFFFFF","subtitlesFontColor":"#FFFFFF","vrPointerSelectionColor":"#FF6600","toolTipPaddingTop":4,"subtitlesTextDecoration":"none","toolTipFontSize":"1.11vmin","toolTipBorderSize":1,"surfaceReticleOpacity":0.6,"toolTipOpacity":1,"toolTipShadowHorizontalLength":0,"toolTipTextShadowOpacity":0,"transitionMode":"blending","subtitlesTextShadowBlurRadius":0,"displayTooltipInSurfaceSelection":true,"progressBorderRadius":0,"subtitlesPaddingLeft":5,"playbackBarHeadBackgroundColorDirection":"vertical","toolTipDisplayTime":600,"playbackBarProgressBorderSize":0,"toolTipShadowColor":"#333138","playbackBarHeadWidth":6,"progressBorderColor":"#000000","playbackBarBackgroundColorDirection":"vertical","playbackBarHeadShadowVerticalLength":0,"playbackBarRight":0,"vrPointerSelectionTime":2000,"playbackBarProgressBorderRadius":0,"subtitlesBottom":50,"playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesTextShadowVerticalLength":1,"toolTipBackgroundColor":"#F6F6F6","toolTipShadowVerticalLength":0,"shadow":false,"subtitlesPaddingRight":5,"subtitlesFontFamily":"Arial","data":{"name":"Main Viewer"}},{"overlays":["this.panorama_494EF86B_43C1_E5BF_41B7_08E491794DFF_tcap0","this.overlay_4C33D7BF_43C1_EA97_41B0_AD7D81C10802","this.overlay_556AD42C_4441_EDB9_41B4_83DAA11DC492","this.overlay_57AC3931_4446_A7AB_41CF_2138A8BCB10A"],"hfovMax":130,"pitch":0,"thumbnailUrl":"media/panorama_494EF86B_43C1_E5BF_41B7_08E491794DFF_t.jpg","hfovMin":"135%","adjacentPanoramas":[{"distance":8.98,"panorama":"this.panorama_4800C5DC_43C1_EE9A_41CB_D2F65D055F94","yaw":-103.31,"select":"this.overlay_57AC3931_4446_A7AB_41CF_2138A8BCB10A.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_57AC3931_4446_A7AB_41CF_2138A8BCB10A"},"class":"AdjacentPanorama"}],"label":trans('panorama_494EF86B_43C1_E5BF_41B7_08E491794DFF.label'),"id":"panorama_494EF86B_43C1_E5BF_41B7_08E491794DFF","data":{"label":"CLASPF2"},"partial":false,"frames":[{"class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"width":12288,"tags":"ondemand","colCount":24,"url":"media/panorama_494EF86B_43C1_E5BF_41B7_08E491794DFF_0/{face}/0/{row}_{column}.jpg","height":2048,"class":"TiledImageResourceLevel","rowCount":4},{"width":6144,"tags":"ondemand","colCount":12,"url":"media/panorama_494EF86B_43C1_E5BF_41B7_08E491794DFF_0/{face}/1/{row}_{column}.jpg","height":1024,"class":"TiledImageResourceLevel","rowCount":2},{"width":3072,"tags":["ondemand","preload"],"colCount":6,"url":"media/panorama_494EF86B_43C1_E5BF_41B7_08E491794DFF_0/{face}/2/{row}_{column}.jpg","height":512,"class":"TiledImageResourceLevel","rowCount":1},{"width":9216,"tags":"mobilevr","colCount":6,"url":"media/panorama_494EF86B_43C1_E5BF_41B7_08E491794DFF_0/{face}/vr/0.jpg","height":1536,"class":"TiledImageResourceLevel","rowCount":1},{"width":12288,"tags":"mobilevr2gen","colCount":6,"url":"media/panorama_494EF86B_43C1_E5BF_41B7_08E491794DFF_0/{face}/vr2gen/0.jpg","height":2048,"class":"TiledImageResourceLevel","rowCount":1}]},"thumbnailUrl":"media/panorama_494EF86B_43C1_E5BF_41B7_08E491794DFF_t.jpg"}],"class":"Panorama","hfov":360,"vfov":180},{"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"hoverFactor":0,"initialSequence":"this.sequence_4967074F_43C1_ABF7_419B_925ABE15CBE8","class":"PanoramaCamera","automaticZoomSpeed":10,"id":"panorama_494EF86B_43C1_E5BF_41B7_08E491794DFF_camera"},{"class":"PlayList","items":["this.PanoramaPlayListItem_52436836_5E89_E710_41BA_6576804AC9D8",{"class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_494EF86B_43C1_E5BF_41B7_08E491794DFF_camera","media":"this.panorama_494EF86B_43C1_E5BF_41B7_08E491794DFF","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)","end":"this.trigger('tourEnded')"}],"id":"mainPlayList"},{"toolTipHorizontalAlign":"center","borderSize":0,"data":{"name":"Window15720"},"closeButtonPressedBorderColor":"#000000","veilHideEffect":{"class":"FadeOutEffect","easing":"cubic_in_out","duration":500},"overflow":"scroll","hideEffect":{"class":"FadeOutEffect","easing":"cubic_in_out","duration":500},"closeButtonBackgroundColorRatios":[],"showEffect":{"class":"FadeInEffect","easing":"cubic_in_out","duration":500},"width":"90%","shadowColor":"#000000","shadowSpread":1,"closeButtonIconColor":"#B2B2B2","id":"window_52347E08_43CE_9D79_41A0_D0956BAE2C15","shadowOpacity":0.5,"paddingLeft":0,"headerPaddingTop":10,"headerBackgroundColorRatios":[0,0.1,1],"paddingRight":0,"class":"Window","modal":true,"bodyPaddingLeft":0,"closeButtonRollOverIconColor":"#FFFFFF","titleFontColor":"#000000","backgroundColorRatios":[],"headerBorderSize":0,"titlePaddingRight":5,"bodyBackgroundColorDirection":"vertical","footerBackgroundColorRatios":[0,0.9,1],"closeButtonBackgroundColor":[],"closeButtonBorderRadius":11,"veilColorDirection":"horizontal","backgroundColor":[],"headerBackgroundColorDirection":"vertical","backgroundOpacity":1,"height":"90%","scrollBarColor":"#000000","veilColorRatios":[0,1],"closeButtonIconWidth":20,"titleFontStyle":"normal","layout":"vertical","footerBackgroundColor":["#FFFFFF","#EEEEEE","#DDDDDD"],"scrollBarVisible":"rollOver","headerBackgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"closeButtonPressedBorderSize":0,"footerBackgroundColorDirection":"vertical","bodyPaddingTop":0,"footerHeight":5,"titleFontWeight":"normal","bodyPaddingBottom":0,"closeButtonBorderSize":0,"veilShowEffect":{"class":"FadeInEffect","easing":"cubic_in_out","duration":500},"closeButtonBorderColor":"#000000","scrollBarMargin":2,"closeButtonPressedBackgroundColor":[],"minHeight":0,"titlePaddingBottom":5,"propagateClick":false,"veilColor":["#000000","#000000"],"closeButtonPressedIconColor":"#FFFFFF","headerBackgroundOpacity":0,"titleTextDecoration":"none","closeButtonPressedBackgroundColorRatios":[],"minWidth":0,"gap":10,"shadowBlurRadius":6,"contentOpaque":false,"shadowVerticalLength":0,"closeButtonRollOverBackgroundColor":[],"closeButtonPressedIconLineWidth":3,"borderRadius":5,"closeButtonPaddingRight":0,"closeButtonPaddingBottom":0,"titleHorizontalAlign":"left","footerBorderSize":0,"scrollBarWidth":10,"paddingTop":0,"bodyBackgroundColorRatios":[0,0.5,1],"closeButtonRollOverIconLineWidth":2,"closeButtonRollOverBackgroundOpacity":0,"horizontalAlign":"center","paddingBottom":0,"titleFontFamily":"Arial","scrollBarOpacity":0.5,"bodyBackgroundColor":["#FFFFFF","#DDDDDD","#FFFFFF"],"bodyBackgroundOpacity":0,"children":["this.WebFrame_5243E834_5E89_E710_41D0_85FFF891D545"],"closeButtonPaddingLeft":0,"titleFontSize":"1.29vmin","closeButtonBackgroundOpacity":0,"veilOpacity":0.4,"headerVerticalAlign":"middle","headerPaddingBottom":5,"closeButtonIconLineWidth":2,"verticalAlign":"middle","backgroundColorDirection":"vertical","titlePaddingTop":5,"shadowHorizontalLength":3,"titlePaddingLeft":5,"closeButtonRollOverBackgroundColorRatios":[],"closeButtonIconHeight":20,"bodyPaddingRight":0,"bodyBorderSize":0,"headerPaddingLeft":10,"footerBorderColor":"#000000","closeButtonPaddingTop":0,"headerBorderColor":"#000000","headerPaddingRight":0,"closeButtonRollOverBorderColor":"#000000","footerBackgroundOpacity":0,"bodyBorderColor":"#000000","shadow":true,"closeButtonRollOverBorderSize":0,"closeButtonPressedBackgroundOpacity":0},{"toolTipHorizontalAlign":"center","borderSize":0,"data":{"name":"Window17677"},"closeButtonPressedBorderColor":"#000000","veilHideEffect":{"class":"FadeOutEffect","easing":"cubic_in_out","duration":500},"overflow":"scroll","hideEffect":{"class":"FadeOutEffect","easing":"cubic_in_out","duration":500},"closeButtonBackgroundColorRatios":[],"showEffect":{"class":"FadeInEffect","easing":"cubic_in_out","duration":500},"width":"90%","shadowColor":"#000000","shadowSpread":1,"closeButtonIconColor":"#B2B2B2","id":"window_569DAA08_4442_6579_41C1_541231190E14","shadowOpacity":0.5,"paddingLeft":0,"headerPaddingTop":10,"headerBackgroundColorRatios":[0,0.1,1],"paddingRight":0,"class":"Window","modal":true,"bodyPaddingLeft":0,"closeButtonRollOverIconColor":"#FFFFFF","titleFontColor":"#000000","backgroundColorRatios":[],"headerBorderSize":0,"titlePaddingRight":5,"bodyBackgroundColorDirection":"vertical","footerBackgroundColorRatios":[0,0.9,1],"closeButtonBackgroundColor":[],"closeButtonBorderRadius":11,"veilColorDirection":"horizontal","backgroundColor":[],"headerBackgroundColorDirection":"vertical","backgroundOpacity":1,"height":"90%","scrollBarColor":"#000000","veilColorRatios":[0,1],"closeButtonIconWidth":20,"titleFontStyle":"normal","layout":"vertical","footerBackgroundColor":["#FFFFFF","#EEEEEE","#DDDDDD"],"scrollBarVisible":"rollOver","headerBackgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"closeButtonPressedBorderSize":0,"footerBackgroundColorDirection":"vertical","bodyPaddingTop":0,"footerHeight":5,"titleFontWeight":"normal","bodyPaddingBottom":0,"closeButtonBorderSize":0,"veilShowEffect":{"class":"FadeInEffect","easing":"cubic_in_out","duration":500},"closeButtonBorderColor":"#000000","scrollBarMargin":2,"closeButtonPressedBackgroundColor":[],"minHeight":0,"titlePaddingBottom":5,"propagateClick":false,"veilColor":["#000000","#000000"],"closeButtonPressedIconColor":"#FFFFFF","headerBackgroundOpacity":0,"titleTextDecoration":"none","closeButtonPressedBackgroundColorRatios":[],"minWidth":0,"gap":10,"shadowBlurRadius":6,"contentOpaque":false,"shadowVerticalLength":0,"closeButtonRollOverBackgroundColor":[],"closeButtonPressedIconLineWidth":3,"borderRadius":5,"closeButtonPaddingRight":0,"closeButtonPaddingBottom":0,"titleHorizontalAlign":"left","footerBorderSize":0,"scrollBarWidth":10,"paddingTop":0,"bodyBackgroundColorRatios":[0,0.5,1],"closeButtonRollOverIconLineWidth":2,"closeButtonRollOverBackgroundOpacity":0,"horizontalAlign":"center","paddingBottom":0,"titleFontFamily":"Arial","scrollBarOpacity":0.5,"bodyBackgroundColor":["#FFFFFF","#DDDDDD","#FFFFFF"],"bodyBackgroundOpacity":0,"children":["this.WebFrame_52435835_5E89_E710_41BB_B31121DFD7AB"],"closeButtonPaddingLeft":0,"titleFontSize":"1.29vmin","closeButtonBackgroundOpacity":0,"veilOpacity":0.4,"headerVerticalAlign":"middle","headerPaddingBottom":5,"closeButtonIconLineWidth":2,"verticalAlign":"middle","backgroundColorDirection":"vertical","titlePaddingTop":5,"shadowHorizontalLength":3,"titlePaddingLeft":5,"closeButtonRollOverBackgroundColorRatios":[],"closeButtonIconHeight":20,"bodyPaddingRight":0,"bodyBorderSize":0,"headerPaddingLeft":10,"footerBorderColor":"#000000","closeButtonPaddingTop":0,"headerBorderColor":"#000000","headerPaddingRight":0,"closeButtonRollOverBorderColor":"#000000","footerBackgroundOpacity":0,"bodyBorderColor":"#000000","shadow":true,"closeButtonRollOverBorderSize":0,"closeButtonPressedBackgroundOpacity":0},{"video":"this.videores_52490E65_43C1_FDAB_41D0_9F6080575776","loop":false,"height":1920,"width":3840,"id":"video_520854B5_43C2_EEAB_41B4_4DF8B133433B","label":trans('video_520854B5_43C2_EEAB_41B4_4DF8B133433B.label'),"thumbnailUrl":"media/video_520854B5_43C2_EEAB_41B4_4DF8B133433B_t.jpg","class":"Video","data":{"label":"CLASP 360"},"scaleMode":"fit_inside"},{"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"hoverFactor":0,"initialSequence":"this.sequence_495A974D_43C1_ABFB_4197_0CFB908AFFAD","class":"PanoramaCamera","automaticZoomSpeed":10,"id":"panorama_4800C5DC_43C1_EE9A_41CB_D2F65D055F94_camera"},{"class":"PlayList","items":[{"class":"VideoPlayListItem","player":"this.MainViewerVideoPlayer","begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)","media":"this.video_5242A95A_43C2_A799_41C2_73D20BB9E1BE","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.playList_524CD7D6_5E89_E910_41D4_9CF9291D8C58, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_524CD7D6_5E89_E910_41D4_9CF9291D8C58, 0)"}],"id":"playList_524CD7D6_5E89_E910_41D4_9CF9291D8C58"},{"overlays":["this.panorama_4800C5DC_43C1_EE9A_41CB_D2F65D055F94_tcap0","this.overlay_4CF2BA26_43C6_65A9_418C_B5CC12E1BFB6","this.overlay_4C59CBD9_43C1_9A9B_4195_1DDB688B885E","this.overlay_4C3907CF_43C3_AAF7_41C3_63B7D97E21F4","this.overlay_52865ED4_43C1_BAE9_41C8_8678175E0B30","this.overlay_513C249E_43C1_EE99_418D_09D947757AF4"],"hfovMax":130,"pitch":0,"thumbnailUrl":"media/panorama_4800C5DC_43C1_EE9A_41CB_D2F65D055F94_t.jpg","hfovMin":"135%","adjacentPanoramas":[{"distance":6.12,"panorama":"this.panorama_494EF86B_43C1_E5BF_41B7_08E491794DFF","yaw":-104.43,"select":"this.overlay_4C3907CF_43C3_AAF7_41C3_63B7D97E21F4.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_4C3907CF_43C3_AAF7_41C3_63B7D97E21F4"},"class":"AdjacentPanorama"}],"label":trans('panorama_4800C5DC_43C1_EE9A_41CB_D2F65D055F94.label'),"id":"panorama_4800C5DC_43C1_EE9A_41CB_D2F65D055F94","data":{"label":"CLASP F1 "},"partial":false,"frames":[{"class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"width":12288,"tags":"ondemand","colCount":24,"url":"media/panorama_4800C5DC_43C1_EE9A_41CB_D2F65D055F94_0/{face}/0/{row}_{column}.jpg","height":2048,"class":"TiledImageResourceLevel","rowCount":4},{"width":6144,"tags":"ondemand","colCount":12,"url":"media/panorama_4800C5DC_43C1_EE9A_41CB_D2F65D055F94_0/{face}/1/{row}_{column}.jpg","height":1024,"class":"TiledImageResourceLevel","rowCount":2},{"width":3072,"tags":["ondemand","preload"],"colCount":6,"url":"media/panorama_4800C5DC_43C1_EE9A_41CB_D2F65D055F94_0/{face}/2/{row}_{column}.jpg","height":512,"class":"TiledImageResourceLevel","rowCount":1},{"width":9216,"tags":"mobilevr","colCount":6,"url":"media/panorama_4800C5DC_43C1_EE9A_41CB_D2F65D055F94_0/{face}/vr/0.jpg","height":1536,"class":"TiledImageResourceLevel","rowCount":1},{"width":12288,"tags":"mobilevr2gen","colCount":6,"url":"media/panorama_4800C5DC_43C1_EE9A_41CB_D2F65D055F94_0/{face}/vr2gen/0.jpg","height":2048,"class":"TiledImageResourceLevel","rowCount":1}]},"thumbnailUrl":"media/panorama_4800C5DC_43C1_EE9A_41CB_D2F65D055F94_t.jpg"}],"class":"Panorama","hfov":360,"vfov":180},{"height":1920,"width":3840,"class":"VideoResource","levels":["this.videolevel_520B95B2_5E89_E910_41CE_4D0045732327","this.videolevel_520B95C1_5E89_E970_41B1_20F28C8D0E8F"],"id":"videores_531635CF_43CE_6EF7_41CD_260824DEF4CB"},{"image":"this.res_4D985FE7_43C6_BAB7_41C1_5D6BEB08DCFE","distance":50,"inertia":false,"useHandCursor":false,"class":"TripodCapPanoramaOverlay","angle":0,"rotate":false,"hfov":45,"id":"panorama_494EF86B_43C1_E5BF_41B7_08E491794DFF_tcap0"},{"enabledInCardboard":true,"maps":[],"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"image":"this.AnimatedImageResource_52327755_5E89_E911_4170_7DDFA7C416D8","distance":100,"yaw":171.06,"pitch":-19.15,"vfov":17.2,"class":"HotspotPanoramaOverlayImage","data":{"label":"Info Red 02"},"verticalAlign":"middle","horizontalAlign":"center","hfov":16.74,"scaleMode":"fit_inside"}],"areas":["this.HotspotPanoramaOverlayArea_4C28A7C6_43C1_EAE9_41B9_31D664F32C51"],"data":{"label":"Info Red 02"},"id":"overlay_4C33D7BF_43C1_EA97_41B0_AD7D81C10802"},{"maps":[],"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"image":"this.res_574BFD98_4442_9E99_41C8_4DA5752EED88","distance":50,"yaw":109.82,"pitch":8.49,"vfov":10.5,"class":"HotspotPanoramaOverlayImage","data":{"label":"Image"},"verticalAlign":"middle","horizontalAlign":"center","hfov":10.5,"scaleMode":"fit_inside"}],"areas":["this.HotspotPanoramaOverlayArea_55297518_4441_EF99_41CE_A11B680524D3"],"data":{"label":"Image"},"id":"overlay_556AD42C_4441_EDB9_41B4_83DAA11DC492"},{"enabledInCardboard":true,"maps":[],"data":{"label":"Arrow 04b","hasPanoramaAction":true},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"image":"this.AnimatedImageResource_52322756_5E89_E913_41B6_E60D5500BFA5","distance":100,"yaw":-103.31,"pitch":-10.71,"vfov":21.9,"class":"HotspotPanoramaOverlayImage","data":{"label":"Arrow 04b"},"verticalAlign":"middle","horizontalAlign":"center","hfov":21.66,"scaleMode":"fit_inside"}],"areas":["this.HotspotPanoramaOverlayArea_57D49955_4446_A7EB_41CE_D7259A658067"],"id":"overlay_57AC3931_4446_A7AB_41CF_2138A8BCB10A"},{"id":"sequence_4967074F_43C1_ABF7_419B_925ABE15CBE8","movements":[{"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","easing":"linear","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5}],"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_4800C5DC_43C1_EE9A_41CB_D2F65D055F94_camera","media":"this.panorama_4800C5DC_43C1_EE9A_41CB_D2F65D055F94","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","id":"PanoramaPlayListItem_52436836_5E89_E710_41BA_6576804AC9D8"},{"toolTipHorizontalAlign":"center","borderSize":0,"borderRadius":0,"url":trans('WebFrame_5243E834_5E89_E710_41D0_85FFF891D545.url'),"width":"100%","paddingLeft":0,"paddingTop":0,"id":"WebFrame_5243E834_5E89_E710_41D0_85FFF891D545","paddingBottom":0,"paddingRight":0,"class":"WebFrame","scrollEnabled":true,"backgroundColorRatios":[],"backgroundOpacity":1,"height":"100%","backgroundColorDirection":"vertical","backgroundColor":[],"minHeight":0,"propagateClick":false,"shadow":false,"insetBorder":false,"minWidth":0,"data":{"name":"WebFrame1876"}},{"toolTipHorizontalAlign":"center","borderSize":0,"borderRadius":0,"url":trans('WebFrame_52435835_5E89_E710_41BB_B31121DFD7AB.url'),"width":"100%","paddingLeft":0,"paddingTop":0,"id":"WebFrame_52435835_5E89_E710_41BB_B31121DFD7AB","paddingBottom":0,"paddingRight":0,"class":"WebFrame","scrollEnabled":true,"backgroundColorRatios":[],"backgroundOpacity":1,"height":"100%","backgroundColorDirection":"vertical","backgroundColor":[],"minHeight":0,"propagateClick":false,"shadow":false,"insetBorder":false,"minWidth":0,"data":{"name":"WebFrame1877"}},{"height":1920,"width":3840,"class":"VideoResource","levels":["this.videolevel_52055640_5E89_EB6F_41D1_1A3A1A540AF7","this.videolevel_52054641_5E89_EB70_41D4_E7201447E08C"],"id":"videores_52490E65_43C1_FDAB_41D0_9F6080575776"},{"id":"sequence_495A974D_43C1_ABFB_4197_0CFB908AFFAD","movements":[{"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","easing":"linear","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5}],"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence"},{"image":"this.res_4D985FE7_43C6_BAB7_41C1_5D6BEB08DCFE","distance":50,"inertia":false,"useHandCursor":false,"class":"TripodCapPanoramaOverlay","angle":0,"rotate":false,"hfov":45,"id":"panorama_4800C5DC_43C1_EE9A_41CB_D2F65D055F94_tcap0"},{"enabledInCardboard":true,"maps":[],"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"image":"this.res_4C97B47D_43C2_AD9B_41B3_B8BE9571BDAC","distance":50,"yaw":124.28,"pitch":-22.16,"vfov":12.6,"class":"HotspotPanoramaOverlayImage","data":{"label":"large-removebg-preview"},"verticalAlign":"middle","horizontalAlign":"center","hfov":13.31,"scaleMode":"fit_inside"}],"areas":["this.HotspotPanoramaOverlayArea_4D422B31_43C6_7BAB_41BE_21E71EEFE2FA"],"data":{"label":"large-removebg-preview"},"id":"overlay_4CF2BA26_43C6_65A9_418C_B5CC12E1BFB6"},{"enabledInCardboard":true,"maps":[],"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"image":"this.AnimatedImageResource_5231A74B_5E89_E971_41CF_E28FAB90F322","distance":50,"yaw":122.12,"pitch":-17.23,"rotationY":-8.15,"rotationX":4.38,"scaleMode":"fit_inside","data":{"label":"CLIQUE"},"class":"HotspotPanoramaOverlayImage","roll":0.06,"verticalAlign":"middle","horizontalAlign":"center","hfov":11.68,"vfov":14.46}],"areas":["this.HotspotPanoramaOverlayArea_4C151C1B_43C1_9D9F_419A_BF1B69E0FDC2"],"data":{"label":"CLIQUE"},"id":"overlay_4C59CBD9_43C1_9A9B_4195_1DDB688B885E"},{"enabledInCardboard":true,"maps":[],"data":{"label":"Arrow 04b","hasPanoramaAction":true},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"image":"this.AnimatedImageResource_52310752_5E89_E913_41D0_412971DD529E","distance":100,"yaw":-104.43,"pitch":-15.51,"vfov":25.16,"class":"HotspotPanoramaOverlayImage","data":{"label":"Arrow 04b"},"verticalAlign":"middle","horizontalAlign":"center","hfov":25.41,"scaleMode":"fit_inside"}],"areas":["this.HotspotPanoramaOverlayArea_53F7A7F7_43C3_AA97_41C5_959EA45E3129"],"id":"overlay_4C3907CF_43C3_AAF7_41C3_63B7D97E21F4"},{"maps":[],"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"image":{"class":"ImageResource","levels":[{"height":364,"width":334,"class":"ImageResourceLevel","url":"media/panorama_4800C5DC_43C1_EE9A_41CB_D2F65D055F94_HS_jrpvywis.png"}]},"distance":50,"yaw":-70.71,"data":{"label":"Poligono"},"class":"HotspotPanoramaOverlayImage","hfov":19.64,"pitch":-48.8,"vfov":21.31}],"areas":["this.HotspotPanoramaOverlayArea_5278DEEA_43C1_BAB9_41B2_FFB984F6E52D"],"data":{"label":"Poligono"},"id":"overlay_52865ED4_43C1_BAE9_41C8_8678175E0B30"},{"enabledInCardboard":true,"maps":[],"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"image":"this.AnimatedImageResource_5232E754_5E89_E917_41B1_D06CAC144CB9","distance":50,"yaw":-82.41,"pitch":-42.31,"vfov":15.61,"class":"HotspotPanoramaOverlayImage","data":{"label":"CLIQUE"},"verticalAlign":"middle","horizontalAlign":"center","hfov":8.55,"scaleMode":"fit_inside"}],"areas":["this.HotspotPanoramaOverlayArea_511AC4D3_43C1_EEEF_41CE_40D755D32BC4"],"data":{"label":"CLIQUE"},"id":"overlay_513C249E_43C1_EE99_418D_09D947757AF4"},{"framerate":29.97,"width":3840,"url":trans('videolevel_520B95B2_5E89_E910_41CE_4D0045732327.url'),"posterURL":trans('videolevel_520B95B2_5E89_E910_41CE_4D0045732327.posterURL'),"height":1920,"class":"VideoResourceLevel","type":"application/x-mpegurl","id":"videolevel_520B95B2_5E89_E910_41CE_4D0045732327"},{"framerate":29.97,"width":3840,"bitrate":16572,"url":trans('videolevel_520B95C1_5E89_E970_41B1_20F28C8D0E8F.url'),"posterURL":trans('videolevel_520B95C1_5E89_E970_41B1_20F28C8D0E8F.posterURL'),"height":1920,"class":"VideoResourceLevel","type":"video/mp4","id":"videolevel_520B95C1_5E89_E970_41B1_20F28C8D0E8F"},{"levels":[{"height":1024,"width":1024,"class":"ImageResourceLevel","url":"media/res_4D985FE7_43C6_BAB7_41C1_5D6BEB08DCFE_0.png"}],"class":"ImageResource","id":"res_4D985FE7_43C6_BAB7_41C1_5D6BEB08DCFE"},{"class":"AnimatedImageResource","colCount":4,"frameCount":24,"levels":[{"height":1020,"width":680,"class":"ImageResourceLevel","url":"media/res_52E001A5_43C1_A6AB_419F_09F478331FF8_0.png"}],"frameDuration":41,"rowCount":6,"id":"AnimatedImageResource_52327755_5E89_E911_4170_7DDFA7C416D8"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.openLink(this.translate('LinkBehaviour_5339FA5C_43C2_A599_41D0_A9D6E8603133.source'), '_blank')","id":"HotspotPanoramaOverlayArea_4C28A7C6_43C1_EAE9_41B9_31D664F32C51"},{"levels":[{"height":119,"width":119,"class":"ImageResourceLevel","url":"media/res_574BFD98_4442_9E99_41C8_4DA5752EED88_0.png"}],"class":"ImageResource","id":"res_574BFD98_4442_9E99_41C8_4DA5752EED88"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.WebFrame_52435835_5E89_E710_41BB_B31121DFD7AB.set('url', this.translate('PopupWebFrameBehaviour_569ADA0E_4442_6579_41C5_8BAA09BD669F.url')); this.showWindow(this.window_569DAA08_4442_6579_41C1_541231190E14, null, false)","id":"HotspotPanoramaOverlayArea_55297518_4441_EF99_41CE_A11B680524D3"},{"class":"AnimatedImageResource","colCount":4,"frameCount":21,"levels":[{"height":420,"width":480,"class":"ImageResourceLevel","url":"media/res_53C98A1D_43C1_A59B_41AD_05C5C1B90C11_0.png"}],"frameDuration":41,"rowCount":6,"id":"AnimatedImageResource_52322756_5E89_E913_41B6_E60D5500BFA5"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_52436836_5E89_E710_41BA_6576804AC9D8, 115.75384615384615, 0.21896243291592216, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 0)","id":"HotspotPanoramaOverlayArea_57D49955_4446_A7EB_41CE_D7259A658067"},{"framerate":29.97,"width":3840,"url":trans('videolevel_52055640_5E89_EB6F_41D1_1A3A1A540AF7.url'),"posterURL":trans('videolevel_52055640_5E89_EB6F_41D1_1A3A1A540AF7.posterURL'),"height":1920,"class":"VideoResourceLevel","type":"application/x-mpegurl","id":"videolevel_52055640_5E89_EB6F_41D1_1A3A1A540AF7"},{"framerate":29.97,"width":3840,"bitrate":16572,"url":trans('videolevel_52054641_5E89_EB70_41D4_E7201447E08C.url'),"posterURL":trans('videolevel_52054641_5E89_EB70_41D4_E7201447E08C.posterURL'),"height":1920,"class":"VideoResourceLevel","type":"video/mp4","id":"videolevel_52054641_5E89_EB70_41D4_E7201447E08C"},{"levels":[{"height":179,"width":318,"class":"ImageResourceLevel","url":"media/res_4C97B47D_43C2_AD9B_41B3_B8BE9571BDAC_0.png"}],"class":"ImageResource","id":"res_4C97B47D_43C2_AD9B_41B3_B8BE9571BDAC"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.openLink(this.translate('LinkBehaviour_525B0825_43C3_A5AA_41BE_CE2E7D6B79C7.source'), '_blank')","id":"HotspotPanoramaOverlayArea_4D422B31_43C6_7BAB_41BE_21E71EEFE2FA"},{"class":"AnimatedImageResource","colCount":1,"frameCount":2,"levels":[{"height":558,"width":279,"class":"ImageResourceLevel","url":"media/res_4C28B241_43C2_E5EB_41AA_D691BE603B3C_0.png"}],"frameDuration":300,"rowCount":2,"id":"AnimatedImageResource_5231A74B_5E89_E971_41CF_E28FAB90F322"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_4C151C1B_43C1_9D9F_419A_BF1B69E0FDC2"},{"class":"AnimatedImageResource","colCount":4,"frameCount":21,"levels":[{"height":420,"width":480,"class":"ImageResourceLevel","url":"media/res_53C98A1D_43C1_A59B_41AD_05C5C1B90C11_0.png"}],"frameDuration":41,"rowCount":6,"id":"AnimatedImageResource_52310752_5E89_E913_41D0_412971DD529E"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.mainPlayList.set('selectedIndex', 1)","id":"HotspotPanoramaOverlayArea_53F7A7F7_43C3_AA97_41C5_959EA45E3129"},{"mapColor":"image","class":"HotspotPanoramaOverlayArea","click":"this.WebFrame_5243E834_5E89_E710_41D0_85FFF891D545.set('url', this.translate('PopupWebFrameBehaviour_52353E09_43CE_9D7B_41B7_7A5EB719B40E.url')); this.showWindow(this.window_52347E08_43CE_9D79_41A0_D0956BAE2C15, null, false)","id":"HotspotPanoramaOverlayArea_5278DEEA_43C1_BAB9_41B2_FFB984F6E52D"},{"class":"AnimatedImageResource","colCount":1,"frameCount":2,"levels":[{"height":558,"width":279,"class":"ImageResourceLevel","url":"media/res_4C28B241_43C2_E5EB_41AA_D691BE603B3C_0.png"}],"frameDuration":300,"rowCount":2,"id":"AnimatedImageResource_5232E754_5E89_E917_41B1_D06CAC144CB9"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_511AC4D3_43C1_EEEF_41CE_40D755D32BC4"}],"paddingRight":0,"class":"Player","width":"100%","horizontalAlign":"left","mouseWheelEnabled":true,"scrollBarOpacity":0.5,"backgroundColorRatios":[0],"defaultVRPointer":"laser","mobileMipmappingEnabled":false,"backgroundOpacity":1,"height":"100%","backgroundColorDirection":"vertical","verticalAlign":"top","backgroundColor":["#663300"],"downloadEnabled":false,"vrPolyfillScale":0.75,"layout":"absolute","scrollBarColor":"#000000","scrollBarVisible":"rollOver","scripts":{"translate":TDV.Tour.Script.translate,"resumePlayers":TDV.Tour.Script.resumePlayers,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"executeJS":TDV.Tour.Script.executeJS,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getKey":TDV.Tour.Script.getKey,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"isPanorama":TDV.Tour.Script.isPanorama,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"quizShowScore":TDV.Tour.Script.quizShowScore,"initAnalytics":TDV.Tour.Script.initAnalytics,"openLink":TDV.Tour.Script.openLink,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"clone":TDV.Tour.Script.clone,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"init":TDV.Tour.Script.init,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getMainViewer":TDV.Tour.Script.getMainViewer,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getMediaByName":TDV.Tour.Script.getMediaByName,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getComponentByName":TDV.Tour.Script.getComponentByName,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"initQuiz":TDV.Tour.Script.initQuiz,"quizStart":TDV.Tour.Script.quizStart,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"cloneBindings":TDV.Tour.Script.cloneBindings,"playAudioList":TDV.Tour.Script.playAudioList,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"unregisterKey":TDV.Tour.Script.unregisterKey,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"cloneCamera":TDV.Tour.Script.cloneCamera,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"shareSocial":TDV.Tour.Script.shareSocial,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"textToSpeech":TDV.Tour.Script.textToSpeech,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"mixObject":TDV.Tour.Script.mixObject,"downloadFile":TDV.Tour.Script.downloadFile,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"quizFinish":TDV.Tour.Script.quizFinish,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"showPopupImage":TDV.Tour.Script.showPopupImage,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"showWindow":TDV.Tour.Script.showWindow,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setLocale":TDV.Tour.Script.setLocale,"registerKey":TDV.Tour.Script.registerKey,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"historyGoForward":TDV.Tour.Script.historyGoForward,"setValue":TDV.Tour.Script.setValue,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getPixels":TDV.Tour.Script.getPixels,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"historyGoBack":TDV.Tour.Script.historyGoBack,"existsKey":TDV.Tour.Script.existsKey,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getOverlays":TDV.Tour.Script.getOverlays,"setMapLocation":TDV.Tour.Script.setMapLocation,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio},"desktopMipmappingEnabled":false,"scrollBarMargin":2,"start":"this.init()","minHeight":0,"propagateClick":false,"shadow":false,"backgroundPreloadEnabled":true,"mediaActivationMode":"window","minWidth":0,"data":{"defaultLocale":"pt","name":"Player760","locales":{"pt":"locale/pt.txt"},"textToSpeechConfig":{"speechOnTooltip":false,"stopBackgroundAudio":false,"volume":1,"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"pitch":1,"rate":1}}};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['history'] = {};
script['scripts']['createQuizConfig'] = createQuizConfig;
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2022.1.30.js.map
})();
//Generated with v2022.1.30, Wed Nov 9 2022