const APP = {


    domReady: function () {
        $(document).ready(function () {
            $('#preloader').fadeOut(500, function () {

            });
        });
    },


    formMask: function () {
        //$('.js-phone').mask('+7 (000) 000-00-00');
        // примеры '+7 (000) 000-00-00' // '+7 (___) ___-__-__' // 00.00.0000 // __.__.____
    },
    formValidate: function () {
        // $(".js-form-validate").each(function () {
        //     const $form = $(this);
        //
        //     $form.validate({
        //         rules: {
        //             name: {
        //                 minlength: 2,
        //                 required: true
        //             },
        //             phone: {
        //                 minlength: 18,
        //                 required: true
        //             }
        //         },
        //         messages: {
        //             phone: "Данное поле заполнено не верно",
        //             name: "Данное поле не заполнено"
        //         }
        //     });
        // });
    }
};

export default APP;
