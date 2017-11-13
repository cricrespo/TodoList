$(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered

    $('#modal-trigger').click(function(){
      $(".modal").modal();
      $('#modal1').modal("open");

    });

    $('#close-modal').click(function(){
      $('#modal1').modal("close");

    });

  });



//   $('#modal1').modal('open');