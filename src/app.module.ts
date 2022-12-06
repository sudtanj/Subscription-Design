import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { SubscriptionModule } from './modules/subscriptions/subscription.module'

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://personal:personal@cluster0.t6y5jr2.mongodb.net/test',
      { useNewUrlParser: true },
    ),
    SubscriptionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
