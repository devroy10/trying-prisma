import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
// use `prisma` in your application to read and write data in your DB

// putting the main function into an async function is because almost everything in prisma runs async
async function main() {
    try {
        const users = await prisma.user.deleteMany()
        console.log(users);
    } catch (error) {
        console.error('Error creating user:', error);
    }
}

main()

    .catch(e => {
        console.error(e.message)
    })
    .finally(async () => {
        await prisma.$disconnect
    })