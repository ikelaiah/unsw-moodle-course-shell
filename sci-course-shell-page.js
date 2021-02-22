(function () {
  if (window.jQuery) {
    $().ready(function () {
      // are we reading Page activity? if so, make the page title slightly bigger
      $("body#page-mod-page-view div[role=main] > h2").addClass(
        "cop-page-activity-title"
      );

      // make tables more readable
      // ading table classes for tables in Pages
      $("#page-mod-page-view div[role=main] .box.generalbox .no-overflow table")
        .not("table.activity-alert")
        .addClass("table table-bordered table-hover");
      $(
        "#page-mod-page-view div[role=main] .box.generalbox .no-overflow table"
      ).attr("cellpadding", "10");
      $(
        "#page-mod-page-view div[role=main] .box.generalbox .no-overflow table.activity-alert"
      ).addClass("w-100 mw-100 alert alert-primary");
      $(
        "#page-mod-page-view div[role=main] .box.generalbox .no-overflow table.activity-alert"
      ).attr("role", "alert");
      $(
        "#page-mod-page-view div[role=main] .box.generalbox .no-overflow table.activity-alert"
      ).attr("border", "0");
      $(
        "#page-mod-page-view div[role=main] .box.generalbox .no-overflow table.activity-alert"
      ).attr("cellpadding", "10");
    });
  }
})();
