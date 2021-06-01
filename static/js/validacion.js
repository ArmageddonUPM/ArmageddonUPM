$(document).ready(function() {
    $("#basic-form").validate({
      rules: {
        emit_data1 : {
          required: true,
          minlength: 6
        },
        emit_data4: {
          required: true,
          number: true,
          min: 1
        },
        emit_data2 : {
            required: true,
            minlength: 6
          },
          emit_data3 : {
            required: true,
            minlength: 6
          },
       
      }
    });
  });
  