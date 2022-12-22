import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { SubscriptionModule } from './modules/subscriptions/subscription.module'

@Module({
  imports: [
    MongooseModule.forRoot(
      'MONGODB_URL',
      { useNewUrlParser: true },
    ),
    SubscriptionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
