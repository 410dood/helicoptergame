<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <title>Phaser Template</title>
    <link rel="stylesheet" href="styles/main.css">
    <link rel="manifest" href="manifest.json">
    <script>
        if (navigator.serviceWorker) {
            navigator.serviceWorker.register('service-worker.js')
                .then(function () {
                console.log('service worker installed');
            })
            .catch(function (err) {
                console.log('Error', err);
        });
}
	</script>
	
</head>
<body>
    <script src="scripts/phaser.min.js"></script>
    <script src="scripts/game.js"></script>
</body>
</html>