import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: 'https:/climate-resilience-collaborative.github.io',
  base: '/documentation',
  integrations: [
    starlight({
      title: "CRC Documentation",
      logo: {
        light: "/public/crc-logo.svg",
        dark: "/public/crc-logo.svg",
      },
      favicon: "/crc-logo.svg",
      social: [
        { icon: "github", label: "GitHub", href: "https://github.com/climate-resilience-collaborative" },
      ],
      sidebar: [
        {
          label: "Data Management",
          items: [
            { label: "Koa Cloud", items: [
              {
                label: "About KoaCloud",
                link: "/data-management/koacloud/"
              },
              {
                label: "Accessing KoaCloud",
                link: "/data-management/koacloud/guides/accessing/"
              },
              {
                label: "Unlinking Sync Sync Client",
                link: "/data-management/koacloud/guides/unlinking-sync-client/"
              },
            ]},
            { label: "Metadata Tool", items: [
              {
                label: "About Metadata Tool",
                link: "/data-management/metadata-tool/"
              },
              {
                label: "Accessing Metadata Tool",
                link: "/data-management/metadata-tool/guides/accessing/"
              },
              {
                label: "Record Curation",
                link: "/data-management/metadata-tool/guides/record-curation/"
              },
              {
                label: "Managing Records",
                link: "/data-management/metadata-tool/guides/record-management/"
              },
              {
                label: "Viewing Projects",
                link: "/data-management/metadata-tool/guides/projects/"
              },
              {
                label: "Batch Record Creation",
                link: "/data-management/metadata-tool/guides/batch-record/"
              },
            ]},
            { label: "Geonetwork", items: [
              {
                label: "About Geonetwork",
                link: "/data-management/geonetwork/"
              },
            ]},
          ],
        },
        {
          label: "Geoserver",
          items: [
            {
              label: "About Geoserver",
              link: "/geoserver/"
            },
            {
              label: "Adding WMS Layer to ArcMap and QGIS",
              link: "/geoserver/guides/wms_arcgis/"
            },
            {
              label: "Modifying Layer on Geoserver",
              link: "/geoserver/guides/modifying_layer/"
            },
            {
              label: "Layer Management",
              link: "/geoserver/guides/layer_management/"
            },
          ],
        },
        {
          label: "Wordpress",
          items: [
            {
              label: "About Wordpress",
              link: "/wordpress/"
            },
            {
              label: "Creating News Articles",
              link: "/wordpress/guides/news-article/"
            },
            {
              label: "Adding Publications",
              link: "/wordpress/guides/updating-publications/"
            },
          ],
        },
      ],
    }),
  ],
});
