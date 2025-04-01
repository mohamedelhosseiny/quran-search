import {
  VueQueryPlugin,
  QueryClient,
  type VueQueryPluginOptions,
} from "@tanstack/vue-query";

export default defineNuxtPlugin((nuxtApp) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5, // 5 minutes
        gcTime: 1000 * 60 * 60, // 1 hour
        retry: 3,
        refetchOnWindowFocus: false,
      },
    },
  });

  const options: VueQueryPluginOptions = {
    queryClient,
  };

  nuxtApp.vueApp.use(VueQueryPlugin, options);

  if (process.env.NODE_ENV === "development") {
    import("@tanstack/vue-query-devtools").then((module) => {
      const VueQueryDevtools = module.VueQueryDevtools;
      nuxtApp.vueApp.component("VueQueryDevtools", VueQueryDevtools);
    });
  }
});
