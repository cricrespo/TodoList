$(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered

    //Modal Main
    $('#modal-trigger').click(function(){
      $(".modal").modal();
      $('#modal1').modal("open");

    });

    $('#close-modal').click(function(){
      // if ($('title') || $('todo') ){
      //   $('#modal1').modal("close");
      // }
    });

   /////////////////
  
   //MODAL TODO'S
    
   $('#open-edit').click(function(){
      console.log('asdasdasdas');
      // $(".modal-edit").modal();
      // $('#modal-edit').modal("open");
    });
    
    
    ////////////////



    $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15, // Creates a dropdown of 15 years to control year,
      today: 'Today',
      clear: 'Clear',
      close: 'Ok',
      closeOnSelect: false // Close upon selecting a date,
    });
      
    $('.timepicker').pickatime({
      default: 'now', // Set default time: 'now', '1:30AM', '16:30'
      fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
      twelvehour: false, // Use AM/PM or 24-hour format
      donetext: 'OK', // text for done-button
      cleartext: 'Clear', // text for clear-button
      canceltext: 'Cancel', // Text for cancel-button
      autoclose: false, // automatic close timepicker
      ampmclickable: true, // make AM PM clickable
      aftershow: function(){} //Function for after opening timepicker
    });
        

  });



//   $('#modal1').modal('open');