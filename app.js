import $ from 'jquery';
import './style.css';

document.querySelector('p').innerHTML = 'JS control'; // change value here to test hot feature

// show how proxy in webpack solves CORS issue only for dev mode
$.ajax({
  url: '/api/study',
  type: 'get',
  success: function(data) {
    console.log(data);
  },
});

module.hot.accept(); // only when adding this, javascript hot feature is enable.
// accept function can pass config that guides which module enables hot feature
