(function (c) {
    var f = function (d) {
        function a(a) { b.el.css({ webkitTransition: a, mozTransition: a, msTransition: a, oTransition: a, transition: a }) } function c() { a("left " + b.duration + "s " + b.effect); b.el.css({ left: b.width + "px" }) } function e() { a("none"); b.el.css({ left: 0 }); setTimeout(c, 1E3 * b.loop) } var b = d || {}; return {
            initialize: function () {
                var a, c; b.container.css({ overflow: "hidden" }); b.el.css({ whiteSpace: "nowrap", position: "relative" }); a = b.el.width(); c = b.container.width(); a > c && (b.width = -1 * (a + 3), b.el.append(" " + b.el.html()),
                b.el.on("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", e), e())
            }
        }
    }; c.fn.jTicker = function () { var d; return this.each(function () { var a; a = c(this); a = { container: a, el: a.children("span").first(), duration: a.data().duration || 50, loop: a.data().loop || 1, effect: a.data().effect || "" }; d = new f(a); d.initialize() }) }
})(jQuery);