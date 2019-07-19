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
        console.log(targetElem);

        $('body').hasClass('ios')
            ? $('body').animate({scrollTop: targetElem.offset().top})
            : this.scrollOwner.animate({scrollTop: this.scrollOwner.scrollTop() + targetElem.offset().top});
    }
}