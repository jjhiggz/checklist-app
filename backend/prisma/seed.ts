import { prisma } from "./prisma";

export const seed = async () => {
  console.log(1);
  //   await prisma.task.deleteMany().catch((e) => {
  //     console.error(e);
  //   });
  console.log(2);

  const _goToGroceryStore = await prisma.task.create({
    data: {
      isComplete: false,
      name: "Go to grocery store",
    },
  });

  const _doLaundry = await prisma.task.create({
    data: {
      isComplete: true,
      name: "Do Laundry",
    },
  });

  console.log("seeded....🌱");
};

seed();
