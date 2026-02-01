const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')

const prisma = new PrismaClient()

async function main() {
    const email = 'ram@ros.com'
    const password = 'Ram@12345'
    const hashedPassword = await bcrypt.hash(password, 10)

    // Clear existing admins
    await prisma.admin.deleteMany({})

    const admin = await prisma.admin.create({
        data: {
            email,
            name: 'Ram (Super Admin)',
            password: hashedPassword,
        },
    })
    console.log('Admin credentials updated successfully:', { email, name: admin.name })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
