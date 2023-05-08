var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from "styled-components";
import React from "react";
import { createPortal } from "react-dom";
var Modal = function (_a) {
    var children = _a.children, closeModal = _a.closeModal, _b = _a.canBackdropClickClose, canBackdropClickClose = _b === void 0 ? true : _b;
    return createPortal(_jsxs("div", { children: [_jsx(Backdrop, { onClick: canBackdropClickClose ? closeModal : undefined }), _jsx(Container, { children: children })] }), document.getElementById("modal-root"));
};
var Backdrop = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  background: rgba(0, 0, 0, 0.35);\n"], ["\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  background: rgba(0, 0, 0, 0.35);\n"])));
var Container = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n\n  height: 227px;\n  padding: 34px 30px;\n\n  border-radius: 8px 8px 0px 0px;\n  background: white;\n"], ["\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n\n  height: 227px;\n  padding: 34px 30px;\n\n  border-radius: 8px 8px 0px 0px;\n  background: white;\n"])));
export default React.memo(Modal);
var templateObject_1, templateObject_2;
