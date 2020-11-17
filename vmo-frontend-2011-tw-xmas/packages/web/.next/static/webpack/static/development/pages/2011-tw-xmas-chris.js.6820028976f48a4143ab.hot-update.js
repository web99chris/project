webpackHotUpdate("static\\development\\pages\\2011-tw-xmas-chris.js",{

/***/ "./components/leaderboard/style.ts":
/*!*****************************************!*\
  !*** ./components/leaderboard/style.ts ***!
  \*****************************************/
/*! exports provided: WrapTitle, WrapFilter, NoData, WrapLeaderboardItem, FrameBorder, ToggleButton, BonusToggleButton, WrapPanel, WrapMission, WrapMetaScore, WrapBonusPanel, Borderline, MissionPanelWrap, MissionItem, UserAvatar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrapTitle", function() { return WrapTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrapFilter", function() { return WrapFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoData", function() { return NoData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrapLeaderboardItem", function() { return WrapLeaderboardItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrameBorder", function() { return FrameBorder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleButton", function() { return ToggleButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BonusToggleButton", function() { return BonusToggleButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrapPanel", function() { return WrapPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrapMission", function() { return WrapMission; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrapMetaScore", function() { return WrapMetaScore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrapBonusPanel", function() { return WrapBonusPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Borderline", function() { return Borderline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MissionPanelWrap", function() { return MissionPanelWrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MissionItem", function() { return MissionItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAvatar", function() { return UserAvatar; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _themes_images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../themes/images */ "./themes/images.ts");
// 2002-tw-alliance


const WrapTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "style__WrapTitle",
  componentId: "sc-2omn6c-0"
})(["text-align:center;font-size:20px;text-shadow:0 0 13px #fbf6d5;font-weight:600;letter-spacing:2.75px;color:#fbf6d5;margin-top:10.62vw;@media screen and (min-width:800px){margin-top:calc((800 / 828) * 88px);}"]);
const WrapFilter = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "style__WrapFilter",
  componentId: "sc-2omn6c-1"
})(["margin:0px auto;padding-top:10px;position:relative;background-color:rgba(9,0,59,0.92);width:100%;&:after{content:'';display:flex;flex-direction:row;width:90%;border:1px solid #ce9914;margin:0 auto;@media screen and (max-width:800px){width:90%;}}@media screen and (min-width:800px){padding:10px 15px;}input{font-size:1rem;width:90%;height:36px;display:flex;justify-content:center;line-height:1;padding-left:13px;padding-right:60px;outline:none;color:#D5AD48;margin:0 auto 20px;border-radius:50px;border:none;position:relative;&::-webkit-input-placeholder{line-height:16px;}&:-moz-placeholder{line-height:16px;}&:-ms-input-placeholder{line-height:16px;}}"]);
const NoData = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "style__NoData",
  componentId: "sc-2omn6c-2"
})(["color:white;width:100%;text-align:center;padding-bottom:32px;font-weight:600;line-height:60px;padding-top:15px;"]);
const WrapLeaderboardItem = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "style__WrapLeaderboardItem",
  componentId: "sc-2omn6c-3"
})(["position:relative;overflow:hidden;.user-name{width:", ";}"], props => props.withButton ? 'calc(100% - 85px)' : '100%');
const FrameBorder = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "style__FrameBorder",
  componentId: "sc-2omn6c-4"
})(["border:1px solid #ce9914;background-size:100% 100%;position:relative;"]); // export const FrameBorder = styled.div`
//   background: url(${images.rankBg}) center;
//   background-size: 100% 100%;
//   padding: 0 3px;
//   position: relative;
//   border-radius: 25px;
//   border-bottom-left-radius: 40px;
//   border-bottom-right-radius: 40px;
//   &:before {
//     content: '';
//     position: absolute;
//     top: -3px;
//     left: 0;
//     width: 100%;
//     height: 25px;
//     z-index: 1;
//     background: url(${images.rankTopBg}) center no-repeat;
//     background-size: 100%;
//     background-position: top;
//   }
//   &:after {
//     content: '';
//     position: absolute;
//     bottom: 7px;
//     left: 0;
//     width: 100%;
//     height: 30px;
//     z-index: 1;
//     background: url(${images.rankBottomBg}) center no-repeat;
//     background-size: 100%;
//     background-position: bottom;
//   }
// `;

const ToggleButton = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "style__ToggleButton",
  componentId: "sc-2omn6c-5"
})(["width:80px;height:50px;@media screen and (max-width:800px){width:50px;height:35px;}position:absolute;top:-10px;left:45%;z-index:11;background:url(", ") center no-repeat;background-size:100%;"], props => props.isOpen ? _themes_images__WEBPACK_IMPORTED_MODULE_1__["default"].missionTab : _themes_images__WEBPACK_IMPORTED_MODULE_1__["default"].missionTab);
const BonusToggleButton = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "style__BonusToggleButton",
  componentId: "sc-2omn6c-6"
})(["width:60px;height:24px;position:absolute;top:30px;right:16px;z-index:11;background:url(", ");center no-repeat;background-size:100%;@media screen and (max-width:800px){width:50px;height:20px;}"], props => props.isOpen ? _themes_images__WEBPACK_IMPORTED_MODULE_1__["default"].plusOff : _themes_images__WEBPACK_IMPORTED_MODULE_1__["default"].plusOn);
const WrapPanel = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "style__WrapPanel",
  componentId: "sc-2omn6c-7"
})(["background:url(", ");background-size:cover;width:98%;height:100%;margin:0 auto;"], _themes_images__WEBPACK_IMPORTED_MODULE_1__["default"].missionBG);
const WrapMission = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "style__WrapMission",
  componentId: "sc-2omn6c-8"
})(["width:100%;height:80px;background-color:#090029;border:1px solid #ce9914;border-radius:15px;display:flex;flex-direction:column;margin-top:10px;padding-left:15px;position:relative;&:after{content:'';width:45px;height:49px;position:absolute;right:15px;top:15px;z-index:1;background:url(", ") center no-repeat;background-size:cover;}.mission-title{position:absolute;top:-25px;width:90px;height:26px;border-radius:15px;line-height:26px;color:#ffffff;background:url(", ");background-size:cover;box-shadow:0 4px 4px rgba(0,0,0,0.5);text-align:center;margin:20px 12px 0 0;}.mission-description{margin-top:20px;line-height:16px;font-size:13px;text-align:left;margin-left:10px;display:flex;flex-direction:row;justify-content:space-between;align-content:center;margin-right:70px;}.mission-threshold{color:#808080;}"], props => props.isChecked ? _themes_images__WEBPACK_IMPORTED_MODULE_1__["default"].checkon : _themes_images__WEBPACK_IMPORTED_MODULE_1__["default"].checkoff, _themes_images__WEBPACK_IMPORTED_MODULE_1__["default"].missionTitle);
const WrapMetaScore = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(WrapMission).withConfig({
  displayName: "style__WrapMetaScore",
  componentId: "sc-2omn6c-9"
})(["&:after{background:none;}"]); //-------------------------------------------------------------------

const WrapBonusPanel = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "style__WrapBonusPanel",
  componentId: "sc-2omn6c-10"
})(["width:100%;height:100%;background-color:#070027;padding-top:10px;.bonus_title{font-size:14px;text-align:center;color:#ffffff;line-height:1.14;text-shadow:0 0 1px #ffddaf;margin:15px auto 10px auto;}& > section{width:calc(100% - 112px);margin:0 auto;color:#cdd7fe;& > div{display:flex;justify-content:space-between;align-content:center;border-bottom:1px dashed #807d7a;font-size:14px;line-height:2;}}"]);
const Borderline = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "style__Borderline",
  componentId: "sc-2omn6c-11"
})(["width:100%;height:2px;border:1px solid #ce9914;position:relative;top:17px;z-index:10;"]);

const calcBottom = (isOpen, withUserInfo) => {
  if (isOpen) return 0;
  if (withUserInfo) return '-490px';
  return '-420px';
};

const MissionPanelWrap = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "style__MissionPanelWrap",
  componentId: "sc-2omn6c-12"
})(["position:fixed;bottom:", ";height:", ";z-index:100;width:100%;background:url(", ") center no-repeat;background-size:cover;padding:0 18px;transition:all 0.2s ease 0s;> div{max-width:690px;margin:0 auto;}.mission-button{width:100%;height:34px;background:url(", ") center no-repeat;background-size:contain;transform:rotate(", ");margin-top:", ";margin-bottom:", ";}.mission-user{display:flex;justify-content:flex-start;align-content:center;}.mission-user_info{display:flex;justify-content:space-between;align-content:center;flex-direction:column;padding:13px 0;}.mission-user_info--user_name{font-size:14px;font-weight:500;}.mission-user_info--user_score{font-size:16px;font-weight:500;color:#ce9914;}"], props => calcBottom(props.isOpen, props.withUserInfo), props => props.withUserInfo ? '490px' : '420px', _themes_images__WEBPACK_IMPORTED_MODULE_1__["default"].missionBg, _themes_images__WEBPACK_IMPORTED_MODULE_1__["default"].missionBtn, props => props.isOpen ? '180deg' : '0deg', props => props.isOpen ? '0' : '-34px', props => props.isOpen ? '0' : '34px');
const MissionItem = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "style__MissionItem",
  componentId: "sc-2omn6c-13"
})(["height:92px;width:100%;border-radius:13px;box-shadow:inset 0 0 5px 0 rgba(0,0,0,0.5);border:solid 1px #ce9914;background-color:#090029;margin-top:30px;padding:26px 37px 13px;position:relative;font-size:12px;@media (max-width:320px){padding-left:17px;}.mission-score{color:", ";}&:before{content:'", "';position:absolute;width:123px;height:39px;z-index:10;background:url(", ") center no-repeat;background-size:100%;top:-20px;left:20px;text-shadow:0 0 4px #6f4f23;text-align:center;font-size:14px;font-weight:600;color:#ffffff;line-height:39px;letter-spacing:0.44px;}&:after{content:'';position:absolute;top:15px;right:37px;z-index:10;width:63px;height:63px;background:url(", ") center no-repeat;background-size:100%;@media (max-width:320px){right:17px;}}"], props => props.checked ? '#fff1ae' : '#808080', props => props.title, _themes_images__WEBPACK_IMPORTED_MODULE_1__["default"].missionTitleBg, props => props.checked ? _themes_images__WEBPACK_IMPORTED_MODULE_1__["default"].missionTickOn : _themes_images__WEBPACK_IMPORTED_MODULE_1__["default"].missionTickOff);
const UserAvatar = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.attrs(props => ({
  style: {
    background: props.style.background
  }
})).withConfig({
  displayName: "style__UserAvatar",
  componentId: "sc-2omn6c-14"
})(["width:63px;height:63px;border-radius:50%;border:1px solid #fff;margin-right:20px;background-size:cover;box-shadow:'rgb(0, 234, 255) 0px 0px 7px 1px';"]);

/***/ })

})
//# sourceMappingURL=2011-tw-xmas-chris.js.6820028976f48a4143ab.hot-update.js.map