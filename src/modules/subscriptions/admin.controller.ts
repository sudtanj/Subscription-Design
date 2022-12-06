import { Body, Controller, Param, Patch } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { VideoLiveStreamingModel } from './video-live-streaming.model'
import { HydratedDocument, Model } from 'mongoose'

@Controller('/admin')
export class AdminController {
  constructor(
    @InjectModel(VideoLiveStreamingModel.name)
    private videoLiveModel: Model<HydratedDocument<VideoLiveStreamingModel>>,
  ) {}

  @Patch('/videos/:video_id')
  async updateVideo(@Body() body: any, @Param('video_id') videoId: string) {
    const videoLive = await this.videoLiveModel.findById(videoId).exec();
    if (!videoLive) {
      return {
        status: 'failed',
        message: 'video not found!',
      };
    }

    videoLive.is_premier = body.isPremier;

    await videoLive.save();

    return videoLive;
  }
}
