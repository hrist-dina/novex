import $ from "jquery";
import {Menu} from "../classes/Menu";
import {ScrollToPage} from "../classes/ScrollToPage";
import {Paginator} from "../classes/Paginator";
import {DeviceClassesSetter} from "../classes/DeviceClassesSetter";


export class MainPageCntl {
    constructor() {
        this.init();
    }

    init() {
        this.initDeviceClassesSetter();
        this.initMenu();
        this.initScrollToPage();
        this.initPaginator();
    }

    initDeviceClassesSetter() {
        this.deviceClassesSetter = new DeviceClassesSetter();
        this.deviceClassesSetter.init();
    };

    initMenu() {
        this.menu = new Menu({
            menu: $('.js-menu'),
            menuBtn: $('.js-menu-panel'),
            scrollOwner: $('.js-page-scroll-owner')
        });
        this.menu.init();
    }

    initScrollToPage() {
        this.scrollToPage = new ScrollToPage({
            pages: $('.js-page')
        });
        this.scrollToPage.init();
    }

    initPaginator() {
        this.paginator = new Paginator({
            scrollOwner: $('.js-page-scroll-owner')
        });
        this.paginator.init();
    }
}


//
// /*
//
// MainPageCntl = function() {
//     this.init();
// };
//
// MainPageCntl.prototype.init = function() {
//     var self = this;
//     // self.initDeviceClassesSetter();
//     // self.initLayoutsSizesSetter();
//     // self.initPaginator();
//     // self.initTicketForm();
//     self.initMenu();
//     // self.initCountDown();
//     // self.checkActionStatus();
//     // self.initSwiper();
//     // self.initNavigationWinners();
//     // self.initActiveForMobile();
//     // self.events();
// };
//
//
// /* Events */
//
// MainPageCntl.prototype.events = function() {
//     this.bindScrollLinks();
//     this.bindShowCheck();
//     this.bindHideCheck();
// };
//
// MainPageCntl.prototype.bindScrollLinks = function() {
//     var self = this;
//     $('.js-scroll-link').on('click', function( event ) {
//         event.preventDefault();
//         self.scrollToHref( $(this) );
//     });
// };
//
// MainPageCntl.prototype.bindShowCheck = function() {
//     $('.js-show-check').on('click', function( event ) {
//         event.preventDefault();
//         $('.js-full-container-popup').fadeIn();
//     });
// };
//
// MainPageCntl.prototype.bindHideCheck = function() {
//     var checkPopup = $('.js-full-container-popup');
//     checkPopup.find('.full-container-popup__closer').on('click', function( event ) {
//         event.preventDefault();
//         checkPopup.fadeOut();
//     });
// };
//
// /* Methods */
//
// MainPageCntl.prototype.initDeviceClassesSetter = function() {
//     this.deviceClassesSetter = new DeviceClassesSetter();
//     this.deviceClassesSetter.init();
// };
//
// MainPageCntl.prototype.initLayoutsSizesSetter = function() {
//     this.layoutSizesSetter = new LayoutSizesSetter({layouts: $('.js-layout-set-height')});
//     this.layoutSizesSetter.init();
// };
//
// MainPageCntl.prototype.initPaginator = function() {
//     this.paginator = new Paginator({
//         scrollOwner: $('.js-page-scroll-owner')
//     });
//     this.paginator.init();
// };
//
// MainPageCntl.prototype.initTicketForm = function() {
//     this.ticketForm = new TicketForm({
//         form: $('.js-ticket-form')
//     });
//     this.ticketForm.init();
// };
//
// MainPageCntl.prototype.initMenu = function() {
//     this.menu = new Menu({
//         menu: $('.js-menu'),
//         menuBtn: $('.js-menu-panel'),
//         scrollOwner: $('.js-page-scroll-owner')
//     });
//     this.menu.init();
// };
//
// MainPageCntl.prototype.initCountDown = function() {
//     var countDownWrapper = $('.js-countdown-wrapper');
//
//     this.countDownMainPage = new CountDown({
//         selector: $('.js-countdown-main-page'),
//         startTime: window.CONFIG.startTime,
//         finishTime: window.CONFIG.finishTime,
//         currentTime: window.CONFIG.currentTime,
//         counterPoints: window.CONFIG.counterPoints,
//         onTimeFinished: function() {countDownWrapper.hide()}
//     });
//     this.countDownMainPage.init();
// };
//
// MainPageCntl.prototype.checkActionStatus = function() {
//     if ( window.CONFIG.actionStatus === -1 ) {//не началась
//         $('.js-ticket-form-success-before-action').show();
//     } else if ( window.CONFIG.actionStatus === 0 ) {//идет
//
//     } else if ( window.CONFIG.actionStatus === 1 ) {//закончилась
//         $('.js-ticket-form-success-after-action').show();
//     }
// };
//
// MainPageCntl.prototype.scrollToHref = function( link ) {
//     var self = this;
//     var scrollToElem = $( link.attr('href') );
//     self.paginator.scrollTo( scrollToElem );
//     self.menu.closeMenu();
// };
//
// MainPageCntl.prototype.initSwiper = function() {
//     this.swiper = new Swiper('.js-swiper-container', {
//         direction: 'horizontal',
//         navigation: {
//             nextEl: '.js-winners__nav-right',
//             prevEl: '.js-winners__nav-left'
//         },
//         pagination: {
//             el: '.js-swiper-pagination',
//             type: 'bullets'
//         },
//         slidesPerView: 1,
//         autoplay: {
//             delay: 5000,
//             disableOnInteraction: false
//         }
//     })
// };
//
// MainPageCntl.prototype.initNavigationWinners = function () {
//     var winners = $('.js-winners__list').find('.winners__item').length;
//     if (winners >= 3) {
//         $('.js-winners__navigation').show();
//     }
// };
//
// // хак для :active на мобайле
// MainPageCntl.prototype.initActiveForMobile = function () {
//     // $('.winners__navigation')[0].addEventListener("touchstart", function(){}, true);
// };
