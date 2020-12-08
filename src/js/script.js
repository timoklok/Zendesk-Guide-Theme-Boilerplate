import _copenhagen from "./copenhagen";
import _dropdowns from "./dropdowns";
import { getCategories, getSections, getArticles } from "./api";
import { render } from "./articleTree";

$(document).on("ready", function () {
  let categories = [];
  let sections = [];
  let articles = [];

  getCategories([], null, (categoriesArr) => {
    categories = categoriesArr;
    getSections([], null, (sectionsArr) => {
      sections = sectionsArr;
      getArticles([], null, (articlesArr) => {
        articles = articlesArr;
        render(categories, sections, articles);
      });
    });
  });
});

// // Prepopulate form via URL params

// var q = [];
// for (var k in field_data) {
//   if (field_data.hasOwnProperty(k)) {
//     q.push("request_fields[" + k + "]=" + encodeURIComponent(field_data[k]));
//   }
// }

// var zd_url = "https://greenberrynl.zendesk.com/hc/nl/requests/new?";
// var redirect_url = zd_url + q.join("&"); // replace link in theme

// jQuery(function ($) {
//   $(".new-request-url").attr("href", redirect_url);
//   if (!$("#new_request")) return;
//   var query = window.location.search.substring(1);
//   var vars = query.split("&");
//   var match, fieldID;
//   for (var i = 0; i < vars.length; i++) {
//     var pair = vars[i].split("=");
//     match = pair[0].match(/^request_fields\[([a-z_\d]+)\]$/);
//     if (match) {
//       fieldID = match[1];
//       $("#request_" + fieldID).val(decodeURIComponent(pair[1]));
//     }
//   }
// });
