$().ready(function () {
                $("#signupForm").validate({
                    rules: {
                        
                        username: {
                            required: true,
                            minlength: 3,
                            maxlength: 25
    
     //for length of lastname
                        },
                        password: {
                            required: true,
                            minlength: 8,
                            
                        },
                        confirm_password: {
                            required: true,
                            minlength: 8,
                            equalTo: "#password" //for checking both passwords are same or not
                        },
                        email: {
                            required: true,
                            email: true,
                        },
                        agree: "required"
                    },
                    // in 'messages' user have to specify message as per rules
                    messages: {
                       
                        username: {
                            required: " Please enter a username",
                            minlength: " Your username must consist of at least 2 characters"
                        },
                        password: {
                            required: " Please enter a password",
                            minlength: " Your password must be consist of at least 5 characters"
                        },
                        confirm_password: {
                            required: " Please enter a password",
                            minlength: " Your password must be consist of at least 5 characters",
                            equalTo: " Please enter the same password as above"
                        },
                        agree: "Please accept our policy"
                    }
                });
            });