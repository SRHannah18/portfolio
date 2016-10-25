<?php

define('WP_MEMORY_LIMIT', '64M');
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'portfolio');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '+s;`H.$%G@GY#*EmK46:=|uLJ2oCg+/2[;bE=NpGV8B|8_zhJ@ola>:WCz>Vdt;A');
define('SECURE_AUTH_KEY',  'Tb8&&|eT1^j%j{*K*oUYD<tzT3uY(1Kw^JE &9S*2bI(6F}Gdx{Xe0MmLGLLHQ_3');
define('LOGGED_IN_KEY',    'EOJsH2G?4VpU$~%xkO__UjX80UhnZnM5:*`;`|q_1WN*szHPr sV<=%=.[U[31%+');
define('NONCE_KEY',        'FtT7usg*y9:NtzU@4%&P|k0u+Qqe>6S>F3@R-]RUoJH>~ntl@Dju; -S$b6] Y` ');
define('AUTH_SALT',        '_mX|S6*+X52d%q~?$|*#38qz+00dDdi`/2s2pgu|} J[HYYCJ<c,-|!?k@,0%cv3');
define('SECURE_AUTH_SALT', '<`uqFCD8#oU4xap[0.vr/qj1:9q;c_^=d^N<W4Xr$dO9awP.^y9W[sIE!q5lP[S.');
define('LOGGED_IN_SALT',   '8_PVyo#rOj#Ji{U7%wwho7sWF=$bZSD8VK4F)YfZq,G]emxN6TO1ZXRS4vgFGojL');
define('NONCE_SALT',       '4m{#kWnL^LeaFyUR|k`lo!^{XZH$6tt3>ghz!T3R *I&BM1^R93b.NDFi[7bA0)[');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
