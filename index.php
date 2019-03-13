<?php
$angular_project_path = get_stylesheet_directory_uri().'/my-app/dist/my-app/';
?>
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title><?php echo get_bloginfo('name'); ?></title>
  <base href="/">

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="<?php echo $angular_project_path; ?>favicon.ico">
<link rel="stylesheet" href="<?php echo $angular_project_path; ?>styles.css"></head>
<body>
  <app-root></app-root>
<script type="text/javascript" src="<?php echo $angular_project_path; ?>runtime.js"></script><script type="text/javascript" src="<?php echo $angular_project_path; ?>es2015-polyfills.js" nomodule></script><script type="text/javascript" src="<?php echo $angular_project_path; ?>polyfills.js"></script><script type="text/javascript" src="<?php echo $angular_project_path; ?>main.js"></script></body>
</html>
