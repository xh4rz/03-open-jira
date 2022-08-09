/* eslint-disable @next/next/no-server-import-in-page */
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(req: NextRequest) {
	console.log({ req: req.nextUrl });
	return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
	// matcher: '/about/:path*'
	matcher: [
		// '/api/:path',
		'/api/entries/:path'
	]
};
