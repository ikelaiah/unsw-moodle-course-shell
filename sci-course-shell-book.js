(function () {
  if (window.jQuery) {
    $().ready(function () {
      // are we reading Moodle books? if so, make the book title slightly bigger
      $("div[role=main]:has(div.book_content) > h2").addClass("cop-book-title");

      // make tables readable
      // ading table classes for tables in Book activities
      $("div.book_content div.no-overflow table")
        .not("table.activity-alert")
        .addClass("table table-bordered table-hover");
      $("div.book_content div.no-overflow table").attr("cellpadding", "10");
      $("div.book_content div.no-overflow table.activity-alert").addClass(
        "w-100 mw-100 alert alert-primary"
      );
      $("div.book_content div.no-overflow table.activity-alert").attr(
        "role",
        "alert"
      );
      $("div.book_content div.no-overflow table.activity-alert").attr(
        "border",
        "0"
      );
      $("div.book_content div.no-overflow table.activity-alert").attr(
        "cellpadding",
        "10"
      );
    });
  }
})();
