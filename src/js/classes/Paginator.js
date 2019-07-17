import $ from "jquery";

export class Paginator {
    constructor(options) {
        this.scrollOwner = options.scrollOwner;
    }

    init() {
        this.events();
    }

    events() {

    }

    scrollTo(targetElem) {
        const self = this;
        $('body').hasClass('ios')
            ? $('body').animate({scrollTop: targetElem.offset().top})
            : self.scrollOwner.animate({scrollTop: self.scrollOwner.scrollTop() + targetElem.offset().top});
    }
}