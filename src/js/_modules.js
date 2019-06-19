import burger from "./modules/burger";
import FixedElementClearance from "./modules/FixedElementClearance";
import LazyLoad from "vanilla-lazyload";
import MenuToggle from "./modules/MenuToggle";

import Modal from "./modules/ExiaModal";
import slides from "./modules/slides";

export default () => {
    burger();
    slides();

    new LazyLoad({ elements_selector: ".lazy" });

    new FixedElementClearance({
        element: ".js-get-main-header-wrapper-height",
        CSSVariableName: "main-header-wrapper-height",
    });

    new MenuToggle({
        menuToggle: [".js-main-menu-mobile-toggle"],
        menuElement: ".main-menu-mobile",
        menuClose: [".js-close-menu-mobile"],
        activeBodyClass: "mobile-menu-is-open",
        breakpointToHide: 1200,
    });

    new Modal();
};
