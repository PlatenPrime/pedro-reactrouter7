import type { Route } from "./+types/post";

export async function loader({params}: Route.LoaderArgs) {
   const postId  = params.postId;
   return { postId };
}

export async function action() {
    return {};
}

export default function Post({loaderData}: Route.ComponentProps) {
    console.log(loaderData);
    return <div>Post {loaderData.postId}</div>;
}