// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)


// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

// External imports
import "bootstrap";


// Internal imports, e.g:
import { loadDynamicBannerText } from '../components/banner';
import { initFlatpickr_date } from "../plugins/flatpickr";
import { initFlatpickr_hour } from "../plugins/flatpickr";
import { initSelect2 } from '../components/init_select2';

//import { listenercollapseaddcompany } from "../plugins/collapse_profile";
//import { companysearch } from "../plugins/company_search";
import { showModal } from "../plugins/display_modal";
import { displaycategory } from "../plugins/display_category"
import { submit_review } from "../plugins/submit_review"
import { itw_selector } from "../plugins/itw_selector"

document.addEventListener('turbolinks:load', () => {
 //  Call your functions here, e.g:
   initSelect2();
  if (document.getElementById('banner-typed-text')) {
    loadDynamicBannerText();
  }
  initFlatpickr_date();
  initFlatpickr_hour();
  initSelect2();
  displaycategory();
  //listenercollapseaddcompany();
  //companysearch();
  if (document.getElementById("ExperienceModal")){
  showModal();
  }
  submit_review();
  itw_selector();
});
