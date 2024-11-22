// import { api, apiConfig } from "@/api.config";
// import { getInspiration, getProjects, getServices } from "@/api/common";
// import { IInspiration, IProject, IService } from "@/types/common.type";

// export const revalidate = 0;

// const URL = apiConfig.mainUrl;

// async function fetchAllInspirations(size = 12): Promise<IInspiration[]> {
//   const allInspirations: IInspiration[] = [];
//   let page = 1;
//   let fetchedData: IInspiration[] = [];

//   do {
//     const res = await api.get(`inspiration?size=${size}&page=${page}`);
//     fetchedData = res.data?.data || [];
//     allInspirations.push(...fetchedData);
//     page += 1;
//   } while (fetchedData.length === size);

//   return allInspirations;
// }

// export default async function sitemap(): Promise<any> {
//   const inspirations = await fetchAllInspirations();
//   const projects = await getProjects();
//   const services = await getServices();

//   const inspirationRoutes = inspirations?.map(
//     (inspiration: IInspiration) => {
//       return {
//         url: `${URL}/inspiration/${inspiration.slug}`,
//         lastModified: new Date().toISOString(),
//         priority: 0.9,
//       };
//     }
//   ) || [];

//   const projectRoutes = projects?.data?.map((project: IProject) => {
//     return {
//       url: `${URL}/ourWork/${project.slug}`,
//       lastModified: new Date().toISOString(),
//       priority: 0.9,
//     };
//   });

//   const serviceRoutes = services?.map((service: IService) => {
//     return {
//       url: `${URL}/services/${service.slug}`,
//       lastModified: new Date().toISOString(),
//       priority: 0.9,
//     };
//   });

//   const routes = [
//     "/",
//     "/about",
//     "/consultation",
//     "/contact",
//     "/faq",
//     "/inspiration",
//     "/ourWork",
//     "/privacyPolicy",
//     "/services",
//     "/termsAndConditions",
//   ].map((route) => ({
//     url: `${URL}${route}`,
//     lastModified: new Date().toISOString(),
//     priority: 0.9,
//   }));
//   return [...routes, ...inspirationRoutes, ...projectRoutes, ...serviceRoutes];
// }
