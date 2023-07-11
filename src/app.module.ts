import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { path } from 'app-root-path';
import { GoodsModule } from './goods/goods.module';
import { ShopModule } from './shop/shop.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: `${path}/uploads`,
      serveRoot: '/uploads',
    }),
    GoodsModule,
    ShopModule,
    OrderModule,
  ],
})
export class AppModule {}
