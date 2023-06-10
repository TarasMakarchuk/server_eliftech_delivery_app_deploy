import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { GoodsService } from './goods.service';
import { GoodsController } from './goods.controller';

@Module({
  controllers: [GoodsController],
  providers: [GoodsService, PrismaService],
})
export class GoodsModule { }
