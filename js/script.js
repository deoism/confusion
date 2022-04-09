$(function () {
  console.log("ready!");
  var netJson = "https://brooklynse.net/bkn/api/articles.json";

  $.getJSON(netJson).done(function (data) {
    let domain = data.meta;
    let articles = data.response.result;

    $("div#feature-left").html(
      `<img alt="image" class="col-md-3 img-fluid" src="${articles[0].listImage.mobile}"/>`
    );

    $("div#feature-right").html(
      `<h3 class="display-5 fw-bold lh-1 mb-3">FEATURE</h3>
      <h1 class="display-5 fw-bold lh-1 mb-3">
     ${articles[0].headline}
      </h1>
      <p class="lead">
       ${articles[0].tease}
      </p>
      <div class="d-grid gap-2 d-md-flex justify-content-md-start">
        <button class="btn btn-primary btn-lg px-4 me-md-2" href="google.com" type="button">
          view more
        </button>
      </div>`
    );
    //get video
    $.getJSON(
      "https://brooklynse.net/bkn/api/articles.json",
      { get_param: "value" },
      function (data) {
        $.each(data, function (index, element) {
          $("#Articles").html(
            $("<div>", {
              text: element.name
            })
          );
        });
      }
    );
    //get news articles
    $.getJSON(
      "https://brooklynse.net/bkn/api/articles.json",
      { get_param: "value" },
      function (data) {
        $.each(data, function (index, element) {
          $("div #Articles").append(
            $("<div>", {
              text: element.name
            })
          );
        });
      }
    );
    //sort for rest of results
    $.each(data.response.result, function (index, article) {
      console.log(index, article.type);
      //article sort and show
      $("div#Articles").html(`<div class="col-md-6 ">
      ${article.headline}<br>${article.title}<br>${article.teaser}
      </div>`);
    });
  });
});
