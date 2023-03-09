
<html>

<head>
    <title> Contact Form </title>
    <link rel="stylesheet" href="./views/style.css">

</head>

<body>
    <h3> Contact Form </h3>
    <div id="after_submit">

    </div>
    <form id="contact_form" action="#" method="POST" enctype="multipart/form-data">

        <div class="row">
            <label class="required" for="name">Your name:</label><br />
            <input id="name" class="input" name="name" type="text" value="<?php echo (isset($name)) ? $name : ''; ?>" size="30" /><br />
            
        </div>
        <div class="row">
            <label class="required" for="email">Your email:</label><br />
            <input id="email" class="input" name="email" type="text" value="<?php echo (isset($email)) ? $email : ''; ?>" size="30" /><br />

        </div>
        <div class="row">
            <label class="required" for="message">Your message:</label><br />
            <textarea id="message" class="input" rows="7" name="message" cols="30"><?php echo (isset($message)) ? $message : ''; ?></textarea><br />

        </div>

        <input id="submit" type="submit" value="Send email" />
        <input id="clear" name="clear" onclick="clearBtn()" type="reset" value="clear form" />
    </form>
    <script>
        
    </script>
</body>

</html>
