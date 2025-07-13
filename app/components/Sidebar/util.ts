const init = () => {
  /**
   * Theme functions file.
   *
   * Contains handlers for navigation and widget area.
   */

  // @ts-expect-error
  const $ = window.jQuery

  const screenReaderText = {
    expand: "<span class='screen-reader-text'>expand child menu</span>",
    collapse: "<span class='screen-reader-text'>collapse child menu</span>",
  }

  ;(function() {
    var $body,
      $window,
      $sidebar,
      adminbarOffset,
      top = false,
      bottom = false,
      windowWidth,
      windowHeight,
      lastWindowPos = 0,
      topOffset = 0,
      bodyHeight,
      sidebarHeight,
      secondary,
      button

    function initMainNavigation(container) {
      // Add dropdown toggle that display child menu items.
      container
        .find(".menu-item-has-children > a")
        .after(
          '<button class="dropdown-toggle" aria-expanded="false">' +
            screenReaderText.expand +
            "</button>"
        )

      // Toggle buttons and submenu items with active children menu items.
      container.find(".current-menu-ancestor > button").addClass("toggle-on")
      container
        .find(".current-menu-ancestor > .sub-menu")
        .addClass("toggled-on")

      container.find(".dropdown-toggle").click(function(e) {
        var _this = $(this)
        e.preventDefault()
        _this.toggleClass("toggle-on")
        _this.next(".children, .sub-menu").toggleClass("toggled-on")
        _this.attr(
          "aria-expanded",
          _this.attr("aria-expanded") === "false" ? "true" : "false"
        )
        _this.html(
          _this.html() === screenReaderText.expand
            ? screenReaderText.collapse
            : screenReaderText.expand
        )
      })
    }
    initMainNavigation($(".main-navigation"))

    secondary = $("#secondary")
    button = $(".site-branding").find(".secondary-toggle")

    // Enable menu toggle for small screens.
    ;(function() {
      var menu, widgets, social
      if (!secondary.length || !button.length) {
        return
      }

      // Hide button if there are no widgets and the menus are missing or empty.
      menu = secondary.find(".nav-menu")
      widgets = secondary.find("#widget-area")
      social = secondary.find("#social-navigation")
      if (
        !widgets.length &&
        !social.length &&
        (!menu.length || !menu.children().length)
      ) {
        button.hide()
        return
      }

      button.on("click.twentyfifteen", function() {
        secondary.toggleClass("toggled-on")
        secondary.trigger("resize")
        $(this).toggleClass("toggled-on")
        if ($(this, secondary).hasClass("toggled-on")) {
          $(this).attr("aria-expanded", "true")
          secondary.attr("aria-expanded", "true")
        } else {
          $(this).attr("aria-expanded", "false")
          secondary.attr("aria-expanded", "false")
        }
      })
    })()

    // Sidebar scrolling.
    function resize() {
      windowWidth = $window.width()

      if (955 > windowWidth) {
        top = bottom = false
        $sidebar.removeAttr("style")
      }
    }

    function scroll() {
      var windowPos = $window.scrollTop()

      if (955 > windowWidth) {
        return
      }

      sidebarHeight = $sidebar.height()
      windowHeight = $window.height()
      bodyHeight = $body.height()

      if (sidebarHeight + adminbarOffset > windowHeight) {
        if (windowPos > lastWindowPos) {
          if (top) {
            top = false
            topOffset =
              $sidebar.offset().top > 0
                ? $sidebar.offset().top - adminbarOffset
                : 0
            $sidebar.attr("style", "top: " + topOffset + "px;")
          } else if (
            !bottom &&
            windowPos + windowHeight > sidebarHeight + $sidebar.offset().top &&
            sidebarHeight + adminbarOffset < bodyHeight
          ) {
            bottom = true
            $sidebar.attr("style", "position: fixed; bottom: 0;")
          }
        } else if (windowPos < lastWindowPos) {
          if (bottom) {
            bottom = false
            topOffset =
              $sidebar.offset().top > 0
                ? $sidebar.offset().top - adminbarOffset
                : 0
            $sidebar.attr("style", "top: " + topOffset + "px;")
          } else if (
            !top &&
            windowPos + adminbarOffset < $sidebar.offset().top
          ) {
            top = true
            $sidebar.attr("style", "position: fixed;")
          }
        } else {
          top = bottom = false
          topOffset =
            $sidebar.offset().top > 0
              ? $sidebar.offset().top - adminbarOffset
              : 0
          $sidebar.attr("style", "top: " + topOffset + "px;")
        }
      } else if (!top) {
        top = true
        $sidebar.attr("style", "position: fixed;")
      }

      lastWindowPos = windowPos
    }

    function resizeAndScroll() {
      resize()
      scroll()
    }

    $(document).ready(function() {
      $body = $(document.body)
      $window = $(window)
      $sidebar = $("#sidebar").first()
      adminbarOffset = $body.is(".admin-bar") ? $("#wpadminbar").height() : 0

      $sidebar.on(
        "click.twentyfifteen keydown.twentyfifteen",
        "button",
        resizeAndScroll
      )

      resizeAndScroll()

      for (var i = 1; i < 6; i++) {
        setTimeout(resizeAndScroll, 100 * i)
      }
    })
  })()
}

export const sidebarUtil = () => {
  const id = setInterval(() => {
	// @ts-expect-error
    if (typeof window.jQuery === "function") {
      clearInterval(id)
      setTimeout(init, 100)
    }
  }, 100)
}
