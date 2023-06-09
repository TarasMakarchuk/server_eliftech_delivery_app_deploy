import { NestFactory } from '@nestjs/core';
import { PrismaService } from './prisma.service';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);

  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);

  app.setGlobalPrefix('api');
  app.enableCors();

  
  await app.listen(PORT, () => {
    Logger.log(`http://localhost:${PORT}`, `Server start on host`);
  });
}

bootstrap();
