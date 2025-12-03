import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/lib/generated/prisma/client";

const globalForPrisma = global as unknown as { prismaAdapter: PrismaClient };

const prisma =
  globalForPrisma.prismaAdapter ||
  new PrismaClient({
    adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }),
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prismaAdapter = prisma;
}

export { prisma };
