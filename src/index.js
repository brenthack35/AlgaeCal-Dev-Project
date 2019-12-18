// import {ProductBundles} from "./modules/ProductBundles";
import './styles/main.scss';
import loadSVGs from './modules/svg-replace';
import 'popper.js';
import 'bootstrap';

document.addEventListener('DOMContentLoaded', () => {
  loadSVGs();

  // Hide Percent Off if value = 0
  var a = document.querySelectorAll('[data-total-savings-amount]');
  for (var i in a) if (a.hasOwnProperty(i)) {
      a[0].style.display = 'none';
  }

    $.ajax({
        url: 'https://www.algaecal.com/wp-json/acf/v3/options/options',
        method: "GET",
        type: "JSON",
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify(),
        success: function (data) {
            console.log(data);
            var main = data;
            $('#refundModal .modal-body').html(main);
        }
    })

});
