import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { ShopService } from './shop.service';
import { ShopController } from './shop.controller';

@Module({
  controllers: [ShopController],
  providers: [ShopService, PrismaService],
})
export class ShopModule {}
