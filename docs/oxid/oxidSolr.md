---
title: Oxid 6.2 & Solr (Devilbox)
sidebar_label: Oxid Solr
slug: /oxidSolr
---

## Add Solr to the Devilbox

Add into the rootfolder of the devilbox the *.yaml to override

`cp compose/docker-compose.override.yml-solr docker-compose.override.yml`\

Add the following env-vars into it:

``#Solr version to choose``\
``#SOLR_SERVER=5``\
``#SOLR_SERVER=6``\
``#SOLR_SERVER=7``\
``SOLR_SERVER=latest``\
``SOLR_CORE_NAME=devilbox``\
``HOST_PORT_SOLR=8983``\

Now you can start the Container with Solr:

`docker-compose up -d httpd php mysql solr`

To go to the QueryClient, use this link:

`http://localhost:8983/solr/#/devilbox/query`

Use this Parameter for some Solrinstances:

`core: 'devilbox'`\
`host: 'solr'`\
`port: 8983`\
`path: '/solr/'`\


Basic Connection for Solr & Oxid is under:

https://github.com/OXIDprojects/oxsolr

