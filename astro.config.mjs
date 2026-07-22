import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: 'https:/climate-resilience-collaborative.github.io',
  base: '/documentation',
  integrations: [
    starlight({
      title: "CRC Documentation",
      customCss: ["./src/styles/custom.css"],
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
          label: "Admin",
          items: [
            {
              label: "About Admin",
              link: "/admin/"
            },
            {
              label: "Managing Google Group Members",
              link: "/admin/guides/crc-mail-list/"
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
