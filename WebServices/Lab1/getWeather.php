<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cities</title>
</head>
<body>
    <form action="./"  method="POST">
        <h1>Weather Forcast</h1>
        <select name="city">
            <?php
                foreach($egyptian_cities as $city) {
                    echo "<option value=" . $city["id"] . ">".$city["country"]." >> ". $city["name"] . "</option>";
                }
            ?>
        </select>
        <button type="submit">Get Weather</button>
    </form>
</body>
</html>