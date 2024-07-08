import { Component } from "@/components/component";
import { categories } from "@/content";

type Props = {
  params: {
    category: string;
  };
};

async function Category({ params }: Props) {
  const category = params.category;
  const routeComponents = categories.find((item) => item.slug === category);
  return (
    <main className="animate-translate-up flex w-full flex-col items-center opacity-0">
      {routeComponents?.components.map((component) => (
        <Component
          fileName={component.fileName}
          filePath={routeComponents.slug}
          key={component.fileName}
          container={routeComponents.container}
          tailwindConfig={component.tailwindConfig}
        />
      ))}
    </main>
  );
}
export default Category;
