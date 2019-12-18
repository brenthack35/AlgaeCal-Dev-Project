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


    // Fetch Data from Data Source and load into Modal
    var request = new XMLHttpRequest();

      request.open('GET', 'https://www.algaecal.com/wp-json/acf/v3/options/options', true);

      request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
          var resp = request.responseText;

          document.querySelector('#refundModal .modal-body').innerHTML = resp;
        }
      };

      request.send();

});
