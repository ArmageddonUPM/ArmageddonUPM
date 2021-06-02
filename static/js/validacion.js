$(document).ready(function() {
    $("#basic-form").validate({
      rules: {
        emit_data1 : {
          required: true,
          minlength: 5
        },
        emit_data4: {
          required: true,
          number: true,
          min: 1 ,
          max: 15
        },
        emit_data2 : {
            required: true,
            minlength: 5
          },
          emit_data3 : {
            required: true,
            minlength: 5
          },
       
      }
    });
  });
  