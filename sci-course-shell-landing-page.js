(function () {
  if (window.jQuery) {
    $().ready(function () {
      // make tables more readable in collapsed topics and view all topics
      $(
        "body#page-course-view-topics table:not(div.section-summary-box table)"
      ).addClass("table table-hover table-bordered");
      $(
        "body#page-course-view-topcoll table:not(div.section-summary-box table)"
      ).addClass("table table-hover table-bordered");
    });
  }
})();
