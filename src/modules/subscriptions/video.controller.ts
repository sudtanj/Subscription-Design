import { Controller, Get, Param, Query } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { SubscriptionsModel } from './subscriptions.model';
import { HydratedDocument, Model } from 'mongoose';
import { UsersModel } from './users.model';
import { VideoLiveStreamingModel } from './video-live-streaming.model';
import * as moment from 'moment';

@Controller('/videos')
export class VideoController {
  constructor(
    @InjectModel(VideoLiveStreamingModel.name)
    private videoLiveModel: Model<HydratedDocument<VideoLiveStreamingModel>>,
    @InjectModel(UsersModel.name)
    private usersModel: Model<HydratedDocument<UsersModel>>,
  ) {}

  @Get('/:video_id')
  async getVideoOrLiveStream(
    @Query('user_id') userId: string,
    @Param('video_id') videoId: string,
  ) {
    const user = await this.usersModel.findById(userId).exec();
    if (!user) {
      return {
        status: 'failed',
        message: 'user not found!',
      };
    }

    const video = await this.videoLiveModel.findById(videoId);
    if (!video) {
      return {
        status: 'failed',
        message: 'video not found!',
      };
    }

    if (
     (user.subscription_expired_date === null ||
     moment(new Date()).isAfter(user.subscription_expired_date)) && video.is_premier === true
    ) {
      return 'Please Subscribe to Premier.';
    }

    return 'Can Play.';
  }
}
