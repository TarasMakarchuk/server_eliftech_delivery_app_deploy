import { Module } from '@nestjs/common';
import { GoodsService } from './goods.service';
import { PrismaService } from '../prisma.service';
import { GoodsController } from './goods.controller';


@Module({
  controllers: [GoodsController],
  providers: [GoodsService, PrismaService],
})
export class GoodsModule { }
