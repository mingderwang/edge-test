// vercel/edge.ts
import { next } from '@vercel/edge';

export default async function handler(request: Request) {
   const { pathname } = new URL(request.url);

   // Example: Restrict access to `/restricted`
   if (pathname.startsWith('/restricted')) {
      const token = request.headers.get('Authorization');

      if (!token) {
         return Response.redirect('/login');
      }
   }

   // Proceed with the request if conditions are met
   return next();
}

export const config = {
  runtime: 'experimental-edge'
};
