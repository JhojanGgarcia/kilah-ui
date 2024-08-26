import { Component } from "@/components/component";
import { defaultConfig } from "@/constants";
import { getComponentsData } from "@/lib/utils";

const urlBase = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : "http://localhost:3000";

type Props = {
  params: {
    category: string;
  };
};

async function Category({ params }: Props) {
  const category = params.category;
  const componentsDataUrl = `${urlBase}/components/${category}/index.json`;
  const routeComponents = await getComponentsData(componentsDataUrl);
  if (!routeComponents) {
    console.log("Error Getting component Data");
    return null;
  }
  return (
    <>
      <main className="flex w-full animate-translate-up flex-col items-center overflow-x-auto px-4 py-28 opacity-0 transition-opacity duration-300 ease-out">
        <ul className="flex w-full flex-col items-center space-y-10">
          {routeComponents?.components.map((component) => {
            let config = defaultConfig;

            if (component.tailwindConfig && config.theme) {
              config.theme.extend = { ...component.tailwindConfig.theme };
            }

            //todo fix this bug

            // if (component.tailwindConfig?.plugins && config.plugins) {
            //   let a = [...config.plugins, component.tailwindConfig.plugins];
            //   config.plugins = a;
            // }

            return (
              <li
                key={component.fileName}
                id={component.fileName}
                className="flex w-full max-w-[1280px] flex-col space-y-8 border-b border-foreground/20 pb-20"
              >
                <h3 className="w-fit py-2 text-xl font-black md:pr-20 md:text-4xl">
                  #{component.title}
                </h3>
                <Component
                  fileName={component.fileName}
                  filePath={routeComponents.slug}
                  key={component.fileName}
                  container={routeComponents.container}
                  tailwindConfig={JSON.stringify(config, null, 4)}
                />
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}
export default Category;
