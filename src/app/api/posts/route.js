import { revalidateTag } from "next/cache"
import { NextResponse } from "next/server"

export async function GET() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        // cache: 'no-cache'
        next: {
            revalidate: 0
        }
    })
    const posts = await response.json()
    // revalidateTag('posts')

    return NextResponse.json(posts)
}

// export async function POST(request) {

// }

// export async function POST(request) {
//     // Puedes manejar lógica para el método POST aquí si es necesario
// }
