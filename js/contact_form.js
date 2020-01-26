token = '';
back_end_address = 'https://portfolio-gabrielslima.herokuapp.com'
$(document).ready(function(){

    $.ajax({
        method: "post",
        url: back_end_address + '/getToken',
        data: JSON.stringify({ "username": "portfolio-front-end-app" , "key": "5CC0F968220314E0EDC31AE11E5BBE10E89C6230AF7BA871C854CAE717A8DF0A"}),
        headers: {'Content-Type': 'text/plain'},
        success: function(result){
            token = result.token;
        }
    });
});

function toJson() {
    formJson = $('#contact-form').serializeArray();
    
    for(var i = 0; i < formJson.length; i++) {
        if(!formJson[i]['value']){
            firstLetterUpperCase = formJson[i]['name'].charAt(0).toUpperCase();
            fieldNameWithOutFisrtLetter = formJson[i]['name'].slice(1);
            completeFieldName = formJson[i]['name'].charAt(0).toUpperCase() + formJson[i]['name'].slice(1);
            return toastr.error("The field \"{{INVALID_FIELD}}\" can't be empty".replace('{{INVALID_FIELD}}', completeFieldName));
        }
    }

    for(var i = 0; i < formJson.length; i++) {
        if(formJson[i]['value'].length > 255){
            firstLetterUpperCase = formJson[i]['name'].charAt(0).toUpperCase();
            fieldNameWithOutFisrtLetter = formJson[i]['name'].slice(1);
            completeFieldName = formJson[i]['name'].charAt(0).toUpperCase() + formJson[i]['name'].slice(1);
            return toastr.error("The field \"{{INVALID_FIELD}}\" has a invalid length.".replace('{{INVALID_FIELD}}', completeFieldName));
        }
    }

    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formJson[1]['value'])) {
        return toastr.error("You have entered an invalid email address.");
    }
    $.ajax({
        method: "POST",
        url: back_end_address + '/faleConosco?token=' + token,
        data: formJson,
        success: function(result){
            toastr.success(result);
        },
        error: function(result){
            toastr.error("An error ocurred while trying to send your message, please reload the page and try again.");
        }
    });
}