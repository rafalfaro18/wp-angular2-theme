<?php
$angular_project_path = get_template_directory_uri().'/my-app/dist/my-app/';
?>
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title><?php echo get_bloginfo('name'); ?></title>
  <base href="/">

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="<?php echo $angular_project_path; ?>favicon.ico">
  <?php wp_head(); ?>
</head>
<body>
  <app-root></app-root>
  <?php wp_footer(); ?>
</body>
</html>
