import React, { useEffect } from 'react';
import grapesjs from 'grapesjs';
import plugin from 'grapesjs-preset-webpage';
const WebBuilder = () => {

    useEffect(() => {
        grapesjs.init({
          container: '#gjs',
          height: '100vh',
          width: '100%',
          plugins: [plugin, "gjs-blocks-basic"],
          storageManager: {
            id: 'gjs-',
            type: 'local',
            autosave: true,
            storeComponents: true,
            storeStyles: true,
            storeHtml: true,
            storeCss: true,
          },
          deviceManager: {
            devices:
            [
              {
                id: 'desktop',
                name: 'Desktop',
                width: '992px',
              },
              {
                id: 'tablet',
                name: 'Tablet',
                width: '768px',
                widthMedia: '992px',
              },
              {
                id: 'mobilePortrait',
                name: 'Mobile portrait',
                width: '320px',
                widthMedia: '575px',
              },
            ]
          },
          pluginsOpts: {
            plugin: {
              blocksBasicOpts: {
                blocks: ['column1', 'column2', 'column3', 'column3-7', 'text',     'link', 'image', 'video'],
                category: "Basic",
                flexGrid: 1,
                stylePrefix: "gjs-",
                addBasicStyle: true,
                labelColumn1: "1 Column",
                labelColumn2: "2 Columns",
                labelColumn3: "3 Columns",
                labelText: "Text"
              },
              blocks: ['link-block', 'quote', 'text-basic'],
            },
          }
        })
      },[])

    return (
        <div id="gjs"></div>
    );
};

export default WebBuilder;