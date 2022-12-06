import { Module } from '@nestjs/common'
import { SubscriptionController } from './subscription.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { SubscriptionSchema, SubscriptionsModel } from './subscriptions.model'
import { UsersModel, UsersSchema } from './users.model'
import { VideoLiveSchema, VideoLiveStreamingModel } from './video-live-streaming.model'
import { VideoController } from './video.controller'
import { AdminController } from './admin.controller'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SubscriptionsModel.name, schema: SubscriptionSchema },
    ]),
    MongooseModule.forFeature([
      { name: UsersModel.name, schema: UsersSchema },
    ]),
    MongooseModule.forFeature([
      { name: VideoLiveStreamingModel.name, schema: VideoLiveSchema },
    ]),
  ],
  controllers: [SubscriptionController, VideoController, AdminController],
  providers: [],
})
export class SubscriptionModule {}
