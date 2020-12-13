---
title: Oxid 6.2 & Devilbox
sidebar_label: Oxid xDebug Devilbox
slug: /oxidDevilbox
---

## xDebug Settings PHP-Storm

- Add the compose.yml to run/debug-configurations
``
/home/danny/PhpstormProjects/devilboxprojects/devilbox/docker-compose.yml;
``

- Under Services use the php-service:

``
php
``


## Languages & Framework -> PHP
- Under "Languages & Framework -> PHP" you should add the CLI Interpreter:

- Press the "+"-Button and add the container.
- Server "Devilbox"
- Image name: devilbox/php-fpm:7.1-work-0.101
- PHP executable: "php"

After that you should see the PHP-Version, Xdebug Version and the Configuration file

## Language & Frameworks -> PHP -> Servers

- Name: yourhost.loc
- Host: yourhost.loc

Check "Use path mappings" and add the absolute Paths from your container:

## Container Settings:

- Container Path: /opt/project
- HostPath: xxx/devilbox/data/www/yourproject
- htdocs = /shared/httpd/yourproject/htdocs